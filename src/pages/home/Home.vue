<template>
  <div>      
      <div class="container">          
        <div class="row">
            <div class="main">
                <home-header ></home-header>
                <home-content :taps="taps" ref="header"></home-content>
            </div>
            <home-classify :classify="classify"></home-classify>
        </div>         
    </div>  
  </div>

</template>

<script>
import HomeHeader from './components/home-header.vue'
import HomeContent from './components/home-content.vue'
import HomeClassify from './components/home-classify.vue'
import { getCategories } from '@/api/getData'
export default {
    data(){
        return{
            taps:[
                {text:'文章',pid:1,pic:require('../../assest/img/remen.png')},
                {text:'个人',pid:2,pic:require('../../assest/img/dongtai.png')},
                {text:'留言',pid:3,pic:require('../../assest/img/newpinglun.png')},
                 {text:'写博客',pid:4,pic:require('../../assest/img/wenzhang.png')}
            ],
            classify:[]   
        }
    },
    components:{
        HomeHeader,
        HomeContent,
        HomeClassify
    }, 
    mounted(){
       getCategories().then(data=>{
           console.log(123,data)
           this.classify=data.data
       })
    }  
}
</script>
<style>
/* .ui.segment{
    background: gainsboro
}
.form-control{
    background:gainsboro
}
.ui.menu{
   background:gainsboro
}
.ui.form input:not([type]){
   background:gainsboro
}
.ui.form textarea{
    background:gainsboro
} */
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

.row{
    margin: 0 auto;
    display: flex;
    width: 90%;
}
.main{
    flex:0 0 70.66%;
    margin-top:20px;
    width: 80px;
}
.aside{
    flex: 1
}
.main-top{
    margin-top:20px;
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
   flex: 120px 0 0;
   width: 120px;
   height: 120px;

}
.wrap-img img{
   position: relative;
   width:100%;
   height: 100%;
   border-radius: 4px;
   box-shadow: 0 1px 3px rgba(0,0,0,.3);
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
.slide-right{
    width:100%;
    margin-left: 10%!important;
    margin-top: 65%!important;
}
.calssify-title{
    position: absolute;
    top:160px;
    left: 30px;
}
.calssify-list{
    margin-top: 85%;
    margin-left:23%
}


@media only screen and (max-width:500px ) {
    .row {
        width: 100%;
    }
    .main{
        width: 100%;
        float: left;
        flex:1 
    }
    .classify{
        width: 100%;
        float: left;
    }
    .slide-right{
        margin: 0 !important
    }
}
</style>
