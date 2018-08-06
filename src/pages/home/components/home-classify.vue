<template>
    <div class="classify">
        <a class="ui teal  tag label calssify-title">Blog Category</a>
         <div class="calssify-list">                                               
           <div class="ui middle aligned animated list">
                <a class="item" v-for="(item,index) in classify" :key="index" @click="selectClassify(item)">                           
                    <img class="ui avatar image" :src="item.imgUrl">
                    <div class="content">
                    <div class="header"><a>{{item.name}}({{item.count}})</a></div>
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
    },
    methods:{
        selectClassify(item){
             console.log(item.name)
             this.$store.commit('changeCategoryName',item.name)
             this.$store.dispatch('getBlogs')
        }
    }
}
</script>

<style>

</style>
