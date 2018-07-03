<template>
  <div>
    <!-- <div class="header-img"> -->
      <div>
        <!-- <img class="headimage" :src="headerimg.pic">
        <h2 class="headerintro">Creativity Never Sleeps</h2> -->
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal">ZhanWei</h5>
        <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="https://github.com/weizhanzhan" ><i class="large github icon" ></i></a>
            <a class="p-2 text-dark"  title="QQ:675398552" ><i class="large qq icon"></i></a>
            <a class="p-2 text-dark" @click="goinfo"><i class="large child icon"></i></a>
            
        </nav>
    </div>
    </div>
  </div>
</template>

<script>
export default {
     data(){
       return{
          headerimg:{pic:require('./img/yuanfang.jpg'),text:'shopsvg'},
       }
     },
     methods:{
         goinfo(){
             this.$router.push({path:"/dynamic"})
         }
     }

}
</script>

<style>
.header-img{
  height: 420px;
   overflow: hidden; 
   margin-bottom: 5%
}
.headimage{

    width: 101%;
    z-index: 0;
   
}
.headerintro{
  position: absolute;
  top: 30%;
  left:40%;
  font-size: 36px;
  font-weight: 300;
  color: white

}
</style>
