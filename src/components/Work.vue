<template>
  <div class="work-row">
    <section class="work-col">
      <h2 class="section-header">Work</h2>
      <p class="left-align">At this time I do not have any professional software engineering or developer experience. However, I hope to be able to change that soon. Any experience I do have can be viewed on my LinkedIn profile by clicking the icon link below. I am always open to adding new connections there and discussing any oppurtunities available.</p>
    </section>
  </div>
</template>
<style scoped>
.work-row{
  padding: 3em 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: #EEE;
}
.work-col{
  padding: 0 1.5em;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
}
.section-header{
  text-align: center;
  padding: 0.5em 1em;
  background-color: #FFF;
  border-bottom: 0.2em solid #FFAA49;
  color: #000;
  box-shadow: 0 1px 10px -2px #111;
}
@media screen and (max-width: 796px){
  .work-col{
    padding: 0 0.8em;
  }
  .work-col p{
    font-size: 1em;
  }
}
</style>
<script>
export default{
  name: 'work',
  components:{}
}
</script>
