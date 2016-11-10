import Vue from 'vue'
import App from './App'

// /* eslint-disable no-new */
// Vue.component('child', {
//   // 声明 props
//   props: ['message'],
//   // 就像 data 一样，prop 可以用在模板内
//   // 同样也可以在 vm 实例中像 “this.message” 这样使用
//   template: '<span>{{ message }}</span>'
// })

// var data = { counter: 100000 }
// Vue.component('simple-counter', {
//   template: '<button v-on:click="counter += 1">{{ counter }}</button>',
//   // data 是一个函数，因此 Vue 不会警告，
//   // 但是我们为每一个组件返回了同一个对象引用
//   data: function () {
//     return data
//   }
// })
// 

new Vue({
  el: '#app',
  template:`
  	<div>
  		<span @click="clk1">点击年龄</span>
      <span @click="clk2">点击步伐</span>
  		<App ref="c1"  />
      <p style="font-size:40">{{}}</p>
  	</div>
  `,
  data:function(){
  	return {
  		age:24,
      step:1
  	}
  },
  computed:{
  	get
  },
  beforeCreate:function(){
  	console.log('1-beforeCreated');
  	
  },
  created:function(){
  	console.log('1-created');
  	
  },

  beforeMount:function(){
	console.log('1-beforeMount');
	
  },
  mounted:function(){
	console.log('1-mounted');
	
  },
  beforeUpdate:function(){
	console.log('1-beforeUpdate');

  },
  updated:function(){
	console.log('1-updated');
  },
  components:{
  	App
  },
  methods:{
  	clk1:function(){
  		 this.age++;
  	},
    clk2:function(){
       this.step++;
    }
  }
})

