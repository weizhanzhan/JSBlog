<template>
  <div>
    <div>
            <!-- <ul class="node-list">
                <li class="list-item">
                
                    <div class="node-content" id="contentWz" >
                        <div class="author">
                            <a class="avatar">
                                <img style="width:32px"  src="https://upload.jianshu.io/users/upload_avatars/11879331/7a968de2-3d8c-46f1-a5ee-74abe239e444?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"/>
                            </a>
                            <div class="info">贪恋你全部 <i class="other gender icon blue" ></i> 04.27 13:12</div>
                        </div>
                        
                        <a class="node-list-title">此消彼长：显卡刚跌</a>       
                        <p class="abstract">                            
                          急需吃鸡装新机？若不能最贱入手，也别在涨价时做冤大头。今天笔点君的干货文要聊的，不止是近日频频小降的1066吃鸡显卡，还有那个从去年夏天开始就猛涨的DDR4内存条——后者价格...   
                        </p>
                        <div class="node-list-meta">
                            <span class="list-meta-i"><i class="unhide icon"></i>100</span>
                            <span class="list-meta-i"><i class="talk outline icon"></i>100</span>
                            <span class="list-meta-i"><i class="heart icon"></i>100</span>
                        </div>                        
                    </div>   
                    <div class="wrap-img">
                      <img class="wrap-image" src="https://upload-images.jianshu.io/upload_images/5731803-1e2ea966eb8e32c5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" />
                    </div>                           
                </li>
            </ul>            -->
            <ul class="node-list">
                <li class="list-item" v-for="(blog,index) in blogs" :key="index">              
                    <div class="node-content" id="contentWz" >
                        <div class="author">
                            <a class="avatar">
                                <img style="width:32px"  src="https://upload.jianshu.io/users/upload_avatars/11879331/7a968de2-3d8c-46f1-a5ee-74abe239e444?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"/>
                            </a>
                            <div class="info">{{blog.author}} <i class="other gender icon blue" ></i> 04.27 13:12</div>
                        </div>
                        <div @click="$router.push({path:'/article/'+blog._id})">
                          <a class="node-list-title">{{blog.title}}</a>       
                          <p class="abstract" v-html="blog.content"> </p>
                        </div>
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
