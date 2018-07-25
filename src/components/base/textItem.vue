<template>
      <div class="comment">
        <a class="avatar">
          <img :src="obj.img">
        </a>
        <div class="content">
          <a class="author">{{obj.email}}</a>
          <div class="metadata">
            <span class="date" v-date="{date:obj.date}"></span>
          </div>
          <div class="text" style="font-size:0.8em">{{obj.content}}</div>
          <div class="actions">
            <a class="reply" @click="showRep(obj)" >Reply({{obj.replay.length}})</a>
            <a class="reply" @click="addlike"><i class="thumbs outline up icon" ></i>{{obj.likes}}</a>
            <a class="reply" @click="adddislike"><i class="thumbs outline down icon"></i>{{obj.dislikes}}</a>
          </div>
          <replay :show="obj" :replyurl="replyurl" @reload="reload"></replay>
        </div>
      </div>        
</template>

<script>
export default {
    props:{
        obj:{
            type:Object
        },
        replyurl:{
            type:String
        },
        likeurl:{
          type:String
        },
        dislikeurl:{
          type:String
        }
    },
    data(){
      return{
      like:1,
      dislike:1
      }
    },
    methods:{
        showRep(data){
          data.show=!data.show
        },
        reload(val){
            this.$emit('reload',true)
        },
        addlike(){
          if(this.like>1){
             this.Base.messageBox({msg:{error:"您已赞过!"},status:"error"})
          }else{
              this.$loading(true)
              this.http.get(this.likeurl+this.obj._id)//
              .then(res=>{
                 this.$loading(false)
                this.like++
                this.Base.messageBox(res.data)
                this.$emit('reload',true)
              })
          }
          
        },
        adddislike(){
          if(this.dislike>1){
              this.Base.messageBox({msg:{error:"您已评价过啦!"},status:"error"})
          }else{
              this.$loading(true)
              this.http.get(this.dislikeurl+this.obj._id)//
              .then(res=>{
                this.$loading(false)
                this.dislike++
                this.Base.messageBox(res.data)
                this.$emit('reload',true)
              })
          }
        }
    }

}
</script>

<style>

</style>
