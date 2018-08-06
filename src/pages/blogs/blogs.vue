<template>
  <div>
    <blog-list :blogs="Blogs"></blog-list>
    <br>
    <page :allcount="allcount" :nowpage="nowpage" :pagesize="pagesize" @nextpage="nextpage"></page>
  </div>
</template>

<script>
import BlogList from './components/list'
import { GetBlogs , getBlogByCategory } from '@/api/getData'
import { mapState } from 'vuex'
export default {
    name:"blog",
    data(){
        return{
            blogs:[],
            
        }
    },
    created(){    
        this.init()
    },
    components:{
        BlogList
    },
    computed:{
        ...mapState(['Blogs']),
        ...mapState(['nowpage']),
        ...mapState(['pagesize']),
        ...mapState(['allcount'])
    },
    methods:{
        init(){
            this.$loading(true)
            this.$store.dispatch('getBlogs')
            this.$loading(false)
            // getBlogByCategory('',this.nowpage,this.pagesize)
            // .then(data=>{
            //     this.blogs=data.data.blogs,
            //     this.allcount=data.data.count
            //     this.$loading(false)
            // })
        },     
        nextpage(next){
           //this.nowpage=next;
           this.init()
        }
    }
}
</script>

<style>

</style>
