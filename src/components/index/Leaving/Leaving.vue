<template>
  <div>
    <div class="ui comments">
      <h3 class="ui dividing header">留言区</h3>
      <div class="comment" v-for="(msg,index) in messages" :key="index">
        <a class="avatar">
          <img :src="msg.img">
        </a>
        <div class="content">
          <a class="author">{{msg.email}}</a>
          <div class="metadata">
            <span class="date">{{listdate(msg.date)}}</span>
          </div>
          <div class="text">{{msg.content}}</div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/elliot.jpg">
        </a>
        <div class="content">
          <a class="author">Elliot Fu</a>
          <div class="metadata">
            <span class="date">昨天上午12:30</span>
          </div>
          <div class="text">
            <p>這對我的研究是非常有用.謝謝!</p>
          </div>
          <div class="actions" >
            <a class="reply" @click="showRep">Reply</a>
          </div>      
          <replay :show="repShow"  @close="close"></replay>
         
        </div>
        <!-- <div class="comments">
          <div class="comment">
            <a class="avatar">
              <img src="/images/avatar/small/jenny.jpg">
            </a>
            <div class="content">
              <a class="author">Jenny Hess</a>
              <div class="metadata">
                <span class="date">刚刚</span>
              </div>
              <div class="text">艾略特你永远是多么正确 :) </div>
              <div class="actions">
                <a class="reply">Reply</a>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <page :allcount="allcount" :nowpage="nowpage" :pagesize="pagesize" @nextpage="nextpage"></page>
      <form class="ui reply form">
        <div class="form-group">
            <label for="email">Email</label>
            <input  class="form-control" id="email" v-model="email" placeholder="Author">
          </div>
        <div class="field">
          <textarea v-model="content"></textarea>
        </div>
        <div class="ui blue labeled submit icon button" @click="addmessage"><i class="icon edit"></i> 提交留言 </div>
      </form>
    </div>
  </div>
</template>

<script>
import qs from "qs"
export default {
     data(){
       return{
         messages:[],
         email:"",
         content:"",
         allcount:0,
         nowpage:1,
         pagesize:4,
         repShow:false
       }
     },
     created(){
        this.init()
     },
     methods:{
       init(){
         this.http.get('/message?nowpage='+this.nowpage+"&&pagesize="+this.pagesize)
         .then(msg=>{
           console.log(123)
           this.messages=msg.data.msgs
           this.allcount=msg.data.count
           console.log(msg.data)
         })
       },
       listdate(val){
            return new Date(val).Format("yyyy-MM-dd hh:mm:ss")
        },
        addmessage(){
          let newmsg={}
          newmsg.email=this.email;
          newmsg.content=this.content
          this.http.post("/message/addmessage",qs.stringify(newmsg))
          .then(res=>{
             this.init()
          })
        },
        nextpage(next){
           this.nowpage=next;
           this.init()
        },
        showRep(){
          this.repShow=true
        },
        close(val){
            this.repShow=val
            console.log(this.show)
        }
     }

}
</script>

<style>

</style>