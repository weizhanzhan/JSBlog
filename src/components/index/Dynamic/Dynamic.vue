<template>
    <div>
        <div class="ui two column grid">
            <div class="column">
                <div class="ui raised segment">
                    <a class="ui blue ribbon label">Introduce</a> Brief Introduction
                    <p></p>
                </div>
            </div>
        </div>
        <div class="ui items">
            <div class="item">
                <a class="ui small image">
                    <img src="https://upload.jianshu.io/users/upload_avatars/11879331/7a968de2-3d8c-46f1-a5ee-74abe239e444?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240">
                </a>
                <div class="content">
                    <a class="header">可爱的小狗</a>
                    <div class="description">
                        <p>萌萌狗有各种形状和大小。有的小狗因为呆萌的表情惹人疼爱，有的则因为五短身材令人怜惜。甚至还有一些会因为巨大的体型也会显得傻缺。</p>
                        <p>Many people also have their own barometers for what makes a cute dog.</p>
                    </div>
                </div>
            </div>
            <div class="ui two column grid">
                <div class="column">
                    <div class="ui raised segment">
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
        methods: {

            add() {
                console.log($('#upload')[0].files[0])
                let file = $('#upload')[0].files[0];
                var formData = new FormData();
                formData.append('file', file);
                formData.append('title', this.title)
                formData.append('content', this.content)
                $.ajax({
                    url: 'http://localhost:5000/upload',
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

            }
        },
        components: {

        }
    }
</script>

<style scoped>
    @import '../../../../static/css/index.css';
</style>