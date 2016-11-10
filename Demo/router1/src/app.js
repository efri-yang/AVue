import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router'

Vue.use(VueRouter);




//配置路由
const router = new VueRouter({
  routes:routerConfig
})



const app = new Vue({
  router
}).$mount('#app')