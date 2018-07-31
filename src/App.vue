<template>
  <div id="app"  :class="['theme-bg'+cssNum]">
    <component-alert ></component-alert>
    <index-header></index-header>
    <router-view></router-view>
    <foorter></foorter>
  </div>
</template> 

<script>
import IndexHeader from './base/IndexHeader'
import Foorter from './base/foorter'
import { mapState } from 'vuex'
export default {
  name: 'App', 
  components: {
    IndexHeader,Foorter
  },
  computed:{
      ...mapState(['cssNum'])
  }
}
</script>

<style lang="stylus">
 @import "./assest/css/varibles.styl"
 @import "./assest/theme/theme1.css"
 @import "./assest/theme/theme2.css"
 @import "./assest/theme/theme3.css"
 a
   color: black
</style>
