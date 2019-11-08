<template>
    <section class="about">
        <div class="about__bio-image">
            <div class="about__bio">
                <h2 class="text-secondary">About me</h2>
                <p>{{bio}}</p>
            </div>
        </div>

        <div class="jobs">
            <div v-for="item in experience" :key="item.interval" class="jobs__job">
                <h2 class="text-secondary">{{item.interval}}</h2>
                <h5>{{item.company}}</h5>
                <h3>{{item.role}}</h3>
                <ul>
                    <li v-for="line in item.description" :key="line">{{line}}</li>
                </ul>
                <h5 v-if="item.technologies">Technologies:</h5>
                <p v-if="item.technologies">{{item.technologies}}</p>
            </div>
        </div>
        <Social/>
        <Footer :changeComponent="changeComponent"/>
    </section>
</template>

<script>
    import Social from "./Social";
    import Footer from "./Footer";
    import About from "../assets/About"

    export default {
        name: "about",
        props:['changeComponent'],
        components: {Footer, Social},
        data(){
            return {
                bio: About.bio,
                experience: About.experience
            }
        }
    }
</script>

<style scoped>

</style>