<template>
  <div>
    <div>
      <component-alert ref="alert"></component-alert>
      <div class="form-group">
         <label for="exampleInputEmail1">Title</label>
         <input  class="form-control" v-model="article.title" id="Title"  placeholder="Enter Title">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Author</label>
        <input  class="form-control" id="Author" v-model="article.author" placeholder="Author">
      </div>

      <modal :types="check"></modal>
      <div v-html="article.content"></div>
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
    created(){
      console.log(Quill)     
    },
    updated(){
    },
    methods:{
      submit(){     
        this.http.post("http://localhost:5000/api/blog/addblog",qs.stringify(this.article),{
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        })
        .then(res=>{
          for(var data in res.data.msg){
              this.$refs.alert.show({ content:res.data.msg[data],status:res.data.status})        
          } 
          return             
        })
        .then(()=>{
          this.$router.push({path:"/artice"})     
        })
  
      }
    },
    beforeRouteEnter(to,from,next){
       
        next(vm=>{
         // vm.check="success"
        })         
        
    },
    mounted(){
      
          
    },
    components:{
      Modal,VueEditor
    }

}
</script>

<style>
</style>