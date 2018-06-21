// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './router/index'
import Vuex from 'vuex'
import axios from 'axios'
import store from './store'

//基础组件
import componentAlert from './components/base/alert'
import Page from './components/base/page'

Vue.component('component-alert',componentAlert)
Vue.component('page',Page)
import { VueEditor, Quill } from 'vue2-editor'

import DateFormat from "../static/js/Dateformat.js"
import Base from "../static/js/base.js"

console.log(Base)
Vue.prototype.Base=Base
 





axios.defaults.baseURL="http://localhost:5000/api";
Vue.prototype.http=axios


Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
const router=new VueRouter({
   routes:Routes,
   mode:'history',
   scrollBehavior (to, from, savedPosition) {
    //  if(to.name=="文章详情"&&from.name=="文章"){
    //    console.log("icoming")
    //     return { x: 0, y: 500 }
    //  }
     return { x: 0, y: 0 }
  }
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
