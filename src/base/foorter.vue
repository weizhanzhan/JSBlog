<template>
    <div  :class="['theme-footer'+cssNum]" >
        <p class="">魏展展的独立博客 © 2018</p>
        <p class=""> Powered by Zhanwei || semantic ui</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['cssNum'])
    }
}
</script>

<style>

</style>
