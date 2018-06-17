 import vuexdata from  "../../src/store/index.js"


export default{
    vuexdata:vuexdata.state,
    messageBox(data){
        vuexdata.commit('addalert', data)  
    },
    addblog(data){

    }
}