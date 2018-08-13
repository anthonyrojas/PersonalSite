<template>
  <div class="projects-row">
    <section class="projects-col">
      <h2 class="section-header">Projects</h2>
      <p class="left-align">
        Here I have listed the several projects I have worked on or are currently working on. These projects have been done either during my time in school or on my spare time as a hobby. I hope to be able to continue to fill this page with a lot more as I continue to develop my skills in programming.
      </p>
      <p class="left-align text-muted">
        Projects that are completed have a green bar. Projects in development have an orange bar.
      </p>
      <div class="projects">
        <div v-for="project in projects" v-bind:key="project.ID" :class="{'fullScreen' : (project.showFullscreen == true), 'project-card' : (project.showFullscreen == false)}">
          <div class="project-card-header">
            <h3 class="project-title">{{project.name}}</h3>
          </div>
          <div class="project-card-body" v-bind:style="{backgroundImage: 'url(' + project.image + ')'}">
          </div>
          <div class="project-card-description">
            <p>{{project.description}}</p>
          </div>
          <div class="project-card-skills">
            <span class="skill" v-for="skill in project.skills" v-bind:key="skill">{{skill}}</span>
          </div>
          <div class="project-card-action" v-bind:style="{'border-bottom': (project.completed ? '5px solid #21E20B' : '5px solid #FF8800')}">
            <button class="project-btn" v-if="project.showFullscreen == false" v-on:click="showProjectDetails(project)">Read More</button>
            <button class="project-btn" v-else v-on:click="showProjectDetails(project)" >Close</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.section-header{
  text-align: center;
  padding: 0.5em 1em;
  background-color: #FFF;
  border-bottom: 0.2em solid #FFAA49;
  color: #000;
  box-shadow: 0 1px 10px -2px #111;
}
.projects-row{
  background-color: #D3E4F2;
  padding: 3em 0;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.projects-col{
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 1em;
}
.projects{
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.project-card{
  display: flex;
  flex-flow: column wrap;
  width: 45%;
  margin: 1em 0.75em;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 16px -1px #555;
}
.project-card-header{
  text-align: center;
  padding: 0.5em 0;
  background-color: #3FABFD;
  color: #FFF;
  width: 100%;
}
.project-title{
  font-size: 1.5em;
  font-weight: bold;
}
.project-card-body{
  width: 100%;
  height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #333;
}
.project-card-action{
  width: 100%;
  background-color: #FFF;
  color: #000;
  text-align: center;
  padding: 1em 0;
}
.project-btn{
  padding: 0.5em 1em;
  text-transform: uppercase;
  font-size: 1em;
  background-color: #333;
  box-shadow: 0 0 10px -1px #555;
  border: none;
  color: #FFF;
  outline: none !important;
}
.project-btn:hover{
  background-color: #555;
  cursor: pointer;
}
.project-card-description{
  display: none;
}
.project-card-skills{
  display: none;
}
.project-card-description p{
  padding: 0 0.5em;
  text-align: left;
}
.fullScreen{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 0.5em;
  background-color: rgba(0,0,0,0.8);
  z-index: 10;
}
.fullScreen .project-card-description{
  display: inline-block;
  width: 70%;
  background-color: #F2F2F2;
  margin: 0;
  padding: 0.5em 0em;
  animation: fadeInDown 1.6s;
  border-bottom: 1.5px solid #EEE;
}
.fullScreen .project-card-skills{
  display: inline-block;
  width: 70%;
  background-color: #F6F6F6;
  padding: 1em 0;
  border-bottom: 1.5px solid #EEE;
  animation: fadeInDown 1.6s;
}
.skill{
  padding: 0.4em 0.8em;
  background-color: #4DB228;
  color: #FFF;
  margin: 0.2em;
  border-radius: 5px;
  box-shadow: 0 1px 4px -1px #000;
  display: inline-block;
}
.fullScreen .project-card-header{
  width: 70%;
  margin: 0;
  display: inline-block;
  animation: fadeInDown 1.6s;
}
.fullScreen .project-card-body{
  width: 70%;
  margin: 0;
  display: inline-block;
  animation: fadeInDown 1.6s;
}
.fullScreen .project-card-action{
  width: 70%;
  margin: 0;
  display: inline-block;
  animation: fadeInDown 1.6s;
  background-color: #3FABFD;
}
@media screen and (max-width: 1280px){
  .fullScreen .project-card-header, .fullScreen .project-card-body, .fullScreen .project-card-description, .fullScreen .project-card-skills, .fullScreen .project-card-action{
    width: 90% !important;
    margin: 0 !important;
    display: inline-block;
  }
}
@media screen and (max-width: 976px){
  .project-card{
    width: 85%;
  }
  .fullScreen{
    padding: 0;
  }
  .fullScreen .project-card-header, .fullScreen .project-card-body, .fullScreen .project-card-description, .fullScreen .project-card-skills, .fullScreen .project-card-action{
    width: 100% !important;
    margin: 0 !important;
    display: inline-block;
  }
  .fullScreen .project-title{
    margin: 0.1em 0;
  }
  .fullScreen .project-card-action{
    padding: 0.45em 0;
  }
  .fullScreen .project-card-description{
    font-size: 0.9em;
    padding: 0.1em 0;
  }
  .skill{
    font-size: 0.8em;
  }
  .fullScreen *{
    overflow-y: auto;
  }
}
@media screen and (max-width: 796px){
  .project-card{
    width: 95%;
  }
  .project-card-description{
    display: inline-block;
    width: 100%;
    background-color: #F2F2F2;
    margin: 0;
    padding: 0.15em 0em;
    border-bottom: 1.5px solid #EEE;
    font-size: 0.9em;
  }
  .project-card-skills{
    display: inline-block;
    width: 100%;
    background-color: #F6F6F6;
    padding: 1em 0;
    border-bottom: 1.5px solid #EEE;
  }
  .skill{
    display: inline-block;
  }
  .project-card-action{
    display: none;
  }
}
@media screen and (max-width: 500px){
  .projects-col{
    padding: 0 0.15em;
  }
  .project-card{
    width: 100%;
    margin: 1em 0;
  }
  .project-card-action{
    display: none;
  }
  .project-card-body{
    height: 300px;
  }
  .project-card-description{
    font-size: 0.85em
  }
  .skill{
    display: inline-block;
    font-size: 0.75em;
  }
}
@keyframes fadeInDown{
  0%{
    opacity: 0;
    transform: translateY(-25em);
  }
  100%{
    opacity: 1;
    transform: translateY(0em);
  }
}
</style>
<script>
import db from './firebaseInit'
import firebase from 'firebase'
export default{
  name: 'projects',
  data(){
  	return{
  		projects: [],
  		isLoading: true
  	}
  },
  created(){
    const firestore = firebase.firestore()
  	firestore.settings({timestampsInSnapshots: true})
  	db.collection('projects').orderBy('order', 'desc').get().then(snapshot=>{
  		snapshot.forEach(projectItem =>{
        let projectData = projectItem.data()
        projectData.showFullscreen = false
        projectData.ID = projectItem.id
  			this.projects.push(projectData)
  		})
  	})
  },
  mounted(){
  	window.scrollTo(0,0)
    window.addEventListener('resize', this.getWindowWidth, false)
  },
  methods: {
    showProjectDetails(project){
      project.showFullscreen = !project.showFullscreen
    },
    getWindowWidth(){
      if(window.innerWidth <= 796){
        for(let i=0; i <= this.projects.length; i++){
          this.projects[i].showFullscreen = false
        }
      }
    }
  }
}
</script>
