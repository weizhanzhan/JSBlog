import Vue from 'vue'
import Vuex from 'vuex'

import { getBlogByCategory} from '@/api/getData'

Vue.use(Vuex)
var Store

let localNum=1
if(localStorage.num){
  localNum=localStorage.num
}else{
  localNum=1
}
export default Store= new Vuex.Store({
      state: {
        alert:[],
        alertstatus:'',
        loading:false,

        nowpage:1,//页码
        pagesize:4,
        allcount:0,

        cssNum:localNum, //全局样式编号

        categoryName:"",

        Blogs:[]
      },
      getters:{

      },
      mutations: {
        changeCssNum(state,data){   //改变主题     
            localStorage.num=data
            state.cssNum=data
        },
        addalert(state,data){ //警告
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
        load(state,data){ //加载动画
          state.loading=data
        },
        initBlogs(state,data){  //获取博客
          console.log(data)
           state.Blogs=data.blogs
           state.allcount=data.count
        },
        changePageNum(state,data){
           state.nowpage=data
        },//改变页码数
        upPage(state){ //上一页
            state.nowpage--
        },
        nextPage(state){ //下一页
            state.nowpage++
        },
        changeCategoryName(state,name){ //改变分类名称
          state.nowpage=1
          state.categoryName=name
        }
      },
      actions:{
        getBlogs({commit,state}){//根据分类获取博客
          
          getBlogByCategory(state.categoryName,state.nowpage,state.pagesize).then(data=>{
            commit('initBlogs',data.data)
          })
        }
      }

})

