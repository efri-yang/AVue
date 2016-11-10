<template>
	<div class="load-box">
		<div class='loading' v-if='loading'>加载中....<div>
	
		<div class="error" v-if='error'>
			发生错误
		</div>
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
		 		loading:true,
		 		error:false
		 	}
		},

        created(){
            console.dir("Loading.vue createed");
            
        },
        mounted:function(){
		 	alert("xxxmounted")
		}
	}
</script>
