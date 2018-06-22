<template>
  <div>
    <div>
            <!-- <ul class="node-list">
                <li class="list-item" v-for="n in 2" :key="n">
                
                    <div class="node-content" id="contentWz" >
                        <div class="author">
                            <a class="avatar">
                                <img style="width:32px"  src="https://upload.jianshu.io/users/upload_avatars/11879331/7a968de2-3d8c-46f1-a5ee-74abe239e444?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"/>
                            </a>
                            <div class="info">贪恋你全部 <i class="other gender icon blue" ></i> 04.27 13:12</div>
                        </div>
                        
                        <a class="node-list-title">个人博客系统</a>       
                        <p class="abstract">                            
                          急需吃鸡装新机？若不能最贱入手，也别在涨价时做冤大头。今天笔点君的干货文要聊的，不止是近日频频小降的1066吃鸡显卡，还有那个从去年夏天开始就猛涨的DDR4内存条——后者价格...   
                        </p>
                        <div class="node-list-meta">
                            <span class="list-meta-i"><i class="unhide icon"></i>100</span>
                            <span class="list-meta-i"><i class="talk outline icon"></i>100</span>
                            <span class="list-meta-i"><i class="heart icon"></i>100</span>
                        </div>                        
                    </div>   
                    <div class="wrap-img">
                      <img class="wrap-image" src="https://upload-images.jianshu.io/upload_images/5731803-1e2ea966eb8e32c5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" />
                    </div>                           
                </li>
            </ul>            -->
         <div class="ui people shape">
  <div class="sides">
    <div class="side active">
      <div class="ui card">
        <div class="image">
          <img src="/images/avatar/large/steve.jpg">
        </div>
        <div class="content">
          <div class="header">史蒂夫·乔布斯</div>
          <div class="meta">
            <a>Acquaintances</a>
          </div>
          <div class="description">Steve Jobes is a fictional character designed to resemble someone familiar to readers. </div>
        </div>
        <div class="extra content">
          <span class="right floated">2014年加入 </span>
          <span><i class="user icon"></i> 151 Friends </span>
        </div>
      </div>
    </div>
    <div class="side">
      <div class="ui card">
        <div class="image">
          <img src="/images/avatar/large/stevie.jpg">
        </div>
        <div class="content">
          <a class="header">Stevie Feliciano</a>
          <div class="meta">
            <span class="date">2014年加入</span>
          </div>
          <div class="description">Stevie Feliciano是一名居住在纽约的图书馆信息科学家。她喜欢阅读、跑步和写作。 </div>
        </div>
        <div class="extra content">
          <a><i class="user icon"></i> 22 Friends </a>
        </div>
      </div>
    </div>
  </div>
</div><br>
               <div class="ui ignored icon direction buttons">
                    <div class="ui button" @click="left">
                        <i class="left long arrow icon"></i>
                    </div>
                    <div class="ui button" @click="up">
                        <i class="up long arrow icon"></i>
                    </div>
                    <div class="ui button" @click="right">
                        <i class="right long arrow icon"></i>
                    </div>
                    <div class="ui button" @click="down">
                        <i class="down long arrow icon"></i>
                    </div>
                    </div>
                 </div>
           </div>
</template>

<script>
export default {
     methods:{
         up(){
            $('.shape').shape('flip up'); 
         },
         down(){
            $('.shape').shape('flip down'); 
         },
         left(){
            $('.shape').shape('flip left'); 
         },
         right(){
            $('.shape').shape('flip right'); 
         }
     }
}
</script>

<style scoped>
@import '../../../../static/css/index.css';
</style>
