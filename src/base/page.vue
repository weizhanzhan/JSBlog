<template>
  <div> 
     <tfoot>
         <tr><th colspan="3">
            <div class="ui right floated pagination menu" style="background:unset">
                <a class="icon item" @click="up">
                   <i class="left chevron icon"></i>
                </a>
                <a :class="{'item':true,'active':nowpage==count}"
                   v-for="(count,index) in pagecount" 
                   :key="index"
                   @click="changepage(count)"
                   >{{count}}</a>
                <a class="icon item" @click="next" disabled>
                   <i class="right chevron icon"></i>
                </a>
                <a class="item">当前{{inpage}}页&nbsp;&nbsp;共{{pagecount}}页</a>
            </div>
            </th>
         </tr>
     </tfoot>
 </div>
</template>

<script>
import { mapMutations} from 'vuex'
export default {
    props:{
        allcount:{
            type:Number
        },
        nowpage:{
            type:Number
        },
        pagesize:{
            type:Number
        }
    },
    data(){
        return{
           size:this.pagesize,
           inpage:this.nowpage
        }
    },
    computed:{
        pagecount(){
            return Math.ceil(this.allcount/this.pagesize)
        },    
    },
    methods:{
        next(){                  
            if(this.nowpage>=this.pagecount){               
                this.Base.messageBox({msg:{error:"已到达末页!"},status:"error"})
            }else{
                 this.nextPage()
                 this.$emit('nextpage',this.inpage)
            }
        },
        up(){                       
            if(this.nowpage<=1){
                this.changePageNum(1)
                this.Base.messageBox({msg:{error:"初始页!"},status:"error"})
            }else{
                this.upPage()
                this.$emit('nextpage',this.inpage)
            }                
        },
        changepage(num){
             this.changePageNum(num)
             this.$emit('nextpage',num)

        },
        ...mapMutations(['changePageNum']),
        ...mapMutations(['upPage']),
        ...mapMutations(['nextPage']),
    }

}
</script>

<style>

</style>
