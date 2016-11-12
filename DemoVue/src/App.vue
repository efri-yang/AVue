<template>
    <div id="app"> 
        <p>App isLoad:{{sharedState.isLoad}}</p>
        <button @click='clk1'>APP.VUE点击改变isLoad</button>
		<children1></children1> 
	</div> 
</template>
<script>
import children1 from './components/children1'
export default {
    data:function(){
    	return {
    		sharedState:this.$root.sharedState,
            sharedMethod:this.$root.sharedMethod
    	}	
    },
    created:function(){
        
    },
    methods:{
        clk1:function(){
            this.sharedMethod.loadToggleAction();
            alert(this.sharedState.isLoad)
        }
    },
    components:{
    	children1
    }
    
}
</script>
