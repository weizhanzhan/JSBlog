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
                        <div class="top-title">贪恋你全部</div>
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
                    <div class="list-content">
                        <router-view></router-view>
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
                {text:'动态',pid:2,pic:require('./img/dongtai.png')},
                {text:'留言',pid:3,pic:require('./img/newpinglun.png')},
                {text:'写博客',pid:4,pic:require('./img/wenzhang.png')}
            ],
            selectTap:1,
            mouseId:'',
        }
    },
    methods:{
            select(val,name){
                this.selectTap=val
                this.$router.push({name:name})
            },
            mouseout(val){
                this.mouseId=val
            },
            mouseover(val){
                this.mouseId=val
            },
            changeTap(){
                console.log(this.$route.path)
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
</style>
