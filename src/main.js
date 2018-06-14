// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './router/index'
import Vuex from 'vuex'
import axios from 'axios'
import store from './store'


import componentAlert from './components/base/alert'
import { VueEditor, Quill } from 'vue2-editor'





Vue.component('component-alert',componentAlert)


Vue.prototype.http=axios

Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
const router=new VueRouter({
   routes:Routes,
   mode:'history'
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
