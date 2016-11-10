import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home/Home'
import QianDuan from './components/QianDuan'
import HouDuan from './components/HouDuan'
import Something from './components/Something'
import AboutDetail from './components/AboutDetail'
import About from './components/About'
import Loading from './components/About'
import DetailPage from './components/common/DetailPage'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: "home",
        component: Home,
        children: [
            // { path: '', component: DetailPage },  
        ]
    },
    { path: '/qianduan', component: QianDuan },
    { path: '/houduan', component: HouDuan },
    { path: '/somthing', component: Something },
    { path: '/about', component: About,
      children: [
        { path: 'detail', component: AboutDetail }
        
      ]
    },
    
    { path: '/detail', component: DetailPage }

]


const router = new VueRouter({
    mode: 'history',
    linkActiveClass: "curr",
    base: __dirname,
    routes // （缩写）相当于 routes: routes
});
module.exports = router;
