<template>
  <div id="app">
    <img src="./assets/logo.png" @click="alt">
    1111{{counter}}
    <sub ref="test2">{{age2}}</sub>
  </div>
</template>

<script>
  export default {
    props:['counter'],
    data(){
      return {
        age2:30
      }
    },
    beforeCreate:function(){
    console.log('  2-beforeCreated');
  },
  created:function(){
    console.log('  2-created');
  },
  beforeCompile:function(){
    console.log('  2-beforeCompile');
  },
  beforeMount:function(){
  console.log('  2-beforeMount');
  },
  mounted:function(){
  console.log('  2-mounted');
  },
  beforeUpdate:function(){
  console.log('  2-beforeUpdate');
  },
  updated:function(){
    console.log('  2-updated');
  },
  methods:{
    alt:function(){

    }
  }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
