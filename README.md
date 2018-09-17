# wz-blog
2018-7-15项目初版1.0已经上线  后期待完善

2018-8-7 2.0版 初步完成
  .分类处理
  .主题化
  .样式调整
> blog
# :mortar_board: blog

👉 项目演示地址：http://111.231.59.56/jsblog/index.html


【前端】

- **Vue**：构建用户界面的 MVVM 框架，核心是响应的数据绑定和组系统件
- **vue-router**：为单页面应用提供的路由系统，项目上线前使用了路由懒加载技术，来异步加载路由优化性能
- **vuex**：Vue 集中状态管理，在多个组件共享某些状态时非常便捷
- **axios**：服务端通讯。基于 `Promise` 的网络请求插件
- **vue2-editor**：A text editor using Vue.js and Quill富文本
- **ES6**：ECMAScript 新一代语法，模块化、解构赋值、Promise、Class 等方法非常好用
- **topbar**：js插件，顶部加载条
【后端及数据库】

- **Node.js**：利用 Express 起一个本地测试服务器
- **Express**：一个自身功能极简，完全是由路由和中间件构成一个的WEB开发框架
- **MongoDB**：是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案

## :closed_book: 收获

1. 对 vue 的组件、指令、选项、模版渲染、事件绑定、计算属性等有了进一步的了解
2. 进一步了解 vue 组件之间的交互、传值
3. 进一步熟悉了在 vue 项目中使用第三方插件（组件）
4. 进一步熟悉了组件化、模块化的开发思维
5. 进一步熟悉了 vue-router 控制路由和子路由的方式
6. 再次熟悉项目开发流程：项目分析设计 -> 项目环境搭建 -> 依赖安装 -> 页面架构设计 -> 组件开发 -> 测试联调 -> 发布上线
7. 学会利用过渡效果及动画效果制作良好的用户交互体验



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

base 基础方法

this.Base.messageBox({msg:{error:"初始页!"},status:"error"}) //message 格式
