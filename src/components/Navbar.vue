<template>
    <header>
        <div @click="toggleMenu" class="menu-btn" :class="showMenu()">
            <span class="menu-btn__burger" :class="showMenu()"></span>
        </div>
        <nav class="nav" :class="showMenu()">
            <ul class="menu-nav" :class="showMenu()">
                <li v-for="item in navItems" :key="item.component" class="menu-nav__item" :class="showMenu()">
                    <a @click="clickHandler(item.component)" :class="showMenu()" class="menu-nav__link active">{{item.text}}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "navbar",
        props: [
          "changeComponent"
        ],
        data(){
          return {
              isShowMenu: false,
              navItems: [
                  {
                      component: 'Home',
                      text: 'Home'
                  },
                  {
                      component: 'About',
                      text: 'About Me'
                  },
                  {
                      component: 'Projects',
                      text: 'My Projects'
                  },
                  {
                      component: 'Contact',
                      text: 'Contact'
                  },
              ]
          }
        },
        created(){
          window.onscroll = () => {this.scrollHandler()};
        },
        methods: {
            /**
             * applies toggle class for navbar
             * @returns {string}
             */
            showMenu(){
                if(this.isShowMenu) {
                    return 'open'
                }
                return ''
            },
            /**
             * toggles isShowMenu
             * @returns {Void}
             */
            toggleMenu(){
                this.isShowMenu = !this.isShowMenu;
            },
            /**
             * Changes components
             * @param component
             */
            clickHandler(component){
                this.changeComponent(component);
                this.isShowMenu = false;
            },
            /**
             * adds class to navbar to shrink it and modify the opacity based on scroll
             */
            scrollHandler(){
                if(window.scrollY > 80 && !this.isShowMenu){
                    document.querySelector('.nav').classList.add('scrolled');
                } else {
                    document.querySelector('.nav').classList.remove('scrolled');
                }
            }
        }
    }
</script>

<style scoped>

</style>