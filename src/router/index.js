import IndexMiddle from '../components/index/IndexMiddle'
import Article from '../components/index/Article/Article'
import Dynamic from '../components/index/Dynamic/Dynamic'
import Leaving from '../components/index/Leaving/Leaving'
import Writing from '../components/index/Writing/Writing'
import blogDetail from "../components/index/Article/blogdetail"
export default[
    { path:'/index',name:'主页' ,component:IndexMiddle,children:[
       { path:'/article',name:'文章',component:Article},
       { path:'/article/:id',name:'文章详情',component:blogDetail},
       { path:'/dynamic',name:'个人',component:Dynamic},
       { path:'/leaving',name:'留言',component:Leaving},
       { path:'/writing',name:'写博客',component:Writing},
    ],redirect:"/article"},
   
    {path:'*',redirect:'/index'}
]