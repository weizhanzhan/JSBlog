<template>
    <div class="theme-info" v-show="isShowTheme"
               @mousemove="changeTheme"
               @mouseout="closeTheme"
    >
         <div  class="theme-item" 
               :class="[selectId==theme.value?'test': '']"
               v-for="(theme,index) in themes"
               @mousemove="changeSelectTheme(theme.value)"
               @mouseout="closeSelectTheme(theme.value)" 
               :key="index"
         >
           <a href="">{{theme.title}}</a>
         </div>
    </div>
</template>

<script>
export default {
    props:['isShowTheme',],
    data(){
        return{
            themes:[
                {title:"主题1",value:1},
                {title:"主题2",value:2},
                {title:"主题3",value:3}
            ],
            selectId:""
        }
    },
    methods:{
        changeTheme(){
            this.$emit('update:isShowTheme',true)
         },
         closeTheme(){
            this.$emit('update:isShowTheme',false)
         },
         changeSelectTheme(val){
            this.selectId=val
         },
         closeSelectTheme(){
             this.selectId=""
         }
    }
}
</script>

<style >
.test{
    background: #caced7
}
.theme-info{
    position: fixed;
    right: 10px;
    top: 50px;    
    width: 100px;
    background: #fff;
    border-radius: 8px;
}
.theme-item{
  padding: 10px;
  border-bottom: 1px solid #eee
}
</style>
