<style lang='scss'>
    @import "style.scss"
</style>
<template>
	<div class="header">
        <div class="wn-container">
            <div class="logo" title="蜗牛世界"></div>
            <div class="logo-m">蜗牛世界</div>
            <nav class="main-nav">
                <ul id="main-navlist">
                    
                        <router-link to="/"  tag="li" active-class="curr" exact>
                            <a>首页</a>
                        </router-link>
                    
                   
                        <router-link to="/qianduan" tag="li" active-class="curr">
                            <a>前端学习</a>
                            <ul class="sub-menu">
                            <li><router-link to="/qianduan/css">Css</router-link></li>
                            <li><router-link to="/qianduan/js">Javascript</router-link></li>
                            <li><router-link to="/qianduan/tool">工具</router-link></li>
                        </ul>
                        </router-link>
                        
                    
                   <router-link to="/houduan" tag='li' active-class="curr">
                            <a>后端学习</a>
                    </router-link>
                    <router-link to="/somthing" tag="li" active-class="curr">
                        <a>那些事儿</a>
                    </router-link>
                    <router-link to="/about" tag='li' active-class="curr">
                        <a>关于散崖</a>
                    </router-link>

                     <router-link to="/about/detail" tag='li' active-class="curr">
                        <a>关于散崖-详情</a>
                    </router-link>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
    export default {
        created(){
            console.dir("Header.vue createed")
        },
    }
</script>
