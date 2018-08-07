<template>
    <div class="classify">
       
          <div class="ui two column grid" style="width:100%;margin-left: 10%;margin-top: 65%;">   
            <div class="column" style="width:100%">
                <div class="ui segment bgsement">
                    <div>
                      <a class="ui brown   ribbon label">博客分类</a>
                      <a style="float:right" href="#" @click="selectClassify({name:''})">全部>></a>
                    </div>
                   
                   
                   <div class="ui middle aligned animated list">
                        <a class="item" v-for="(item,index) in classify" :key="index" @click="selectClassify(item)">                           
                            <img class="ui avatar image" :src="item.imgUrl">
                            <div class="content">
                            <div class="header"><a>{{item.name}}({{item.count}})</a></div>
                            </div>                     
                        </a>                   
                    </div>
                </div>
            </div>
            <div class="column" style="width:100%">
                <div class="ui segment bgsement">
                   <a class="ui red ribbon label">关于本站</a>
                   <div class="ui list">
                    <a class="item">
                        <i class="student icon"></i>
                        <div class="content">
                        <div class="header">技术栈</div>
                        <div class="description">Vue2.0全家桶+Node.js Express+ Mongo</div>
                        </div>
                    </a>
                    <a class="item">
                        <i class="right github  icon"></i>
                        <div class="content">
                          <div class="header">github</div>
                          <div class="description">github.com/weizhanzhan/JSBlog</div>
                        </div>
                    </a>
                    <div class="item">  
                       <button class="ui basic button"><i class="icon star "></i>
                        <a href="https://github.com/weizhanzhan/JSBlog">star</a>
                       </button> 
                    </div>
                    </div>
                   <!-- <div style="padding: 2px 0">
                       <div><a href="#">zhanwei发布《Vue.js》...     </a><div style="text-align:right">2018-08-07</div></div>
                       <div class="ui inverted divider"></div>
                   </div>
                   -->
                </div>
            </div>
        </div>
     </div>
</template>

<script>
export default {
    name:"home-classify",
    props:{
        classify:Array
    },
    methods:{
        selectClassify(item){
             this.$store.commit('changeCategoryName',item.name)
             this.$store.dispatch('getBlogs')
        }
    }
}
</script>

<style>
.bgsement{
    background:unset !important;
    box-shadow: 0 1px 3px rgba(0,0,0,.3) !important;
}
</style>
