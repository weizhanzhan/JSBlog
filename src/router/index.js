

import Home from "../pages/home/home"
import Blog from "../pages/blogs/blogs"
import Detail from "../pages/detail/detail"
import Info from "../pages/info/info"
import Message from "../pages/message/message"
import Send from "../pages/send/send"
export default[
    
    { path:'/',name:'主页',component:Home,children:[
        { path:'/blog',name:'文章',component:Blog},
        { path:'/blog/:id',name:'文章详情',component:Detail},
        { path:'/info',name:'个人',component:Info},
        { path:'/message',name:'留言',component:Message},
        { path:'/write',name:'写博客',component:Send}
     ],redirect:"/blog"
    },
    {path:'*',redirect:'/home'}
] 