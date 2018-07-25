<template>
  <div>
      
      <div class="container">   
        <div class="row">
            <div class="main">
                <div class="main-top">
                    <div class="main-top-left">
                       <a class="avatar">
                           <img style="width:6rem;height:6rem" src="https://upload.jianshu.io/users/upload_avatars/11879331/7a968de2-3d8c-46f1-a5ee-74abe239e444?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"/>
                       </a>
                    </div>
                    <div class="main-top-right">
                        <div class="top-title">魏展展</div>
                        <div class="top-info">                                     
                            <div v-for="(i,index) in info" class="meta-block" :key="index">
                                <span class="top-info-text" v-html="i.text"></span>
                            </div>  
                        </div>
                    </div>                 
                </div>
                <div class="main-content">
                    <div class="ui pointing secondary menu">
                        <a v-for="(tap,index) in taps" class="item"
                         @click="select(index+1,tap.text)" @mouseover="mouseover(index+1)"
                         @mouseout="mouseout(index+1)" 
                         
                         :class="{active:selectTap==tap.pid||mouseId==tap.pid}"  :key="index">
                             <img style="width:1.2rem" :src="tap.pic" />&nbsp;&nbsp;{{tap.text}} 
                        </a>                                           
                    </div>
                   
                    <div class="ui segment">
                       <div class="ui active inverted dimmer" v-show="loading">
                       <div class="ui text loader">加载</div>
                     </div>
                     <p></p>
                    <div class="list-content">
                         <transition name="bounce">                    
                           <router-view></router-view>                  
                        </transition> 
                    </div>
                </div>  
               </div>
            </div>
            <div class="classify">
                  <a class="ui teal  tag label calssify-title">Blog Category</a>
                 <div class="calssify-list">                                  
                    <!-- <div class="ui bottom attached active tab segment " style="border-radius: .28571429rem;">                   
                     <div class="ui middle aligned animated list">
                        <a class="item" v-for="(item,index) in classify" :key="index">                           
                            <img class="ui avatar image" :src="item.imgUrl">
                            <div class="content">
                            <div class="header"><a>{{item.text}}</a></div>
                            </div>                     
                        </a>                   
                    </div>
                </div>   -->
               
                <div class="ui middle aligned animated list">
                        <a class="item" v-for="(item,index) in classify" :key="index">                           
                            <img class="ui avatar image" :src="item.imgUrl">
                            <div class="content">
                            <div class="header"><a>{{item.text}}(10)</a></div>
                            </div>                     
                        </a>                   
                    </div>
                </div>
            </div>
        </div>         
    </div>  
  </div>

</template>

<script>
export default {
    data(){
        return{
            info:[
                   {num:0,text:'<a class="ui red label">Vue.js</a>'},
                   {num:0,text:'<a class="ui orange label">Node.js</a>'},
                   {num:0,text:'<a class="ui olive label">Asp.Net</a>'},
                   {num:0,text:'<a class="ui grey label">Jq&Js</a>'},
                   {num:0,text:'<a class="ui violet label">Mssql</a>'},
               ],
            taps:[
                {text:'文章',pid:1,pic:require('./img/remen.png')},
                {text:'个人',pid:2,pic:require('./img/dongtai.png')},
                {text:'留言',pid:3,pic:require('./img/newpinglun.png')},
                {text:'写博客',pid:4,pic:require('./img/wenzhang.png')}
            ],
            classify:[
                {imgUrl:"http://111.231.59.56:5000/images/classify/vue.png",text:"Vue.js"},
                {imgUrl:"http://111.231.59.56:5000/images/classify/react.png",text:"React.js"},
                {imgUrl:"http://111.231.59.56:5000/images/classify/pic_html5.gif",text:"H5"},
                {imgUrl:"http://111.231.59.56:5000/images/classify/js.jpg",text:"JavaScript"},
                {imgUrl:"http://111.231.59.56:5000/images/classify/nodejs.jpg",text:"Node.js"},
                {imgUrl:"http://111.231.59.56:5000/images/classify/angular.jpg",text:"Angular.js"},
                {imgUrl:"http://111.231.59.56:5000/images/classify/python.jpg",text:"Python"},
            ],
            selectTap:1,
            mouseId:'',
        }
    },
    computed:{
        loading(){
            return this.$store.state.loading
        }
    },
    watch:{
        '$route'(val){        
            this.mouseout(0)
            this.mouseover(0)
            this.changeTap()
        }
    },
    methods:{
            select(val,name){
                this.selectTap=val
                this.$router.push({name:name})
            },
            mouseout(val){
                this.mouseId=0
            },
            mouseover(val){
                this.mouseId=val
            },
            changeTap(){
                switch(this.$route.path){
                    case '/article':
                         this.selectTap=1;
                         break
                    case '/dynamic':
                         this.selectTap=2;
                         break
                    case '/leaving':
                         this.selectTap=3;
                         break
                    case '/writing':
                         this.selectTap=4;
                         break
                }
            }
    },
    created(){
       this.changeTap()
    }

}
</script>
<style>
.ui.segment{
    background: beige
}
.form-control{
    background:beige
}
.ui.menu{
   background:beige
}
.ui.form input:not([type]){
   background:beige
}
.ui.form textarea{
    background:beige
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.container{

}
.row{
    margin: 0 auto;
    display: flex;
    width: 85%;
}
.main{
    flex:0 0 66.66%;
    width: 80px;
}
.aside{
    flex: 1
}
.main-top{
    display: flex;
}
.main-top-left{
   flex: 0 0 80px;
}
.avatar img{
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
}
.main-top-right{
   flex: 1;
   margin: 0 12px
}
.top-title{
    display: inline;
    font-size: 1.5rem;
    font-weight: 700;
    vertical-align: middle;
}
.top-info{
    font-size: 14px;
    margin-top: 14px
}
.meta-block{
    display: inline-block;
    margin: 0 7px 6px 0;
    padding: 0 7px 0 0;
    border-right: 1px solid #f0f0f0;
}
.top-info-text{
    font-size: 12px;
    color: #969696;
}
.main-content{
    margin-top: 20px
}
.node-list{
    margin: 0;
    padding: 0;
    list-style: none;
}
/* .note-list li {
    position: flex;
    width: 100%;
    margin: 0 0 17px;
    padding: 0 2px 17px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
} */
.list-item{
    position: relative;
    display: flex;
    border-bottom: 3px solid #f0f0f0;
    padding: 0 2px 17px 0;
}
.wrap-img{
   flex: 150px 0 0;
   width: 150px;
   height: 120px;

}
.wrap-img img{
   position: relative;
   width:100%;
   height: 100%;
   border-radius: 4px;
   border: 1px solid #f0f0f0;
   top:20%
   
}
.node-content{
    flex: 1
}
.author{
    margin-bottom: 14px;
    font-size: 13px;
}
.follow-detail{
    padding: 20px;
    background-color: hsla(0,0%,71%,.1);
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    font-size: 12px;
}
.node-list-title{
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
}
.info{
    display: inline-block;
    vertical-align: middle;
}
.aside{
    padding: 0;
    margin-left: 4.16667%;
    width: 29.16667%;
}
.abstract{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
}
.node-list-meta{
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
}
.list-meta-i{
    margin-right: 10px;
    color:#b4b4b4;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.classify{
    flex: 1;
    
}
.calssify-title{
    position: absolute;
    top:160px;
    left: 30px;
}
.calssify-list{
    margin-top: 55%;
    margin-left:23%
}
</style>
