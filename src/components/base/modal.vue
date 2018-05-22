<template>
    <div>
        <div class="alert alert-primary" v-if="type=='success'" role="alert">
          success!
        </div>
        <div class="alert alert-danger" v-if="type=='fail'"  role="alert">
          fail!
        </div>
    </div>
</template>

<script>
export default {
    props:['types'],
    data(){
        return{
           type:this.types

        }
    },
    uodates(){
        this.type=this.types
    }

}
</script>

<style>

</style>
