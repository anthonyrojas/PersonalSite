<template>
  <div class="education-row">
    <h2 class="education-row-header">Education</h2>
    <div class="education-col">
      <div class="education-item" v-for="education in educations" v-bind:key="education.id">
        <div class="education-logo">
          <img class="circle-img" :src="education.logo" alt="education logo"/>
        </div>
        <div class="education-description">
          <h3 class="education-name">{{education.name}}</h3>
          <p class="education-degree">{{education.Degree.degreeType}} in {{education.Degree.major}}</p>
          <p class="education-dates">Attended: {{education.datesAttended.started}} to {{education.datesAttended.ended}}</p>
          <button class="courses-btn" v-if="!education.showCourses" v-on:click="toggleCourses(education)">Show Courses</button>
					<button v-else v-on:click="toggleCourses(education)" class="courses-btn">Hide Courses</button>
          <transition name="zoomInFade">
						<ul class="education-courses-list" v-show="education.showCourses">
							<li v-for="course in education.classes" v-bind:key="course.number" class="education-course">
								{{course.number}} - {{course.title}}
							</li>
						</ul>
				</transition>
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
.education-row{
  background-color: #99F396;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 3em 0em;
}
.education-row-header{
  text-align: center;
  padding: 0.5em 1em;
  background-color: #FFF;
  border-bottom: 0.2em solid #FFAA49;
  color: #000;
  box-shadow: 0 1px 10px -2px #111;
}
.education-col{
  padding: 0 1em;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.education-item{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 2em 0;
}
.education-logo{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 25%;
}
.education-logo img{
  max-width: 100%;
}
.circle-img{
  border-radius: 50%;
  box-shadow: 0 0 18px -1px rgba(0,0,0,0.8);
}
.education-description{
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 75%;
}
.education-name{
  font-weight: 700;
  font-size: 3em;
}
.education-degree{
  font-size: 1.8em;
}
.education-dates{
  font-size: 1.5em;
  margin-top: 0;
}
.courses-btn{
  text-transform: uppercase;
  padding: 0.8em 1.2em;
  box-shadow: 0 0 4px 1px #333;
  background-color: #16A92E;
  border: 0;
  color: #FFF;
  font-size: 1em;
  font-weight: bold;
}
.courses-btn:hover{
  background-color: #10BD2D;
}
.courses-btn:after{
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
.courses-btn:focus:not(:active)::after{
  animation: btnRipple 1.5s ease-out;
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
@media screen and (max-width: 976px){
  .education-logo{
    width: 100%;
  }
  .education-logo img{
    width: 50%;
  }
  .education-description{
    width: 100%;
  }
  .education-courses-list{
    margin: 3px auto;
    padding: 0;
  }
}
@media screen and (max-width: 500px){
  .education-name{
    font-size: 2em;
  }
  .education-degree{
    font-size: 1.4em;
  }
  .education-dates{
    font-size: 1.2em;
  }
  .courses-btn{
    font-size: 0.8em;
  }
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
</style>
