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
          <div class="text">{{obj.content}}</div>
          <div class="actions">
            <a class="reply" @click="showRep(obj)" >Reply({{obj.replay.length}})</a>
            <a class="reply"><i class="thumbs outline up icon"></i>{{obj.likes}}</a>
            <a class="reply"><i class="thumbs outline down icon"></i>{{obj.dislikes}}</a>
          </div>
          <replay :show="obj" :url="url" @reload="reload"></replay>
        </div>
      </div>        
</template>

<script>
export default {
    props:{
        obj:{
            type:Object
        },
        url:{
            type:String
        }
    },
    methods:{
        showRep(data){
          data.show=!data.show
        },
        reload(val){
            this.$emit('reload',true)
        }
    }

}
</script>

<style>

</style>
