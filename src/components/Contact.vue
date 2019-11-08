<template>
    <section class="contact">
    <h2>Contact Me</h2>
    <div class="contact__list">
        <div class="contact__email">
            <Email class="email"/>Email:
            <span class="text-secondary">alex.scheaua22@gmail.com</span>
        </div>
        <div class="contact__phone">
            <Phone class="phone"/>Phone:
            <span class="text-secondary">0749 934 230</span>
        </div>
    </div>
        <Social/>
        <Footer :changeComponent="changeComponent"/>
    </section>
</template>

<script>
    import Social from "./Social";
    import Footer from "./Footer";
    import Email from "vue-material-design-icons/Email"
    import Phone from "vue-material-design-icons/CellphoneIphone"

    export default {
        name: "contact",
        props:['changeComponent'],
        components: {Footer, Social, Email, Phone}
    }
</script>

<style scoped>
    .email {
        position: relative;
        top: 4px;
    }

    .phone {
        position: relative;
        top: 2px;
    }
</style>