import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var Store
export default Store= new Vuex.Store({
      state: {
        alert:""
      },
      getters:{

      },
      mutations: {
        addalert(state,data){
             state.alert=data
            
             setTimeout(()=>{
                console.log("iam coming")
                state.alert=data
             },3000)
        },
        cleanalert(state,data){
            console.log("iam coming")
             setTimeout(()=>{
                state.alert=data
             },3000)
        }
        
      },
      actions:{}

})

