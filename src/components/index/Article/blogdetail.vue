<template>
    <div>
         <h1>{{blog.title}}</h1>
        <div class="quillWrapper">
        <div class="ql-container ql-snow">
         <div class="ql-editor"> 
            <div v-html="blog.content">
         </div>     
        </div>
      </div>
      <div class="ui comments">
  <h3 class="ui dividing header">评论区</h3>
  <div class="comment">
    <a class="avatar">
      <img :src="avatar">
    </a>
    <div class="content">
      <a class="author">Matt</a>
      <div class="metadata">
        <span class="date">今天下午 5:42</span>
      </div>
      <div class="text">太赞了！ </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
  </div>
  <div class="comment">
    <a class="avatar">
      <img :src="avatar">
    </a>
    <div class="content">
      <a class="author">Elliot Fu</a>
      <div class="metadata">
        <span class="date">昨天上午12:30</span>
      </div>
      <div class="text">
        <p>這對我的研究是非常有用.謝謝!</p>
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
   
  </div>

  <form class="ui reply form">
    <div class="field">
      <textarea></textarea>
    </div>
    <div class="ui blue labeled submit icon button"><i class="icon edit"></i>发表评论</div>
  </form>
</div>
       

       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
           blog:{},
           avatar:"https://upload.jianshu.io/users/upload_avatars/11879331/7a968de2-3d8c-46f1-a5ee-74abe239e444?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
        }

    },
    created(){
        this.init()
    },
    methods:{
        init(){
            this.http.get("http://localhost:5000/api/blog/getblog/"+this.$route.params.id)
            .then(data=>{
                this.blog=data.data
                console.log(this.blog)
            })
        }
    }

}
</script>

<style>

</style>
