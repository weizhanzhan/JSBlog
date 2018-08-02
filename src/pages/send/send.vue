<template>
  <div>
    <div>
      <div class="form-group">
         <label for="exampleInputEmail1">Title</label>
         <input  class="form-control" v-model="article.title" id="Title"  placeholder="Enter Title">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Author</label>
        <input  class="form-control" id="Author" v-model="article.author" placeholder="Author">
      </div>
      <div class="form-group">
            <label for="exampleFormControlSelect1">Categories</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>Vue.js</option>
                <option>React.js</option>
                <option>Angular</option>
                <option>Pythos</option>
                <option>Html5</option>
            </select>
        </div>
      <vue-editor v-model="article.content"></vue-editor>
      <button  class="btn btn-primary" @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
import { VueEditor, Quill } from 'vue2-editor'
import { UploadBlog } from '@/api/getData'
import qs from 'qs';
export default {
    data(){
      return{
         pwd : '',
         test : '',
         check : '',
         article : {
           title : '',
           author : '',
           content : ''
         },
         alerttext:""
      }
    },
    watch:{
       '$route'(){
                console.log(3434)
            }
    },
    methods:{
      submit(){     
        UploadBlog(qs.stringify(this.article))
        .then(res=>{
          this.Base.messageBox(res.data)
          this.$router.push({path:"/blog"})                 
        })           
      },
    },
    components:{
      VueEditor
    }

}
</script>

<style>

</style>