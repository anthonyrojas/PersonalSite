<template>
  <div class="home">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.8"
      :particlesNumber="180"
      shapeType="circle"
      :particleSize="4"
      linesColor="#FFF"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="100"
      :moveSpeed="4"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="profile">
      <img class="profile-img" alt="profile picture" :src="aboutData.profile" />
    </div>
    <div class="about-row">
      <section class="about-col">
        <h2 class="section-header">About Me</h2>
        <p v-for="description in aboutData.description" v-bind:key="description.key">
        {{description.info}}
        </p>
      </section>
    </div>
    <div class="skills-row">
      <section class="skills-col">
        <h2 class="section-header">Skills</h2>
        <div class="skill-cards">
          <div class="skill-card" v-for="skill in skills" v-bind:key="skill.category">
            <h3 class="skill-card-header">{{skill.category}}</h3>
            <ul class="skill-list">
              <li class="skill-list-item" v-for="name in skill.names" v-bind:key="name">{{name}}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
  .profile{
    width: 100%;
    padding: 2.5em 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    /*background-color: #E0F3FA;*/
    background-color: #444;
    z-index: -10;
    background: linear-gradient(to bottom, #43C6AC, #1E9CFD);
  }
  .profile-img{
    width: 25%;
    border-radius: 50%;
    z-index: 2;
    box-shadow: 0 0 18px -1px rgba(0,0,0,0.8);
  }
  #particles-js{
    width: 100%;
    position: absolute;
    z-index: 0;
    height: 100%;
    vertical-align: middle;
  }
  #particles-js canvas{
  }
  .about-row{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 2.5em 0;
    background-color: #EEE;
    z-index: 2 !important;
    position: relative;
  }
  .about-col{
    display: flex;
    flex-flow: column wrap;
    padding: 0 1.5em;
    justify-content: center;
    align-items: center;
    color: #000;
    text-align: left;
  }
  .section-header{
    text-align: center;
    padding: 0.5em 1em;
    background-color: #FFF;
    border-bottom: 0.2em solid #FFAA49;
    color: #000;
    box-shadow: 0 1px 10px -2px #111;
  }
  .skills-row{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    background-color: #D7EDFF;
    padding: 2.5em 0;
    position: relative;
    z-index: 2 !important;
    width: 100%;
  }
  .skills-col{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    padding: 0 1.5em;
    text-align: left;
    width: 100%;
  }
  .skill-cards{
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
  }
  .skill-card{
    width: 25%;
    background-color: #FFF;
    border-left: 7px solid #00B3FF;
    box-shadow: 0 1px 4px 1px #555;
    margin: 2em 0.8em;
    border-radius: 1%;
  }
  .skill-card-header{
    background-color: #E4E4E4;
    display: block;
    width: 100%;
    margin: 0;
    padding: 1em 0em;
    border-radius: 2%;
    text-align: center;
  }
  .skill-list{
    list-style-type: none;
    padding: 0%;
    margin-top: 0;
    margin-bottom: 0;
  }
  .skill-list-item{
    display: block;
    padding: 0.5em 0.5em;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    margin: -1px;
  }
  @media screen and (max-width: 976px){
    .skill-card{
      width: 45%;
    }
    .profile-img{
      width: 35%;
    }
  }
  @media screen and (max-width: 796px){
    .skill-card{
      width: 75%;
      margin: 0.75em 0;
    }
    .profile-img{
      width: 50%;
    }
  }
  @media screen and (max-width: 500px){
    .skills-col{
      padding: 0 0.8em;
    }
    .skill-card{
      width: 100%;
    }
    .skill-list-item{
      font-size: 0.9em;
    }
    .skill-card-header{
      font-size: 1em;
    }
    .about-col{
      font-size: 0.9em;
    }
    .profile-img{
      width: 75%;
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
      profileLoad:false,
      aboutData: {},
      skills: []
    }
  },
  created(){
    const firestore = firebase.firestore()
    firestore.settings({timestampsInSnapshots: true})
    db.collection('about').get().then(snapshot=>{
      snapshot.forEach(aboutMeItem=>{
        this.aboutData = aboutMeItem.data()
        //this.aboutData.push(aboutMeItem.data())
      })
    })
    db.collection('skills').orderBy('category').get().then(snapshot=>{
      snapshot.forEach(skillItem=>{
        this.skills.push(skillItem.data())
      })
    })
  },
  mounted(){
    window.scrollTo(0,0)
  }
}
</script>
