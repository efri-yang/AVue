import Vue from 'vue'
import VueRouter from 'vue-router'
// import routerConfig from './router'


import User from './components/User'
import UserProfile from './components/UserProfile'
import UserPosts from './components/UserPosts'


Vue.use(VueRouter);




const router = new VueRouter({
   routes: [
    { 
    	path: '/user/:id', 
    	component: User,
    	children:[
    		{
	          // 当 /user/:id/profile 匹配成功，
	          // UserProfile 会被渲染在 User 的 <router-view> 中
	          path: 'profile',
	          component: UserProfile
	        },
	        {
	          // 当 /user/:id/posts 匹配成功
	          // UserPosts 会被渲染在 User 的 <router-view> 中
	          path: 'posts',
	          component: UserPosts
	        }
    	]
	
	}
  ]
})


const app = new Vue({
  router
}).$mount('#app')