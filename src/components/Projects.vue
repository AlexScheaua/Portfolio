<template>
    <section class="projects">
        <div class="projects__bio-image">
            <h2 class="text-secondary">{{projectName}}</h2>
            <p>{{projectDescription}}</p>
        </div>

        <div class="projects__items">
            <div v-for="(project, index) in projects" :key="project.name" class="projects__item"
                 :style="`background: url(${project.image})`">
                <div class="projects__btns">
                    <a @click="previewProject(index)" class="projects__btn w-100">
                        Description
                    </a>
                    <a :href="project.url" class="projects__btn" target="_blank">
                        Open
                    </a>
                    <a :href="project.github" class="projects__btn" target="_blank">
                        Github
                    </a>
                </div>
            </div>
        </div>
        <Social/>
        <Footer :changeComponent="changeComponent"/>
    </section>
</template>

<script>
    import Social from "./Social";
    import Footer from "./Footer";
    import projectsList from '../assets/Projects';

    export default {
        name: "projects",
        props: ['changeComponent'],
        components: {Footer, Social},
        data() {
            return {
                backgroundImage: '',
                projectName: 'Projects',
                projectDescription: ''
            }
        },
        computed: {
            projects() {
                return projectsList;
            }
        },
        methods: {
            previewProject(index) {
                this.projectName = this.projects[index].name;
                this.projectDescription = this.projects[index].description;
            }
        }
    }
</script>

<style scoped>
</style>