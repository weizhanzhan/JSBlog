<template>
    <div class="classify">
        <a class="ui teal  tag label calssify-title">Blog Category</a>
         <div class="calssify-list">                                               
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
</template>

<script>
export default {
    name:"home-classify",
    props:{
        classify:Array
    }
}
</script>

<style>

</style>
