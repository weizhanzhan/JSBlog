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
        <div class="ui comments">
          <h3 class="ui dividing header">评论区</h3>
          <div class="comment" v-for="(com,index) in blog.comment" :key="index">
            <a class="avatar"><img :src="avatar"></a>
            <div class="content">
              <a class="author">{{com.email}}</a>
              <div class="metadata">
              <span class="date">{{blogdate(com.date)}}</span>
              </div>
              <div class="text">{{com.content}}</div>
              <div class="actions">
                <a class="reply">Reply</a>
            </div>
          </div>
          </div>
          <form class="ui reply form">
          <div class="form-group">
            <label for="email">Email</label>
            <input  class="form-control" id="email" v-model="comment.email" placeholder="Author">
          </div>
          <div class="field">
            <textarea v-model="comment.content"></textarea>
          </div>
          <div class="ui blue labeled submit icon button" @click="AddComment"><i class="icon edit"></i>发表评论</div>
        </form>
       </div>
       
       </div>
       <vue-editor style="display:none"></vue-editor>
    </div>
</template>

<script>
import { VueEditor, Quill } from 'vue2-editor'
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
           disSupport:false
       
       }

    },
    components:{VueEditor},
    created(){
        this.init()
    },
    methods:{
        init(){
            this.http.get("/blog/getblog/"+this.$route.params.id)
            .then(data=>{
                this.blog=data.data
                console.log(this.blog)
            })
        },
        AddComment(){
          console.log(this.comment)
          this.http.post("blog/addcomment/"+this.$route.params.id,qs.stringify(this.comment),{
           headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          })
          .then(res=>{
             this.init()
          }) 
        },
        blogdate(val){
           return new Date(val).Format("yyyy-MM-dd hh:mm:ss")
        },
        supportA(){
          this.isSupport=false
          setTimeout(()=>{
             this.disSupport=true
          },500)       
          this.http.get("/blog/addLikes/"+this.$route.params.id)
            .then(res=>{
                console.log(res)
               
            }) 
        },
        supportB(){
          this.disSupport=false
            setTimeout(()=>{
              this.isSupport=true
            },500)
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