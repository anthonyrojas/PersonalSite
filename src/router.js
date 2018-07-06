import Vue from 'vue'
import Router from 'vue-router'
import Education from './components/Education.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Work from './components/Work.vue'

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    }
  ]
})
