<template>
  <div id="app">
    <nav id="navbar" v-bind:class="{transparentNav: scrolledToTop}">
      <ul>
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/education">Education</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/work">Work</router-link></li>
      </ul>
    </nav>
    <div id="main-banner">
      <div id="main-banner-overlay">
        <h1 id="main-banner-title">Anthony Rojas</h1>
        <p id="main-banner-caption">JavaScript programmer, back end and full stack developer, cat person.</p>
      </div>
    </div>
    <router-view></router-view>
    <footer>
      <div class="footer-item">
        <a href="mailto:anthony.rojas095@gmail.com" target="_blank" class="icon-wrapper">
          <i class="footer-icon far fa-envelope"></i>
        </a>
      </div>
      <div class="footer-item">
        <a href="https://www.linkedin.com/in/anthony-rojas-106322b2/" target="_blank" class="icon-wrapper">
          <i class="footer-icon fab fa-linkedin"></i>
        </a>
      </div>
      <div class="footer-item">
        <a href="https://github.com/anthonyrojas" target="_blank" class="icon-wrapper">
          <i class="footer-icon fab fa-github"></i>
        </a>
      </div>
      <div class="footer-bottom">Anthony Rojas</div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data: function(){
    return{
      scrolledToTop: true
    }
  },
  methods: {
    handleNavScroll: function(){
      if(window.scrollY <= 50){
        //make the navbar transparent
        this.scrolledToTop = true
      }else{
        this.scrolledToTop = false
      }
    }
  },
  mounted(){
    if(window.scrollY <= 20){
      this.scrolledToTop = true
    }
    window.addEventListener('scroll', this.handleNavScroll)
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleNavScroll)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  margin: 0;
  padding: 0;
}
#app nav, div{
  margin-bottom: 0;
  margin-top: 0;
}
nav{
  background-color: #FFCC00;
  padding: 0;
  box-shadow: 0 1px 10px -0.5px #3C3C3C;
  position: fixed;
  top: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  width: 100vw;
  z-index: 1000;
}
nav ul{
  list-style: none;
  display: inline-flex;
  padding: 0;
  height: 100%;
  margin: 0;
}
nav li a{
  text-decoration: none;
  color: #000;
  padding: 1em;
  font-weight: bold;
  display: flex;
  flex-flow: column wrap;
}
nav li a:hover{
  color: #FFF;
  background-color: #FF721F;
  box-shadow: 0 0 5px -1px #3C3C3C;
}
#main-banner{
  background-image: url('assets/code-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin: 0 !important;
  background-attachment: fixed;
}
#main-banner-overlay{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0,255,128, 0.3));
  color: white;
}
#main-banner-title{
  font-size: 9em;
  font-weight: bold;
  margin: 0
}
#main-banner-caption{
  margin: 0;
  font-size: 2em;
  font-weight: lighter;
}
.transparentNav{
  background-color: rgba(255, 255, 255, 0) !important;
}
.transparentNav a{
  color: white;
}
.transparentNav a:hover{
  background-color: rgba(0,0,0,0) !important;
  text-decoration: underline;
}
.section-header{
  text-align: center;
  font-size: 2em;
  font-weight: bolder;
  margin: 0.5em 0;
  text-transform: uppercase;
}
.section-header-text{
  padding: 0.2em 0.5em;
  box-shadow: 0 1px 8px -1px #333;
  background-color: #EAEAEA;
  border-bottom: 3px solid red;
}
.circle-img{
  border-radius: 50%;
  box-shadow: 0 0 10px 1px #333;
}
.logo-img{
  max-height: 300px;
  max-width: 100%;
  width: auto;
  height: auto;
}
.btn{
  font-size: 1em;
  padding: 0.7em 1em;
  border: none;
  text-transform: uppercase;
}
.btn{
  outline: 0 !important;
}
.btn-primary{
  background-color: #03986C;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 10px -1px #333;
}
.btn-primary:hover{
  background-color: #02BD85;
}
.btn:after{
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
.btn:focus:not(:active)::after{
  animation: btnRipple 1.5s ease-out;
}
footer{
  background-color: #333;
  padding: 2em 0 0 0;
  color: #fff;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.footer-item{
  display: flex;
  text-align: center;
  flex-flow: column wrap;
  width: 25%;
  margin: 0.5em;
  font-size: 4em;
  padding: 0.5em 0;
}
.icon-wrapper{
  color: white;
}
.footer-icon{
  border-radius: 50%;
}
.footer-icon:hover{
  color: #00FF33;
  animation: pulse 1.4s infinite;
  position: relative;
}
.footer-bottom{
  bottom: 0;
  background-color: #000;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  padding: 2em 0;
  text-align: center;
  box-shadow: 0 0 10px 1px #222;
}
.text-center{
  text-align: center;
}
.page-loading{
  background-color: black;
  color: white;
  height: 100vh;
  width: 100vw;
  top: 0;
  display: flex;
  flex-flow: row wrap;
  overflow-x: hidden;
  position: fixed;
  z-index: 999;
  justify-content: center;
  align-content: center;
  align-items: center;
}
@media screen and (max-width: 796px){
  #main-banner-title{
    font-size: 7em;
  }
  #main-banner-caption{
    font-size: 1.5em;
  }
  .footer-item{
    width: 20%;
  }
}
@media screen and (max-width: 500px){
  #main-banner-title{
    font-size: 5em;
  }
  #main-banner-caption{
    font-size: 1em;
  }
  .footer-item{
    width: 100%;
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
@keyframes pulse{
   0% {
    box-shadow: 0 0 0 0 rgba(204,255,255, 0.8);
  }
  75% {
    box-shadow: 0 0 0 14px rgba(255,255,255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255,255,255, 0);
  }
}
.loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 15em;
    height: 15em;
    animation: spin 1s linear infinite;
    background-color: rgba(0,0,0,0);
    background-image: url('https://previews.123rf.com/images/alhovik/alhovik1504/alhovik150400037/40367818-schwarz-wei%C3%9F-hypnose-spirale.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
