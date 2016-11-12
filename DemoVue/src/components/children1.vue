<template>
	<div>
		
		<P><button>children1.vue点击我</button></p>
		<p>children1 isLoad:{{sharedState.isLoad}}</p>
	</div>
</template>
<script>
export default {
    data:function(){
    	return {
    		sharedState:this.$root.sharedState,
    		sharedMethod:this.$root.sharedMeThod
    	}	
    },
    created:function(){

    },
    methods:{
        clk1:function(){
            this.sharedState.setLoadAction();
        }
    }
    
}
</script>
