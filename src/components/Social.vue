<template>
    <div class="social-icons">
        <a href="https://www.linkedin.com/in/alexandru-scheaua-9b23a8136/" target="_blank">
            <LinkedinBoxIcon/>
        </a>
        <a href="https://github.com/AlexScheaua" target="_blank">
            <GithubBoxIcon/>
        </a>
    </div>
</template>

<script>
    import LinkedinBoxIcon from 'vue-material-design-icons/LinkedinBox';
    import GithubBoxIcon from 'vue-material-design-icons/GithubBox';

    export default {
        name: "social",
        components: {
            LinkedinBoxIcon,
            GithubBoxIcon
        }
    }
</script>

<style scoped>

</style>