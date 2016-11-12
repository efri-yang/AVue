<template>
	<div class="load-box">
		<div class='loading' v-if='sharedState.isLoad'>加载中....<div>
	
		
	</div>
</template>
<style lang="scss">
	.load-box{
		position:absolute;
		top:100px;
	}
	.loading,.error{
		width:200px;
		height:200px;
		background:#f60;
		font-size:50px;
		
	}
</style>
<script>
	export default {
		data(){
		 	return {
		 		sharedState:this.$root.sharedState,
		 		sharedMethod:this.$root.sharedMethod
		 	}
		},

        created(){
        	this.sharedState.isLoad=true;
            console.dir("Loading.vue createed");
            
        },
        mounted:function(){
		 	
		}
	}
</script>
