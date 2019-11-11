<template>
    <section class="projects">
        <div class="projects__bio-image">
            <h2 class="text-secondary">{{projectName}}</h2>
            <p>{{projectDescription}}</p>
        </div>

        <div v-if="projects.length" class="projects__items">
            <div v-for="(project, index) in projects" :key="project.name" class="projects__item"
                 :style="`background: url(${projectImages[index]})`">
                <div class="projects__btns">
                    <a @click="previewProject(index)" class="projects__btn w-100">
                        Description
                    </a>
                    <a v-if="isNavigable(index)" :href="project.url" class="projects__btn" target="_blank">
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
    import storage from "@/firebase/FirebaseInit";

    export default {
        name: "projects",
        props: ['changeComponent'],
        components: {Footer, Social},
        data() {
            return {
                projectName: '',
                projectDescription: '',
                projectImages: [],
                projects: []
            }
        },
        created() {
            this.initializeProjects();
        },
        methods: {
            /**
             * Opens project description
             * @param {number} index
             */
            previewProject(index) {
                this.projectName = this.projects[index].name;
                this.projectDescription = this.projects[index].description;
            },
            /**
             * Allows navigating away from current page to a project
             * @param {number} index
             * @returns {boolean}
             */
            isNavigable(index) {
                return this.projects[index].url;
            },
            /**
             * Gets data and images from firebase
             */
            initializeProjects(){
                fetch('https://portfolio-819bb.firebaseio.com/Projects.json')
                    .then(res => res.json())
                    .then(data => this.projects = data )
                    .then(async () => {
                        for(let i in this.projects){
                            let downloadUrl = await storage.ref(this.projects[i].image).getDownloadURL();
                            this.projectImages.push(downloadUrl);
                        }
                    })

            }
        }
    }
</script>

<style scoped>
</style>