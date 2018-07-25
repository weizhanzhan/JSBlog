import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var Store
export default Store= new Vuex.Store({
      state: {
        alert:[],
        alertstatus:'',
        loading:false
      },
      getters:{

      },
      mutations: {
        addalert(state,data){
            state.alertstatus=data.status
            for(var key in data.msg){
              state.alert.push(data.msg[key])             
            }
             var out=setTimeout(()=>{
                var inter=setInterval(()=>{
                  state.alert.splice(0,1)
                  if(state.alert.length==0)
                     clearInterval(inter)
                },400)
             },5000)
        }, 
        load(state,data){
          state.loading=data
        }      
      },
      actions:{}

})

