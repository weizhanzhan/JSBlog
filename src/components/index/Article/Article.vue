<template>
  <div>
    <div>
            <ul class="node-list">
                <li class="list-item" v-for="(blog,index) in blogs" :key="index">              
                    <div class="node-content" id="contentWz" >
                        <div class="author">
                            <a class="avatar">
                                <img style="width:32px"  src="https://upload.jianshu.io/users/upload_avatars/11879331/7a968de2-3d8c-46f1-a5ee-74abe239e444?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"/>
                            </a>
                            <div class="info">{{blog.author}} <i class="other gender icon blue" ></i> 04.27 13:12</div>
                        </div>
                        <a href="#" @click="$router.push({path:'/article/'+blog._id})">
                          <a class="node-list-title">{{blog.title}}</a>       
                          <p class="abstract" v-html="blog.content"> </p>
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
          </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            blogs:[]

        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            this.http.get("http://localhost:5000/api/blog")
            .then(data=>{
                this.blogs=data.data
                console.log(this.blogs)
            })

        }
    }

}
</script>

<style>

</style>
