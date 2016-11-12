import Vue from 'vue'
import App from './App'
import RouterConfig from './router.js'
import VueResource from 'vue-resource'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components

// 2. Define route components

Vue.use(VueResource)



// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
Vue.http.options.emulateJSON = true


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
  router:RouterConfig,
  data:function(){
      return {
          sharedState:store.state,
          sharedMethod:store.methods
      }
  },
  render: h => h(App),
}).$mount('#app')
