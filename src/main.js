import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import Routes from './Routes'

Vue.config.productionTip = false
Vue.use(VueParticles)

new Vue({
  router: Routes,
  render: h => h(App)
}).$mount('#app')
