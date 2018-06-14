<template>
  <div>
    <component-alert ></component-alert>
    <index-header></index-header>
    <router-view></router-view>
  </div>
</template>

<script>
import IndexHeader from './components/index/IndexHeader'
export default {
  name: 'App',
  components: {
    IndexHeader
  }
}
</script>

<style>

</style>
