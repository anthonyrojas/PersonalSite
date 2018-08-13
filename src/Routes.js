import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Education from './components/Education'
import Projects from './components/Projects'
import Work from './components/Work'

Vue.use(Router);
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path:'/education',
            name:'education',
            component: Education
        },
        {
            path:'/projects',
            name:'projects',
            component: Projects
        },
        {
            path:'/work',
            name:'work',
            component: Work
        }
    ]
});