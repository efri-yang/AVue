<template>
    <div class='test-box'>关于散崖asdfasdf
    </div>
</template>
<style lang='scss'>
.test-box {
    height: 300px;
    background: #f60;
}
</style>
<script>
export default {

	beforeRouteEnter(to,from,next){
	    console.log('beforeRouteEnter')
		next();
	},
	beforeRouteLeave (route, redirect, next) {
	   console.log('beforeRouteLeave')
	    next()
  	},
  	created(){
	     console.dir("About.vue createed")
	},
	mounted(){
		console.dir("About.vue mounted")
	},
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            console.log('watch')
        }
    }
    
}
</script>
