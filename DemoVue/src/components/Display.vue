<template>
  <div>
    {{msg}}
    <h3>Display的loading属性:{{loading}}</h3>
    <button>单机</button>
  </div>
</template>

<script>
export default {
  props:["msg"],
  data(){
  		return {
  			loading:this.$root.sharedState.loading
  		}
  },
  methods:{
  	
  }

}
</script>