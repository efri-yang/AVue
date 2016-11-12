export function getCount (state) {
  return state.count
}

<div id="app"> 
父组件： 
<button @click="parentClick">点击向下传播broadcast</button> 
<br/> 
子组件1： 
<children1></children1> 
<br/> 
另一个子组件1： 
<another-children1></another-children1> 
</div> 
<script> 
var vm = new Vue({ 
el: '#app', 
data: { 
val: 1 
}, 
methods: { 
parentClick: function () { 
this.$broadcast("parentClick", "abc"); 
} 
}, 
events: { 
childrenClick: function () { 
console.log("childrenClick-Parent"); 
}, 
parentClick: function () { 
console.log("parentClick-Parent"); 
return true; 
} 
}, 
components: { 
children1: { //这个无返回值，不会继续派发 
props: ['test'], 
template: "<button>children1</button></br>子组件2：<children2></children2>", 
events: { 
childrenClick: function () { 
console.log("childrenClick-children1"); 
}, 
parentClick: function (msg) { 
console.log("parentClick-Children1"); 
console.log("message:" + msg); 
} 
}, 
components: { 
children2: { 
props: ['test'], 
template: "<button @click='findParent'>children-Click</button>", 
methods: { 
findParent: function () { 
this.$dispatch('childrenClick'); 
} 
}, 
events: { 
childrenClick: function () { 
console.log("childrenClick-children2"); 
}, 
parentClick: function (msg) { 
console.log("parentClick-Children2"); 
console.log("message:" + msg); 
} 
} 
} 
} 
}, 
anotherChildren1: { //这个是返回值为true，会继续向子组件的子组件派发 
props: ['test'], 
template: "<button>anotherChildren1</button></br>另一个子组件2：<another-children2></another-children2>", 
events: { 
childrenClick: function () { 
console.log("childrenClick-anotherChildren1"); 
return true; 
}, 
parentClick: function (msg) { 
console.log("parentClick-anotherChildren1"); 
console.log("message:" + msg); 
return true; 
} 
}, 
components: { 
anotherChildren2: { 
props: ['test'], 
template: "<button @click='findParent'>anotherChildren2-Click</button>", 
methods: { 
findParent: function () { 
this.$dispatch('childrenClick'); 
} 
}, 
events: { 
childrenClick: function () { 
console.log("childrenClick-anotherChildren2"); 
}, 
parentClick: function (msg) { 
console.log("parentClick-anotherChildren2"); 
console.log("message:" + msg); 
} 
} 
} 
} 
} 
 
} 
}); 
</script> 
}, 
parentClick: function () { 
console.log("parentClick-anotherChildren2"); 
} 
} 
} 
} 
} 
 
} 
}); 
</script>