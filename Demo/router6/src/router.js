import Vue from 'vue'

const Home={
	template:`
		<div class="home">
      		<h2>Home</h2>
      		<p>hello</p>
    	</div>
	`
}


const Parent={
	data(){
		return {
			transitionName:'slide-left'
		}
	},
	watch:{
		'$route' (to, from){
			const toDepth = to.path.split('/').length
      		const fromDepth = from.path.split('/').length
      		this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		}
	},
	template:`
		<div class="parent">
			<h2>Parent</h2>
		</div>
	`
}