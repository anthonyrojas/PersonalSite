<template>
  <div class="work">
	<div v-if="isLoading === true" class="page-loading">
		<div class="loader"></div>
	</div>
	<div v-else>
		<div class="section-header">
			<span class="section-header-text">Work</span>
		</div>
		<div class="work-row">
			At this time I do not have any professional software development experience, but I hope to be able to change that very soon. To view whatever work experience I do have, feel free to view my LinkedIn profile.
		</div>
	</div>
  </div>
</template>
<script>
export default{
  name: 'work',
	data(){
		return{
			isLoading: true
		}
	},
	created(){
		setTimeout(()=>{
			this.isLoading = false
		}, 500)
	},
	mounted(){
		window.scrollTo(0,0)
	}
}
</script>
<style scoped>
	.work{
		padding: 2em 0;
	}
	.work-row{
		padding: 1em 0;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-content: center;
		align-items: center;
	}
</style>
