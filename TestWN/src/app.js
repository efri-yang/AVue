import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


import App from './App'



//开启debug模式
Vue.config.debug = true;

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);
Vue.use(VueResource);

const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
  	{
      path: '/',
      component: Home
    },
    {
      path: '/first',
      component: First
    }
  ]
})

const app = new Vue({
  router: router,
  components: {App}
}).$mount('#app')




