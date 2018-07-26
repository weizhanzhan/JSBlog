<template>
    <div>
       <h1>{{blog.title}}</h1>
       <div class="quillWrapper">
         <div class="ql-container ql-snow">
          <div class="ql-editor"> 
            <div v-html="blog.content"> </div>     
          </div>
        </div>
        <div class="ui items">
          <div class="item">
            <div class="middle aligned content" style="text-align:center">
               <transition name="yes"  >
                  <div class="header" @click="supportA" href="#" v-if="isSupport"><i class="like icon"></i>点个赞呗</div>
               </transition>
                <transition name="no">
                  <div class="header" @click="supportB" v-if="disSupport"><i class="red heart icon"></i>已赞！</div>
               </transition>
            </div>        
          </div>
        </div>
        <div>
            <span>上一篇:<a href="#" v-if="uptitle!='无'"  @click="scrollup">《{{uptitle}}》</a><span v-else>无</span></span>
            <span style="float:right">下一篇:<a href="#" v-if="nexttitle!='无'"  @click="scrollnext">《{{nexttitle}}》</a><span v-else>无</span></span>
        </div>
        <div class="ui comments">
          <h3 class="ui dividing header">评论区</h3>
          <div class="ui comments">
          <text-item 
             v-for="(com,index) in blog.comment" 
             :key="index" :obj="com" 
             :replyurl="'blog/repcomment/'+$route.params.id"
             :likeurl="'blog/addlike/'+$route.params.id+'/'"
             :dislikeurl="'blog/adddislike/'+$route.params.id+'/'"
             @reload="reload"
             >
          </text-item>
          </div>
          <text-form :url="'blog/addcomment/'+this.$route.params.id" @formReload="formReload"></text-form>
        </div>   
       </div>
       <vue-editor style="display:none"></vue-editor>
    </div>
</template>

<script>
import { VueEditor, Quill } from 'vue2-editor'
import { GetDetail , GetNext , GetUp , support } from '@/api/getData'
import qs from 'qs'
export default {
    data(){
        return{
           blog:{},
           avatar:"https://upload.jianshu.io/users/upload_avatars/11879331/7a968de2-3d8c-46f1-a5ee-74abe239e444?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
           comment:{
             email:"",
             content:""
           },
           isSupport:true,
           disSupport:false   ,
           nexttitle:'',
           uptitle:''
       }
    },
    components:{
      VueEditor    
    },
    created(){    
        this.$loading(false)
        this.init()
    },
    watch:{
        "$route"(){
            this.isSupport=true,
            this.disSupport=false
        }
    },
    methods:{
        init(){
            this.$loading(true)
            GetDetail(this.$route.params.id)
            .then(data=>{
                data.data.comment.forEach(com=>{
                  com.show=false
                })
                this.blog=data.data
                this.$loading(false)
                GetNext(this.$route.params.id)
                .then(res=>{
                    if(res.data.err)
                        this.nexttitle="无"
                    else
                        this.nexttitle=res.data[0].title
                })
                GetUp(this.$route.params.id)
                .then(res=>{
                    if(res.data.err)
                        this.uptitle="无"
                    else
                        this.uptitle=res.data[0].title
                })
            })
        },
        supportA(){
          this.isSupport=false
          setTimeout(()=>{
             this.disSupport=true
          },500)          
          support(this.$route.params.id)
        },
        supportB(){
          this.disSupport=false
            setTimeout(()=>{
              this.isSupport=true
            },500)
        },
        reload(){
          this.init()
        },
        formReload(){
          this.init()
        },
        scrollup(){
             if(this.uptitle!='无'){
                GetUp(this.$route.params.id)
                .then(res=>{
                    if(!res.data.err){
                      this.$router.push({path:'/blog/'+res.data[0]._id})
                      this.init()
                    }
                    else
                      this.uptitle="无"
                })
            }
        },
        scrollnext(){
            if(this.nexttitle!='无'){
                GetNext(this.$route.params.id)
                .then(res=>{
                    if(!res.data.err){
                      this.$router.push({path:'/blog/'+res.data[0]._id})
                      this.init()
                    }
                    else
                      this.nexttitle="无"
                })
            }

        }
       
      
    }

}
</script>

<style>

.yes-enter-active {
  animation: bounce-in .5s;
}
.yes-leave-active {
  animation: yes-in 0.5s reverse;
}
@keyframes yes-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.no-enter-active {
  animation: bounce-in .5s;
}
.no-leave-active {
  animation: no-in .5s reverse;
}
@keyframes no-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>