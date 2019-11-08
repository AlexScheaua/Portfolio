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
        methods: {
            showMenu(){
                if(this.isShowMenu) {
                    return 'open'
                }
                return ''
            },
            toggleMenu(){
                this.isShowMenu = !this.isShowMenu;
            },
            clickHandler(component){
                this.changeComponent(component);
                this.isShowMenu = false;
            }
        }
    }
</script>

<style scoped>

</style>