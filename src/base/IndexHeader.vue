<template>
  <div :class="['theme-header'+cssNum]">
    <div>
        <div class="header">
          <h5 class="header-left"><img src="@/assest/img/logo.png" width="150px"></h5>
          <div class="header-right"> 
              <a class="header-list" href="https://github.com/weizhanzhan" ><i class="large github icon" ></i></a>
              <a class="header-list" title="QQ:675398552" href="#" ><i class="large blue qq icon"></i></a>
              <div class="header-list" href="#" @click="goinfo"><i class="large orange child icon"></i></div>     
              <div class="header-list" href="#"
                @click="changeTheme"
                @mousemove="changeTheme"      
                @mouseout="closeTheme"        
              >
                <i class="large violet wizard icon"></i>
                <theme-box :isShowTheme.sync="isShowTheme" ></theme-box>
              </div>   
          </div>
      </div>
    </div>
    <!-- <theme-box :isShowTheme.sync="isShowTheme" ></theme-box> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import themeBox from './themeBox'
export default { 
     data(){
       return{
         isShowTheme:false,
         test:false
       }
     },
     methods:{
         goinfo(){
             this.$router.push({path:"/info"})
         },
         changeTheme(){
            this.isShowTheme=true
         },
         closeTheme(){
            this.isShowTheme=false
         }
     },
     computed:{
       ...mapState(['cssNum']),
     },
     components:{
       themeBox
     }

}
</script>

<style scoped>

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
.header{
  height: 50px;
  line-height: 50px
}
.header-left{
  float: left;
}
.header-right{
  float: right
}
.header-list{
  display: inline-block;
  width: 50px;
  text-align: center
}
</style>
