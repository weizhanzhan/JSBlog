<template>
  <div>
    <component-alert ></component-alert>
    <index-header></index-header>
    <router-view></router-view>
    <foorter></foorter>
  </div>
</template> 

<script>
import IndexHeader from './components/index/IndexHeader'
import Foorter from './components/index/foorter'
export default {
  name: 'App',
  components: {
    IndexHeader,Foorter
  }
}
</script>

<style >
 a{
     color: black
 }
 body{
     background-image: url('http://111.231.59.56/bgimg.jpg');
      background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat

 }

</style>
