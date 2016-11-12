<template>
    <div class='test-box' id="x1">关于散崖asdfasdf
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
    data:function(){
        return {
            sharedState:this.$root.sharedState,
            sharedMethod:this.$root.sharedMethod
        }
    },
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
