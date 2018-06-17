<template>
 
   <div>
     <div v-show="$store.state.alert.length!=0" 
          v-for="(text,index) in $store.state.alert" 
          :key="index"  
          :style="alertStyle(index)">        
        <div v-show="status=='success'" class="ui success message">       
          <i class="close icon" @click="close" ></i>
          <div class="header" > {{text}} </div>   
        </div>     
        <div v-show="status=='error'" class="ui negative message">       
          <i class="close icon"></i>
          <div class="header">{{text}} </div>
        </div>      
    </div>   
   </div>   
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
    computed:{
        status(){
            return this.$store.state.alertstatus
        }
    },
    methods:{
        close(val){
           this.alertShow=false
        },
        alertStyle(index){
           return {'position':'fixed','right':'20px','top':20+index*(1+60)+'px'}
        }
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
