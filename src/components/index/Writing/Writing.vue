<template>
  <div>
    <div>
      <modal :types="check"></modal>
      <textarea id="demo" style="display: none;"></textarea>
  
    </div>
  </div>
</template>

<script>
import Modal from '../../base/modal'
export default {
    data(){
      return{
         pwd:'',
         test:'',
         check:''

      }
    },
    created(){
      console.log(123)
      this.init();
        
    //  $('.ui.basic.modal')
    //     .modal('show')
    //   ;
    },
    updated(){
      this.init();
    },
    methods:{
      init(){
        this.test=123
        console.log(this.test)
      }
    },
    beforeRouteEnter(to,from,next){
       
        next(vm=>{
          vm.check="success"
        })         
        
    },
    mounted(){
       layui.use('layedit', function(){
          var layedit = layui.layedit;
          layedit.build('demo'); //建立编辑器
          });
          
    },
    components:{
      Modal
    }

}
</script>

<style>

</style>