<template>
  <div id="app"  :class="true? 'theme'+num :''">
    <component-alert ></component-alert>
    <index-header></index-header>
    <router-view></router-view>
    <foorter></foorter>
  </div>
</template> 

<script>
import IndexHeader from './base/IndexHeader'
import Foorter from './base/foorter'

export default {
  name: 'App', 
  components: {
    IndexHeader,Foorter
  },
  data(){
    return{
      num:1
    }
  },
  created(){
   
  },
  methods:{
   
  },
  computed:{
      th(){
      return{
         "background":"red"
      }
    }
  }
}
</script>

<style lang="stylus">
 @import "./assest/css/varibles.styl"
 a
   color: black
 .theme1
   background #e8e9ed
   //background-image: url('http://111.231.59.56/bgimg.jpg');
   background-size: cover;
   background-position: center;
   background-attachment: fixed; 
   background-repeat: no-repeat
</style>
