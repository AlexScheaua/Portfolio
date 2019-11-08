<template>
    <div>
        <Navbar :changeComponent="changeComponent"/>
        <main>
            <div :is="component" :changeComponent="changeComponent"></div>
        </main>
    </div>
</template>

<script>

    import Navbar from "./components/Navbar";
    import Home from "./components/Home";
    import About from "./components/About";
    import Projects from "./components/Projects";
    import Contact from "./components/Contact";

    export default {
        name: 'app',
        components: {
            Navbar,
            Home,
            About,
            Projects,
            Contact,
        },
        data() {
            return {
                component: Home
            }
        },
        methods: {
            changeComponent(component) {
                this.component = component;
            }
        }
    }
</script>

<style lang="scss">
    @import "scss/main";

</style>
