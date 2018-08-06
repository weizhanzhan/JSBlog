import axios from 'axios'

/*  获取博客列表*/
export const GetBlogs = (nowpage,pagesize) =>axios.get("/blog?nowpage="+nowpage+"&&pagesize="+pagesize)

/*  增加博客查看次数 */
export const AddViewCounts = id =>axios.get("/blog/addViewCount/"+id)

/*  获取博客详情 */
export const GetDetail = id => axios.get("/blog/getblog/"+id)

/* 获取下一个博客信息 */
export const GetNext = id =>axios.get('blog/nextblog/'+id)

/* 获取上一个博客信息 */
export const GetUp = id =>axios.get('blog/upblog/'+id)

/* 点赞 */
export const support = id => axios.get("/blog/addLikes/"+id)

/*  获取留言*/
export const GetMessage = (nowpage,pagesize) =>axios.get("/message?nowpage="+nowpage+"&&pagesize="+pagesize)

/* 发布博客 */
export const UploadBlog = data => axios.post("/blog/addblog",data)

/* 评论留言区点赞 */
export const likes = data => axios.get(data)

/* 评论留言区不喜欢 */
export const dislikes = data => axios.get(data)

/* 提交留言或评论 */
export const UploadMessage =(url,data)=>axios.post(url,data)

/* 评论和留言回复 */
export const Replay =(url,data)=>axios.post(url,data)

/* 获取博客分类 */
export const getCategories=()=>axios.get('/categories')

/* 分类获取博客 */
export const getBlogByCategory=(category,nowpage,pagesize)=>axios.get('/blog/'+category+'?nowpage='+nowpage+'&&pagesize='+pagesize)
