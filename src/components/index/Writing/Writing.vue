<template>
  <div>
    <div>
      <textarea id="demo" style="display: none;"></textarea>
      <div class="ui basic modal" ref="modal">
  <i class="close icon"></i>
  <div class="header">
    Archive Old Messages
  </div>
  <div class="image content">

    <div class="description">
      <p>请输入您的通行证账号</p>
      <input type="text" v-model="pwd">
    </div>
  </div>
  <div class="actions">
    <div class="two fluid ui inverted buttons">
      <div class="ui cancel red basic inverted button">
        <i class="remove icon"></i>
        No
      </div>
      <div class="ui ok green basic inverted button">
        <i class="checkmark icon"></i>
        Yes
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
         pwd:'',
         test:''

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
       localStorage.setItem('mydata',JSON.stringify({name:'weizhan',age:2}))
        //  $('.ui.basic.modal')
        //     .modal('show')
        //   ;
        // if(false){
        //   next()
        // }
        next()
    },
    mounted(){
       layui.use('layedit', function(){
          var layedit = layui.layedit;
          layedit.build('demo'); //建立编辑器
          });
          
    }

}
</script>

<style>

</style>