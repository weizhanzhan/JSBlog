<template>
     <ul class="node-list">
        <li class="list-item" v-for="(blog,index) in blogs" :key="index">              
            <div class="node-content" id="contentWz" >
                <div class="author">
                    <a class="avatar">
                        <img style="width:32px"  src="https://upload.jianshu.io/users/upload_avatars/11879331/7a968de2-3d8c-46f1-a5ee-74abe239e444?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"/>
                    </a>
                    <div class="info">{{blog.author}}
                            <i class="other gender icon blue" ></i>
                            <span v-date="{date:blog.date}"></span>
                    </div>
                </div>
                <a href="#" @click="goDetail(blog._id)">
                    <a class="node-list-title">{{blog.title}}</a>   
                    <p class="abstract" style="height:50px; overflow: hidden;" v-content="blog.content" ></p>
                </a>
                <div class="node-list-meta">
                    <span class="list-meta-i"><i class="unhide icon"></i>{{blog.views}}</span>
                    <span class="list-meta-i"><i class="talk outline icon"></i>{{blog.comment.length}}</span>
                    <span class="list-meta-i"><i class="heart icon"></i>{{blog.likes}}</span>
                </div>                        
            </div>   
            <div class="wrap-img">
                <img class="wrap-image" :src="blog.img" />
            </div> 
                                    
        </li>
    </ul>
</template>

<script>
import { AddViewCounts } from '@/api/getData'
export default {
    name:"blog-list",
    props:{
        blogs:Array
    },
    data(){
        return{
      
        }
    },
    methods:{
         goDetail(id){
            this.$loading(true)
            AddViewCounts(id)
                    .then(res=>{
                        this.$router.push({path:'/blog/'+id})
                    })        
        },
    }

}
</script>

<style>

</style>
