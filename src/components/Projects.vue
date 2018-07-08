<template>
  <div class="projects">
  		<div v-if="isLoading === true" class="page-loading">
  			<div class="loader"></div>
  		</div>
  		<div v-else>
			<div class="section-header">
				<span class="section-header-text">Projects</span>
			</div>
			<div class="projects-row">
				<div class="project-col">
					Over the course of my time at CSULB, I have worked on numerous lab assignments and projects, some by myself and some in a group. Below are some of the better projects I have done or worked on. Some of these have also been done in my free time. I hope to be able to expand this list as I find time to complete more projects and learn new languages, techniques, and overall skills. Feel free to browse my GitHub for a full list of projects.
				</div>
				<div class="project-col-muted">
					Completed projects have a green bar. Projects still in development or that I go back to improve or debug have an orange bar.
				</div>
				<div class="project-item" v-bind:class="{completedProject: project.completed, progressingProject: (project.completed === false)}" v-for="project in projects" v-bind:key="project.id">
					<div class="project-title">
						{{project.name}}
					</div>
					<div class="project-image" v-bind:style="{backgroundImage: 'url(' + project.image + ')'}"></div>
					<div class="project-description">
						<p>{{project.description}}</p>
					</div>
					<div class="project-skills">
						<span class="project-skill-badge" v-for="skill in project.skills" v-bind:key="skill">
							{{skill}}
						</span>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>
<style scoped>
	.projects{
		background-color:#FFBD8B !important;
		padding: 2.5em 0;
	}
	.page-load-overlay{
		top: 0;
		z-index: 10000;
		position: absolute;
		width: 100vw;
		height: 100vh;
		background-color: red;
	}
	.projects-row{
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-content: flex-start;
		align-items: flex-start;
		width: 100%;
	}
	.project-col{
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-start;
		padding: 0.5em 1em;
		font-size: 1.4em;
		width: 100%;
	}
	.project-col-muted{
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-start;
		padding: 0.5em 1em;
		font-size: 0.9em;
		width: 100%;
		color: #505050;
	}
	.project-item{
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		box-shadow: 0 0 9px 1px #333;
		margin: 1em 1.5em;
		max-width: 45%;
	}
	.project-image{
		height: 400px;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		background-color: #000;
	}
	.project-title{
		display: flex;
		flex-flow: row wrap;
		background-color: #009AFF;
		justify-content: center;
		align-content: center;
		align-items: center;
		padding: 0.5em 0;
		font-size: 1.7em;
		font-weight: bolder;
		color: #FFF;
	}
	.project-description{
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		padding: 0.5em 1em;
		background-color: #009AFF;
		color: #FFF;
		font-size: 1.3em;
	}
	.project-skills{
		display: flex;
		flex-flow: row wrap;
		padding: 1em 0.5em;
		background-color: #FFF;
	}
	.project-skill-badge{
		margin: 0 0.2em;
		background-color: #5C5C5C;
		padding: 0.5em;
		color: #FFF;
		font-weight: bold;
		font-size: 14px;
		border-radius: 0.8em;
		box-shadow: 0 0 10px -1px #333;
	}
	.completedProject{
		border-bottom: 8px solid #00EE60;
	}
	.progressingProject{
		border-bottom: 8px solid #FF8324;
	}
	@media screen and (max-width: 786px){
		.project-item{
			width: 100%;
			max-width: 100%;
			margin: 1em 0.4em;
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
			this.projects.push(projectItem.data())
		})
	}).then(done=>{
		setTimeout(()=>{
			this.isLoading = false
		}, 500)
	})
  },
  mounted(){
  	window.scrollTo(0,0)
  }
}
</script>
