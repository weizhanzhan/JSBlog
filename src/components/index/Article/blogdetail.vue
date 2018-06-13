<template>
    <div>
       <h1>{{blog.title}}</h1>
       <div v-html="blog.content">

       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
           blog:{}
        }

    },
    created(){
        this.init()
    },
    methods:{
        init(){
            this.http.get("http://localhost:5000/api/blog/getblog/"+this.$route.params.id)
            .then(data=>{
                this.blog=data.data
                console.log(this.blog)
            })
        }
    }

}
</script>

<style>

</style>
