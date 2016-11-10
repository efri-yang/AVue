
import Vue from 'vue'
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

var routerConfig=[
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
module.exports=routerConfig;