<template>
<transition name="fade">
    <div v-if="show"> 
       <div class="alert alert-secondary" role="alert">
        <form>
            <div class="form-row">
                <div class="form-group col-md-4">        
                  <input type="email" class="form-control" id="email" v-model="email" placeholder="Email">
                </div>
                <div class="form-group col-md-8">             
                  <input  class="form-control" id="content" v-model="content" placeholder="回复内容">
                </div>
            </div>         
        </form>
        <div style="text-align:right">
           <button type="button" class="btn btn-info">发表</button>
           <button type="button" class="btn btn-danger" @click="back">取消</button>
        </div>
          </div>          
    </div>
</transition>
</template>

<script>
export default {
       props:{
           show:{
               type:Boolean,
               default:false
           }
       },
       data(){
           return{
              email:"",
              content:""
           }
       },
       methods:{
           back(){
               this.$emit("close",false)
           }
       }

}
</script>

<style>
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
