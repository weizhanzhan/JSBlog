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

<style scoped>
 

</style>
