<template>
    <div>
      <form class="ui reply form">
        <div class="form-group">
            <label for="email">Email</label>
            <input  class="form-control" id="email" v-model="email" placeholder="Author">
          </div>
        <div class="field">
          <textarea v-model="content"></textarea>
        </div>
        <div class="ui blue labeled submit icon button" @click="add"><i class="icon edit"></i> 提交</div>
      </form>
    </div>
</template>
<script>
import qs from 'qs'
import { UploadMessage } from '@/api/getData'
export default {
    props:{
        url:String   
    },
    data(){
        return{
            email:"",
            content:""
        }
    },
    methods:{
        add(){
          this.$loading(true)
          let newmsg={}
          newmsg.email=this.email;
          newmsg.content=this.content
          
          UploadMessage(this.url,qs.stringify(newmsg))
          .then(res=>{
             this.email="",
             this.content=""
             this.$loading(false)
             this.$emit('formReload',true)
          })
        }
    }

}
</script>

<style>

</style>
