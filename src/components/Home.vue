<template>
    <section class="home">
        <div>
            <h2>Hi! My name is </h2>
            <h1 class="home__name">Alex <span class="home__name--last">Scheaua</span></h1>
            <h2>Fullstack Web Developer</h2>
            <h3 class="home__about-me" @click="changeComponent('About')">About Me</h3>
        </div>
        <Social :changeComponent="changeComponent"/>
        <Footer :changeComponent="changeComponent"/>
    </section>
</template>

<script>
    import Social from "./Social";
    import Footer from "./Footer";
    export default {
        name: "home",
        props:['changeComponent'],
        components: {Footer, Social}
    }
</script>

<style scoped>

</style>