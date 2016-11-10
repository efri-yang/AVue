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
// 
<template id="vue">
  <input type="text" v-model="name" />
  <label v-for="cb in inputs">
      <input type="checkbox" value="{{cb.value}}" v-model="checkbox" />{{cb.name}}
  </label>   <br>
  <div> <!--下面2个是一样的效果-->
   {{checkbox||json}}<br>
  {{getCheckBoxes}}<br>
  </div>
  <div><!--下面2个是一样的效果-->
      {{getName}}<br>
      {{name}}
  </div>
</template>
 var inputs = ['JAVA','C#','RUBY'].map(function (el,index) {
        return {value:index,name:el};
    });
    var vm= new Vue({
        el:'#vue',
        data:{
            name:'testName',
            inputs:inputs,
            checkbox:['0']
        },
        watch:{
            //检测属性变化
            'name':function(newValue,oldValue){
                 console.log('name has changed ',newValue,oldValue);
            }
        },
        computed:{
            getCheckBoxes:function(){
                console.log('run getCheckBoxes');
                return this.checkbox.join(',');
            },
            getName:function(){
                console.log('run getName');
                this.checkbox.join(',');
                console.log("getName use checkbox");
                return this.name;
            }
        }
    });
