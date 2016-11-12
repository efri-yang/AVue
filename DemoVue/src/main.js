import Vue from 'vue'
import App from './App'


var store = {
  debug: true,
  state: {
    isLoad: false
  },
  methods:{
    loadToggleAction () {
      store.state.isLoad= store.state.isLoad ? false : true;
    }
  }
}

var vm=new Vue({
	el:"#app",
  data:function(){
      return {
          sharedState:store.state,
          sharedMethod:store.methods
      }
  },
	template:"<App/>",
	components:{
		App
	}
})