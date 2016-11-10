<style lang='scss'>
@import "style.scss"
</style>
<template>
    <ul class="log-list" id="J_log-list">
        <li v-for="item in gridData">
           <h2 class="tit">
                        <i class="iconfont icon-iconfonticon05"></i>
                        <a :href="item.url" v-on:click="jumpUrl">{{item.title}}</a>
                    </h2>
                    <div class="entry-meta">
                        <span>
                                <i class="iconfont icon-time"></i>{{item.time}}</span>
                        <span><i class="iconfont icon-iconfont90"></i><a href="#" rel="category tag">{{item.tag}}</a></span>
                       
                        <span><i class="iconfont icon-icon-admin"></i> {{item.author}}</span>
                    </div>
                    <div class="desc">
                        <p>{{item.desc}}</p>
                    </div>
                    <a v-bind:href="item.url" class="readmore">阅读全文</a>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            loading:true,
            error:false,
            gridData:[]
        }
    },
    created: function() {
        this.getData()
    },
    methods: {
        getData() {
            this.$http.get('http://192.168.50.173:8000/AMyProject/AVue/wnworld/src/php/loglist.php')
                .then((response) => {
                    this.gridData=JSON.parse(response.data);
                })
        },
        jumpUrl:function(event){
            event.preventDefault();
            var targetElem=event.target;
            var href=targetElem.href;
            this.$http.get("/inc/20161109015459.inc")
                .then((response) => {
                    alert(response.data)
                }).catch(function(response) {
                    //错误
                    alert("xxx")
                })
            
        }
    }
}
</script>
