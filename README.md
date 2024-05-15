<h1 style="text-align: center;">GoluNavigationWeb</h1>

## 此项目为[GoluNavigationServer](https://github.com/Go-lu/GoluNavigationServer)项目的前端部分，需搭配后端使用
### 一个简洁且现代化的导航页，前端使用vue，后端node，数据持久化到sqlite

##### 设计效果：
###### _点此预览： [Demo](http://demo.nav.golu.top)_
> - [x] 具有ipv6、ipv4、lan(内网)三种网络状态的导航聚合切换
> - [x] 可切换白天和夜晚模式
> - [x] 动态网页title [一言和天气]
> - [x] 一言实现数据库缓存
> - [x] 丰富的随机动画效果 [使用animate.css]
> - [ ] 隐私导航页 [密码验证或登录验证]
> - [ ] 搜索框 [添加后可作为浏览器首页]
> - [x] 后台管理 [连续点击主题切换十次后触发修改操作]
> - [x] 数据库存储数据
> - [ ] 使用数据库存储配置信息
> - [ ] ~~更换后端工具~~
> - [ ] ......
 
## 食用方式：
> 1. 克隆到本地后cd到项目根目录，执行：
>   > 
>   >  安装依赖：
>   >
>   > `npm install`
>   > 
>   >  打包：
>   >
>   >  `npm run build` 
> 2. 将打包后的dist目录扔进[GoluNavigation](https://github.com/Go-lu/GoluNavigationServer)后端项目根目录中
