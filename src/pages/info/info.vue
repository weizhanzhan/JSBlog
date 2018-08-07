<template>
    <div>      
        <div class="ui items">
            <div class="ui two column grid">
                <div class="column">
                    <div class="ui raised segment bg">
                        <a class="ui blue ribbon label">Introduce</a> Brief Introduction
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="item">
                <a class="ui small image">
                    <img style="border-radius: 50%;" src="https://upload.jianshu.io/users/upload_avatars/11879331/7a968de2-3d8c-46f1-a5ee-74abe239e444?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240">
                </a>
                <div class="content">
                    <a class="header">魏展展</a>
                    <div class="description">
                        <p>2018毕业于常州信息职业技术学院软件技术专业，主修C#、Asp .Net MVC、javascript</p>
                        <p>毕业从事web前端开发，业务前端框架Vue.js，主要负责开发模块化前端，根据需求实现页面效果，以及ajax与后台交互</p>
                        <p>熟悉ES6,H5,Css3,Node.js，自己项目中也通过node.js开发 Api</p>
                    </div>
                </div>
            </div>
            <div class="ui two column grid">
                <div class="column">
                    <div class="ui raised segment bg">
                        <a class="ui red ribbon label">Working</a>
                        <span>My Details</span>
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="ui list">
                <div class="item">
                    <i class="users icon"></i>
                    <div class="content">现任职常州怡得康安心脏卫士团队前端工程师</div>
                </div>
                <div class="item">
                    <i class="marker icon"></i>
                    <div class="content">江苏，常州 </div>
                </div>
                <div class="item">
                    <i class="mail icon"></i>
                    <div class="content">
                        <a href="mailto:jack@semantic-ui.com">675398552@qq.com</a>
                    </div>
                </div>
                <div class="item">
                    <i class="linkify icon"></i>
                    <div class="content">
                        <a href="http://www.wzhan.club">wzhan.club</a>
                    </div>
                </div>
            </div>
            <div class="ui two column grid">
                <div class="column">
                    <div class="ui raised segment bg">
                        <a class="ui green ribbon label">Project</a> Project display
                        <p></p>
                    </div>
                </div>
            </div>
             <div class="ui list">
                <div class="item">
                     <i class="folder outline icon"></i>
                    <div class="content"><a href="https://github.com/weizhanzhan/meituan">仿美团webapp</a></div>
                </div> 
                <div class="item">
                     <i class="folder outline icon"></i>
                    <div class="content"><a href="https://github.com/weizhanzhan/kcpj">Node.js课程评价</a></div>
                </div>
                <div class="item">
                    <i class="github alternate icon"></i>
                    <div class="content"><a href="https://github.com/weizhanzhan">详见GitHub</a></div>
                </div>           
            </div>
            <div>           
         </div>       
        </div> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "",
                content: ""
            }
        },
        watch:{
            '$route'(){
                console.log(123232)
            }
        },
        methods: {
            add() {
                console.log($('#upload')[0].files[0])
                let file = $('#upload')[0].files[0];
                var formData = new FormData();
                formData.append('file', file);
                formData.append('title', this.title)
                formData.append('content', this.content)
                $.ajax({
                    url: 'http://111.231.59.56:5000/api/upload',
                    type: 'POST',
                    data: formData,
                    // async: false,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        console.log(data)
                    },
                    error: function () {
                        $("#result").html("与服务器通信发生错误");
                    }
                });

            },
        },
        components: {
 
        }
    }
</script>

<style scoped>
    @import '../../../static/css/index.css';
    .side-list{
        display: flex;
        width: 100%;
    }
    .content{
        flex: 0 0 360px;
        width: 360;
    }
    .img{
        flex: 1
    }
    .bg{
        background: unset
    }
</style>