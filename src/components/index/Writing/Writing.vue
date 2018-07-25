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
      <modal :types="check"></modal>
      <vue-editor v-model="article.content"></vue-editor>
      <button  class="btn btn-primary" @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
import Modal from '../../base/modal'
import { VueEditor, Quill } from 'vue2-editor'
import qs from 'qs';
export default {
    data(){
      return{
         pwd:'',
         test:'',
         check:'',
         article:{
           title:'',
           author:'',
           content:''
         },
         alerttext:""
      }
    },
    methods:{
      submit(){     
        this.http.post("/blog/addblog",qs.stringify(this.article),{
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        })
        .then(res=>{
          this.Base.messageBox(res.data)
          // if(res.data.status=="success")
               this.$router.push({path:"/artice"})   
                
        })           
      },
    },
    components:{
      Modal,VueEditor
    }

}
</script>

<style>

</style>