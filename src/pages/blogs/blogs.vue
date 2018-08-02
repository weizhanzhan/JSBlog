<template>
  <div>
    <blog-list :blogs="blogs"></blog-list>
    <br>
    <page :allcount="allcount" :nowpage="nowpage" :pagesize="pagesize" @nextpage="nextpage"></page>
  </div>
</template>

<script>
import BlogList from './components/list'
import { GetBlogs} from '@/api/getData'
export default {
    name:"blog",
    data(){
        return{
            blogs:[],
            allcount:0,
            nowpage:1,
            pagesize:4
        }
    },
    created(){    
        this.init()
    },
    components:{
        BlogList
    },
    methods:{
        init(){
            this.$loading(true)
            GetBlogs(this.nowpage,this.pagesize)
            .then(data=>{
                this.blogs=data.data.blogs,
                this.allcount=data.data.count
                this.$loading(false)
            })
        },     
        nextpage(next){
           this.nowpage=next;
           this.init()
        }
    }
}
</script>

<style>

</style>
