<template>
<transition name="fade">
    <div v-show="isshow" >      
       <div class="alert alert-secondary" role="alert">
        <form>
            <ul>
               <li v-for="(rep,index) in show.replay" :key="index" class="list-li">
                  <div>{{rep.email}} :{{rep.content}}</div>
                  <div style="text-align:right" v-date="{ date:rep.date }" >
                  </div>
               </li>
            </ul>
            <div class="form-row" style="margin-top:10px">
                <div class="form-group col-md-4">        
                  <input type="email" class="form-control" id="email" v-model="email" placeholder="Email">
                </div>
                <div class="form-group col-md-8">             
                  <input  class="form-control" id="content" v-model="content" placeholder="回复内容">
                </div>
            </div>         
        </form>
        <div style="text-align:right">
           <button type="button" class="btn btn-info" @click="add">发表</button>
           <button type="button" class="btn btn-danger" @click="back">取消</button>
        </div>
      </div>          
    </div>
</transition>
</template>

<script>
import Vue from "vue"
import qs from 'qs'
export default {
       props:{
           show:{
               type:Object,          
           },
           replyurl:{
               type:String
           }
       },
       data(){
           return{
              email:"",
              content:"",
              isshow:this.show.show
           }
       },
       watch:{
           'show.show'(val){
               this.isshow=val
           }
       },
       methods:{
           back(){
               Vue.set(this.show,'show',false)
           },
           add(){
               this.$loading(true)
               let rep={
                   email:this.email,
                   content:this.content,
                   _id:this.show._id
               }
               this.http.post(this.replyurl,qs.stringify(rep))
               .then(data=>{
                   this.$loading(false)
                   if(data.data.status="success"){
                       this.back();
                       this.email="";
                       this.content="";
                       this.$emit("reload",true)
                   }
               })
           }
       }

}
</script>

<style>
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.list-li{
    margin-top: 10px;
    border-bottom:1px solid #D8BFD8
}
.alert-secondary{
  background: rosybrown
}
</style>
