<template>
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
</template>

<script>
export default {
    name:"home-header",
    props:{
        info:Array
    }

}
</script>

<style>

</style>
