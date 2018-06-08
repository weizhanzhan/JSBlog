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

      <modal :types="check"></modal>
      <vue-editor v-model="article.content"></vue-editor>
      <button  class="btn btn-primary" @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
import Modal from '../../base/modal'
import { VueEditor } from 'vue2-editor'
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
      }
    },
    created(){
      console.log(123)     
    },
    updated(){
    },
    methods:{
      submit(){
        console.log(this.article)
        $.ajax({
          type:'post',
          data:this.article,
          url:'http://localhost:5000/api/write'
        })
        .done(data=>{
          console.log('success',data)
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