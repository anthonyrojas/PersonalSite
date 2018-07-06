<template>
  <div class="home">
    <div class="section-header">
      <span class="section-header-text">About Me</span>
    </div>
    <div class="about-me-item" v-for="aboutMeItem in aboutData" v-bind:key="aboutMeItem.id">
      <div class="about-me-img">
        <img class="circle-img logo-img profile-img" :src="aboutMeItem.profile" alt="profile picture"/>
      </div>
      <div class="about-me-description">
        <p v-for="description in aboutMeItem.description" v-bind:key="aboutMeItem.description.key">{{description.info}}</p>
      </div>
    </div>
    <div class="container">
      <div class="skills">
        <div class="skill-item-container" v-for="skillItem in skills" v-bind:key="skillItem.category">
          <h4>{{skillItem.category}}</h4>
          <ul>
            <li v-for="skillName in skillItem.names">
              {{skillName}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home{
  background-color: aliceblue;
  margin: 0;
  padding: 1em 0;
}
.about-me-item{
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.about-me-img{
  display: flex;
  flex-flow: column nowrap;
  width: 20%;
  padding: 1em;
  align-items: center;
}
.about-me-description{
  width: 75%;
  display: flex;
  flex-flow: column wrap;
  font-size: 1.3em;
  padding: 1em;
}
.profile-img{
  max-width: 300px;
}
.skills{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: stretch;
  align-items: stretch;
  width: 100%;
}
.skill-item-container{
  background-color: #fff;
  border-left: 5px solid #00AAFF;
  box-shadow: 0 0 5px 1px #333;
  margin: 0.5em 0.8em;
  padding: 0.5em;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  max-width: 30%;
}
.skill-item-container h4{
  margin: 0;
  padding: 0;
  font-weight: 700;
}
.skill-item-container ul{
  list-style: square;
  padding-left: 0.9em;
  text-align: left;
  margin-top: 0;
}
.skill-item-container li{
  margin: 0;
  font-size: 1em;
}
.container{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
}
@media screen and (max-width: 976px){
  .container{
    width: 100%;
  }
  .about-me-img{
    width: 100%;
  }
  .about-me-description{
    width: 100%;
  }
  .skill-item-container{
    max-width: 50%;
  }
}
@media screen and (max-width: 500px){
  .container{
    width: 100%;
  }
  .about-me-img{
    width: 100%;
  }
  .about-me-description{
    width: 100%;
  }
  .skill-item-container{
    width: 100%;
  }
}
</style>
<script>
import db from './firebaseInit'
import firebase from 'firebase'
export default{
  name: 'home',
  data(){
    return{
      isLoading: true,
      aboutData: [],
      skills: []
    }
  },
  created(){
    const firestore = firebase.firestore()
    firestore.settings({timestampsInSnapshots: true})
    db.collection('about').get().then(snapshot=>{
      snapshot.forEach(aboutMeItem=>{
        this.aboutData.push(aboutMeItem.data())
      })
    })
    db.collection('skills').orderBy('category').get().then(snapshot=>{
      snapshot.forEach(skillItem=>{
        this.skills.push(skillItem.data())
      })
    })
    this.isLoading = false
  }
}
</script>
