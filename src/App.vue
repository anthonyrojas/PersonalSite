<template>
  <div id="app">
    <nav v-bind:class="{'nav-show': (navOpen == true && windowWidth <= 1048), 'nav-hide': (navOpen == false && windowWidth <= 1048)}">
      <div class="nav-logo">
      </div>
      <ul>
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/education">Education</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/work">Work</router-link></li>
      </ul>
    </nav>
    <main>
      <div class="header">
        <div class="header-overlay">
          <h1 class="header-title">Anthony Rojas</h1>
          <p class="header-caption">Javascript programmer, back end developer, full stack developer.</p>
        </div>
      </div>
        <button class="floating-menu-btn" v-on:click="toggleMenu()">
          <transition name="rotate">
            <i v-if="navOpen == false" class="fas fa-bars fa-2x"></i>
          </transition>
          <transition name="rotate">
            <i v-if="navOpen == true" class="fas fa-times fa-2x"></i>
          </transition>
        </button>
      <router-view></router-view>
      <div class="footer">
        <div class="footer-item">
          <a href="https://www.linkedin.com/in/anthony-rojas-106322b2/" target="_blank">
            <i class="fab fa-linkedin fa-5x"></i>
          </a>
        </div>
        <div class="footer-item">
          <a href="https://github.com/anthonyrojas" target="_blank">
            <i class="fab fa-github fa-5x"></i>
          </a>
        </div>
        <div class="footer-item">
          <a href="mailto:anthony.rojas095@gmail.com" target="_blank">
            <i class="fas fa-envelope fa-5x"></i>
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        Anthony Rojas
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data(){
    return{
      navOpen: false,
      windowWidth: window.innerWidth
    }
  },
  mounted(){
    window.addEventListener('resize', this.getWindowWidth, false)
  },
  methods:{
    toggleMenu(){
      this.navOpen = !this.navOpen
    },
    getWindowWidth(){
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style>
#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  display: grid;
  width: 100vw;
  min-height: 100vh;
  grid-template-columns: 20vw 80vw;
  padding: 0;
  margin: 0;
  font-weight: 500;
}
.floating-menu-btn{
  position: fixed;
  bottom: 2em;
  right: 2em;
  width: 60px;
  height: 60px;
  text-align: center;
  padding: 1em;
  z-index: 30;
  border-radius: 50%;
  background-color: #FFAB00;
  border: 0;
  outline: none;
  box-shadow: 0 1px 10px -2px #444;
  display: none;
}
.floating-menu-btn:hover{
  background-color: #FFBB30;
  cursor: pointer;
}
.floating-menu-btn:after{
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.3);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1,1) translate(-50%);
  transform-origin: 50% 50%;
}
.floating-menu-btn:focus:not(:active)::after{
  animation: btnRipple 1.5s ease-out
}
.nav-show{
  left: 0 !important;
  animation: slideInLeft 0.8s;
}
.nav-hide{
  left: -100em !important;
  animation: slideOutLeft 0.8s;
}
nav{
  grid-column-start: 0;
  grid-column-end: 2;
  background-image: url('assets/light-honeycomb-dark.png') !important;
  background-color: #FFF;
  font-weight: 600 !important;
  box-shadow: 0 0 8px 4px #4e4e4e;
  padding: 0;
  margin: 0;
  overflow: auto;
  height: 100%;
  position: fixed;
  z-index: 10;
}
nav ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 20vw;
}
nav ul li{
  margin: 0.55em 0;
  width: 100%;
}
nav a{
  padding: 1em 0;
  display: block;
  width: 100%;
  text-decoration: none;
  color: #000;
}
nav a:hover{
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.35);
  color: #fff;
}
.nav-logo{
  background-image: url('assets/logo_transparent.png') !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 12em;
  background-color: rgba(255, 0, 0, 0.5);
  animation: rainbowColors 8s infinite;
}
main{
  grid-column-start: 2;
  grid-column-end: 3;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  top: 0 !important;
  max-width: 100%;
}
.header{
  background-image: url('assets/code-background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  top: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
}
.header-overlay{
  background: linear-gradient(to bottom, rgba(98, 188, 255, 0.35), rgba(57, 229, 45, 0.35));
  display: flex;
  flex-flow: column wrap;
  height: inherit;
  width: inherit;
  align-items: stretch;
  justify-content: center;
}
.header-title{
  font-weight: 800;
  font-size: 10em;
  color: #FFF;
  margin-bottom: 0;
}
.header-caption{
  color: #FFF;
  font-size: 2em;
}
p{
  font-size: 1.2em;
}
.footer{
  background-color: #333;
  padding: 5em 0.5em;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.footer-item{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 30%;
  color: #FFF;
  margin: 0.5em 0;
}
.footer-item a{
  color: #FFF !important;
  display: inline-block;
  border-radius: 50%;
}
.footer-item a:hover{
  color: #00BCFF !important;
  animation: pulseLink 1.75s infinite;
}
.footer-bottom{
  background-color: #000;
  color: #FFF;
  text-align: center;
  width: 100%;
  padding: 2em 0;
}
.right-align{
  text-align: right !important;
}
.left-align{
  text-align: left !important;
}
.center-align{
  text-align: center !important;
}
.text-muted{
  font-size: 0.9rem;
  color: #444;
}
.rotate-leave, .rotate-enter-to{
  display: block;
  animation: spinBtn 0.8s;
}
.rotate-enter, .rotate-leave-to{
  display: none;
}
@media screen and (max-width: 1048px){
  #app{
    grid-template-columns: 0 100vw;
  }
  nav{
    left: -100em;
    width: 50vw;
  }
  nav ul{
    width: 50vw;
  }
  .floating-menu-btn{
    display: block;
  }
  .nav-logo{
    height: 15em;
  }
  .header-title{
    font-size: 8em;
  }
  .header-caption{
    font-size: 1.9em;
  }
}
@media screen and (max-width: 748px){
  nav{
    left: -100em;
    width: 75vw;
  }
  nav ul{
    width: 75vw;
  }
  .nav-logo{
    height: 18em;
  }
  .header-title{
    font-size: 6em;
  }
  .header-caption{
    font-size: 1.8em;
  }
  .footer-item{
    width: 100%;
    margin: 2em 0;
  }
}
@media screen and (max-width: 500px){
  nav{
    width: 100vw;
    background-color: rgba(0,0,0,0.8);
  }
  nav ul{
    width: 100vw;
  }
  nav a{
    color: #fff;
  }
  .nav-logo{
    height: 13em;
    background-size: contain;
  }
  .header-title{
    font-size: 4em;
  }
  .header-caption{
    font-size: 1.5em;
  }
}
@keyframes rainbowColors{
  0%{
    background-color: rgba(255, 0, 0, 0.5);
  }
  5%{
    background-color: rgba(239, 0, 255, 0.5);
  }
  25%{
    background-color: rgba(29, 240, 79, 0.5)
  }
  50%{
    background-color: rgba(240, 177, 29, 0.5);
  }
  75%{
    background-color: rgba(235, 131, 6, 0.5);
  }
  95%{
    background-color: rgba(255, 0, 0, 0.5);
  }
}
@keyframes pulseLink{
  0% {
    box-shadow: 0 0 0 0 rgba(204,255,255, 0.8);
  }
  75% {
    box-shadow: 0 0 0 18px rgba(255,255,255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255,255,255, 0);
  }
}
@keyframes btnRipple{
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
}
@keyframes slideInLeft{
  from{
    transform: translateX(-100em);
  }
  to{
    transform: translateX(0px);
  }
}
@keyframes slideOutLeft{
  from{
    transform: translateX(0px);
  }
  to{
    transform: translateX(-100em);
  }
}
@keyframes spinBtn{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
@keyframes fadeOut{
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}
</style>
