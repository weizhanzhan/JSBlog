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
import componentAlert from './base/alert'
import Page from './base/page'
import Replay from "./base/replay"
import TextItem from "./base/textItem"
import TextForm from "./base/textForm"

Vue.component('component-alert',componentAlert)
Vue.component('page',Page)
Vue.component('replay',Replay)
Vue.component('text-item',TextItem)
Vue.component('text-form',TextForm)

import { VueEditor, Quill } from 'vue2-editor'

import DateFormat from "../static/js/Dateformat.js"
import Base from "../static/js/base.js"

Vue.prototype.Base=Base
 





axios.defaults.baseURL="http://111.231.59.56:5000/api";
Vue.prototype.http=axios

Vue.prototype.$loading=state=>{
  store.commit('load',state)
}


Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
const router=new VueRouter({
   routes:Routes,
 //  mode:'history',
   scrollBehavior (to, from, savedPosition) {
    //  if(to.name=="文章详情"&&from.name=="文章"){
    //    console.log("icoming")
    //     return { x: 0, y: 500 }
    //  }
     return { x: 0, y: 0 }
  }
})
Vue.directive('date', function (el, binding) {
  el.innerHTML=new Date(binding.value.date).Format("yyyy-MM-dd hh:mm:ss")
})
Vue.directive('content', function (el, binding) {
    let val=binding.value
    val=val.replace(/<[^>]+>/g,"")
    val=val.replace(/&nbsp;/gi,'')
    val=val.replace(/&gt;/gi,'')
    val=val.replace(/&lt;/gi,'')
    el.innerHTML= val.slice(0,50)+"...."
  })
new Vue({
  el: '#app',
  components: { App },
  data:{
    loading:false
  },
  template: '<App/>',
  router,
  store
})
