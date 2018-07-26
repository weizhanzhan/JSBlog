<template>
    <div class="main-content">
            <div class="ui pointing secondary menu">
                <a v-for="(tap,index) in taps" class="item"
                    @click="select(index+1,tap.text)" @mouseover="mouseover(index+1)"
                    @mouseout="mouseout(index+1)"                 
                    :class="{active:selectTap==tap.pid||mouseId==tap.pid}"  :key="index">
                        <img style="width:1.2rem" :src="tap.pic" />&nbsp;&nbsp;{{tap.text}} 
                </a>                                           
            </div>           
            <div class="ui segment">
                <div class="ui active inverted dimmer" v-show="loading">
                <div class="ui text loader">加载</div>
                </div>
                <p></p>
            <div class="list-content">
                    <transition name="bounce">                    
                    <router-view></router-view>                  
                </transition> 
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    name:"home-content",
    props:{
        taps:Array
    },
    data(){
        return{
            selectTap:1,
            mouseId:'',
        }
    },
    created(){
         this.changeTap()
    },
    computed:{
        loading(){
            return this.$store.state.loading
        }
    },
    watch:{
        '$route'(val){      
            this.mouseout(0)
            this.mouseover(0)
            this.changeTap()
        }
    },
    methods:{
            select(val,name){
                this.selectTap=val
                this.$router.push({name:name})
            },
            mouseout(val){
                this.mouseId=0
            },
            mouseover(val){
                this.mouseId=val
            },
            changeTap(){
                switch(this.$route.path){
                    case '/article':
                         this.selectTap=1;
                         break
                    case '/dynamic':
                         this.selectTap=2;
                         break
                    case '/leaving':
                         this.selectTap=3;
                         break
                    case '/writing':
                         this.selectTap=4;
                         break
                }
            }
    },

}
</script>

<style>

</style>
