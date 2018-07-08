<template>
	<div class="education">
		<div v-if="isLoading === true" class="page-loading">
			<div class="loader"></div>
		</div>
		<div v-else>
			<div class="section-header">
				<span class="section-header-text">Education</span>
			</div>
			<div v-for="educationItem in educations" v-bind:key="educationItem.id" class="education-item">
				<div class="education-logo">
					<img class="circle-img logo-img" :src="educationItem.logo" />
				</div>
				<div class="education-data">
					<div class="education-data-title">
						{{educationItem.name}}
					</div>
					<div class="education-degree">
						{{educationItem.Degree.degreeType}} in {{educationItem.Degree.major}}
					</div>
					<div class="education-dates">
						Attended: {{educationItem.datesAttended.started}} to {{educationItem.datesAttended.ended}}
					</div>
					<div class="education-location">
						{{educationItem.city}}, {{educationItem.state}}
					</div>
					<button v-if="!educationItem.showCourses" v-on:click="toggleCourses(educationItem)" class="btn btn-primary course-btn">Show Courses</button>
					<button v-else v-on:click="toggleCourses(educationItem)" class="btn btn-primary course-btn">Hide Courses</button>
					<div class="education-courses">
						<transition name="zoomInFade">
							<ul class="education-courses-list" v-show="educationItem.showCourses">
								<li v-for="course in educationItem.classes" v-bind:key="course.number" class="education-course">
									{{course.number}} - {{course.title}}
								</li>
							</ul>
						</transition>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import db from './firebaseInit.js'
import firebase from 'firebase'
export default{
	name: 'education',
	data(){
		return{
			educations: [],
			isLoading: true,
			showCourses: false
		}
	},
	created(){
		const firestore = firebase.firestore()
		firestore.settings({timestampsInSnapshots: true})
		db.collection('educations').get().then(snapshot => {
			this.loading = false
			snapshot.forEach(educationItem=>{
				let educationItemData = educationItem.data()
				educationItemData.showCourses = false
				this.educations.push(educationItemData)
			})
		}).then(done =>{
			setTimeout(()=>{
				this.isLoading = false
			}, 500)
		})
	},
	mounted(){
		window.scrollTo(0,0)
	},
	methods: {
		toggleCourses(educationItem){
			educationItem.showCourses = !educationItem.showCourses
		}
	}
}
</script>
<style scoped>
.education{
	padding: 3em 0em;
	background-color: #99F396;
}
.education-item{
	display: flex;
	flex-flow: row wrap;
	width: 100%;
	justify-content: center;
	align-items: center;
	align-content: center;
}
.education-logo{
	display: flex;
	flex-flow: column wrap;
	width: 26%;
	padding: 0.5em;
	justify-content: center;
	align-content: center;
	align-items: center;
}
.education-data{
	padding: 0.5em;
	width: 70%;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-content: center;
	align-items: center;
	text-align: center;
}
.education-data-title{
	font-size: 3em;
	font-weight: bolder;
}
.education-degree{
	font-size: 1.8em;
}
.education-dates{
	font-size: 1.5em;
}
.education-location{
	font-size: 1.5em;
}
.education-courses-list{
	list-style: none;
}
.education-course{
	background-color: white;
	margin: 0.8em 0;
	padding: 0.3em 1em;
	border-left: 5px solid #FF0000;
	box-shadow: 0 1px 8px -1px #3C3C3C;
}
.course-btn{
	margin: 2em 0;
}
.zoomInFade-enter{
	opacity: 0;
}
.zoomInFade-enter-active{
	transition: opacity .5s;
	animation: zoomIn 1s;
}
.zoomInFade-leave-active{
}
.zoomInFade-leave-to{
	transition: opacity 1s;
	animation: shrinkOut 1s;
}
@keyframes shrinkOut{
	from{
		transform: scaleY(1.1);
	}
	to{
		transform: scaleY(0.3);
	}
}
@keyframes zoomIn {
	from{
		transform: scaleY(0.1);
	}
	to{
		transform: scaleY(1.1);
	}
}
@media screen and (max-width: 976px){
	.education-logo{
		width: 100%;
	}
	.education-data{
		width: 100%;
		padding: 0 1em;
		text-align: center;
	}
}
</style>
