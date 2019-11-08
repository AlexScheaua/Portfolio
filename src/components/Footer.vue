<template>
    <footer>&copy; <a @click="changeComponent('About')">Alex Scheaua</a> 2019</footer>
</template>

<script>
    export default {
        name: "Footer",
        props: [
            'changeComponent'
        ]
    }
</script>

<style scoped>

</style>