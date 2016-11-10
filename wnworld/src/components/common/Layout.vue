<template>
	<div class="wn-container clearfix wn-container-pt">
    	<div class="box-main">
            <transition name="fade" mode="out-in">
    			<router-view></router-view>
            </transition>
    	</div>
    	<div class="sidebar">
    	</div>
    </div>
</template>
<script>
    export default {
        created(){
            console.dir("Layout.vue createed")
        },
    }
</script>
