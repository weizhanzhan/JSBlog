<template>
   <div>
      <!-- <div  v-for="(data,index) in alertShow" v-if="data.isshow" :key="index" :style="{position:'fixed',right:'20px',top:index*(1+60)+'px'}" >
           {{closeevery(data,index)}}
        <div v-show="data.status=='success'" class="ui success message">
            
        <i class="close icon" @click="close" ></i>
        <div class="header">{{data.content}} </div>   
      </div>
      <div v-show="data.status=='error'" class="ui negative message">
          
        <i class="close icon"></i>
        <div class="header">{{data.content}}</div>
      </div>
    </div> -->
     <div style="position:fixed;right:20px;top:20px" v-show="$store.state.alert">
          
        <div class="ui success message">
            
        <i class="close icon" @click="close" ></i>
        <div class="header"> {{$store.state.alert}} </div>   
      </div>
      
    </div>
    
   </div>
   
    
<!-- </transition> -->
</template>

<script>
import Vue from 'vue'
export default {
    data(){
        return{
            alertShow:[],
   
            top:0
        }
    },
    methods:{
        show(val){
   
     
       
            val!=""?val:""
            if(val)
               val.isshow=true
               this.alertShow.unshift(val!=""?val:"")
            // var t=setTimeout(()=>{
            //      this.alertShow=""
            // },3000)
        },
        close(val){
           this.alertShow=false
        },
        closeevery(val,index){
            console.log(val)
            var t=setTimeout(()=>{
                 //this.alertShow=[]
                 this.alertShow.splice(index,1)
                 val.isshow=false
            },3000)
       
        },
    }

}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.alert-child{
    position: fixed;
    top:20px;
    right: 20px;

}
</style>
