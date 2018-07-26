<template>
  <div>
    <div class="ui comments">
      <h3 class="ui dividing header">Leave a message for me</h3>
      <div class="ui comments">
         <text-item 
             v-for="(msg,index) in messages" 
             :key="index" :obj="msg" 
             replyurl="/message/repmessage"
             likeurl="/message/addlike/"
             dislikeurl="/message/adddislike/"
             @reload="reload"
             >
         </text-item>
      </div>
      <page :allcount="allcount" :nowpage="nowpage" :pagesize="pagesize" @nextpage="nextpage"></page>
      <text-form url="/message/addmessage" @formReload="formReload"></text-form>
    </div>
  </div>
</template>
<script>
import qs from "qs"
import { GetMessage } from '@/api/getData'
export default {
     data(){
       return{
         messages:[],
         email:"",
         content:"",
         allcount:0,
         nowpage:1,
         pagesize:4,
        
       }
     },
     mounted(){
        this.init()
     },
     methods:{
        init(){
          this.$loading(true)
          GetMessage(this.nowpage,this.pagesize)
          .then(msg=>{
            msg.data.msgs.forEach(msg=>{
               msg.show=false
            })
            this.messages=msg.data.msgs         
            this.allcount=msg.data.count
            this.$loading(false)
          })
        },
        nextpage(next){
           this.nowpage=next;
           this.init()
        },
        showRep(index,data){
          data.show=!data.show
        },
        reload(val){
             this.init()
        },
        formReload(){
             this.init()
        },  
     }
}
</script>

<style>

</style>