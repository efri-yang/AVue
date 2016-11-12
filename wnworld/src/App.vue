<style src='./assets/css/reset.css'></style>
<template>
    <div id="app">
        <comHeader></comHeader>
        <layoutFrame></layoutFrame>
        <comFooter></comFooter>
        <Loading></Loading>
    </div>
</template>
<script>
import comHeader from './components/common/header/header'
import comFooter from './components/common/footer/footer'
import layoutFrame from './components/common/Layout'
import Loading from './components/common/Loading'
export default {
    components: {
        comHeader,
        comFooter,
        layoutFrame,
        Loading
    },
    created(){
        console.dir("App.vue createed");
        
    },
    watch: {
        '$route':function(){
            
        }
    }
}
</script>
