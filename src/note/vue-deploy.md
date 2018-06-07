``` essay-info
title: vue@cli 项目笔记
tags: vue webpack axios sass nginx vuex
info: 目前 vue@cli 3.0 + 还未发布稳定版,下面记录最近使用中遇到得问题和解决方案,可能解决得办法不一定是最优方案,但是,它一定是能跑起来得...
```
    
### vue@cli 3.0 +

如果你还是怀揣着问题的小白,这里有个脱坑大礼包
- [Vue 脱坑记](https://juejin.im/post/59fa9257f265da43062a1b0e)

如果还没升级,没关系,下面还为你准备了贴心大礼包
- [vue-cli 3.0 入门介绍](https://segmentfault.com/a/1190000014094732)
- [官方文档](https://github.com/vuejs/vue-cli/tree/dev/docs)

### 创建项目
```
npm install -g @vue/cli
# or
yarn global add @vue/cli

vue create my-project
# 2.x 中的 init 命令同样也可以使用, 只需要按照提示安装 init
cd my-project
# 3.x 中的启动命令换了哦
npm run serve 
```

### [axios](https://github.com/axios/axios)

在 vue 项目中怎么通过 Ajax 加载数据哩,下面一起看看咯 ~~
```
npm install axios --save
```
[axios](https://github.com/axios/axios) 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端,特点：
* 支持Promise API
* 拦截请求和返回
* 客户端支持抵御[XSRF(跨站请求伪造)](https://baike.baidu.com/item/CSRF)
* [中文文档](https://segmentfault.com/a/1190000008470355) [中文文档2](https://www.kancloud.cn/yunye/axios/234845)
#### 常见问题

 ╮(╯▽╰)╭ 以下问题在文档中都有介绍，请认真查看文档哦 ~~
*   axios默认是请求的时候不会带上cookie的，需要设置withCredentials参数来解决。
    ```
    withCredentials: true
    ```
    这个时候需要注意需要后端配合设置:
    ```json
    Access-Control-Allow-Credentials:true
    Access-Control-Allow-Origin 不可以为 * ,
    因为 * 会和 Access-Control-Allow-Credentials:true 冲突
    需配置指定的地址,如果后端设置 Access-Control-Allow-Origin: *, 会有如下报错信息
    Failed to load http://localhost:8090/category/lists: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. Origin 'http://localhost:8081' is therefore not allowed access. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.
    ``` 
    
*   让post使用**formdata**(大多数Ajax的默认数据格式)格式数据
    默认情况下，axios的Post请求参数为JSON格式。
    为了发送application/x-wwww-form-urlencoded格式数据,需要使用Qs
    ```
    // 如果使用npm安装的axios则不用额外安装qs
    import Qs from 'qs';
    const qs = require('qs');
    axios.post('/foo', qs.stringify({'bar':123}));
    // 设置Content-Type
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    ```
   
*  可以参考下之前 2.x 项目中使用的 axios 配置
    ```
    import axios from 'axios';
    import Qs from 'qs';
    const ApiURL = 'http://xxxxx.xx'
    Vue.prototype.$ajax = axios.create({
      baseURL: ApiURL,
      timeout: 5000,
      withCredentials: true,
     // 这时候我们通过Qs.stringify转换为表单查询参数
      transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
      }],
      // 设置Content-Type
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    ```

### Mock 数据

啊,我自己写vue项目,没有后台,数据怎么弄(⊙o⊙)？
```
npm install mockjs --save-dev
```
- [五分钟小课堂](../../article/mock-note.html)
- [文档](https://github.com/nuysoft/Mock/wiki/Getting-Started)

### 发布部署问题

啊哈,我们已经写好了一个项目怎么发布在互联网上让大家都来仰慕我的英姿呢,别着急,我们先打个包 ~~

```
npm run build
```
执行命令以后，你会发现生成了**dist**文件夹
#### 根目录部署

如果部署在根目录(访问路径: www.xxx.com ),只需要上传**dist**文件夹中的内容
#### 子目录部署
那么放在子目录(访问路径: www.xxx.com/test )要怎么办呢
*   修改 vue.config.js 和 vue-router 配置
    ```vue
    # vue.config.js
    module.exports = {
      baseUrl: '/test/', // 子目录名称
      lintOnSave: false,
      productionSourceMap: false, // SourceMap
    }
    ```
    
    ```vue
    # vue-router 配置
    Vue.use(Router)
    export default new Router({
        base: '/test/', // 只需要路径为服务器子目录
        routes: [
            {
              path: '/',
              name: 'login'
            }
        ]
    })
    ```

*  或者使用 [Nginx](#nginx), 欲知如何配置,请继续看下去..
    

### 项目的其他问题
经过上面的一番操作,我相信你已经体验了一遍项目的构建到部署,如果没有完成,我会捂着耳朵,我不听我不听 ~~
下面是项目的其他方面,还瞧瞧不

### 移动端缩放

[移动端缩放问题](https://www.zhihu.com/question/47797373)
#### 为什么要缩放
在移动端页面开发中,要适应多种设备的屏幕尺寸,通过使用CSS3缩放,可以让你直接按照设计图的尺寸去还原.
当然,你也可以使用其他的解决方案,像rem,em等等
#### 原理
通过100vw和100vh的Dom来获取可视区域的宽高
然后把计算与设计稿的缩放比例
把css缩放代码添加到content主内容区
#### 简单实现
```javascript
class ChangeView {
  constructor (x = 1920, y = 1080, selector = '#app') {
    this.x = x
    this.y = y
    this.box = 'body'
    this.selector = selector
    let b = document.createElement('div')
    b.id = 'app-h'
    document.querySelector('body').append(b)
  }

  qSelector (s) {
    let t = document.querySelector(s)
    t.css = this.css
    return t
  }

  css (obj) {
    for (let i in obj) {
      this.style[i] = obj[i]
    }
    return this
  }

  start () {
    let w = window.screen.width
    let h = window.screen.height
    let tempH = document.querySelector('#app-h').clientHeight
    h = tempH
    console.log('--w,h--', w, h, tempH)
    let scale = w / this.x
    // if (scale >= 1) {
    //   return console.warn('不支持放大')
    // }
    this.qSelector(this.box).css({
      width: w + 'px',
      height: h + 'px',
      overflow: 'hidden'
    })

    this.qSelector(this.selector).css({
      'transform-origin': '0 0 0',
      width: this.x + 'px',
      height: h / scale + 'px',
      'transform': `scale(${scale})`
    })
  }
}

export default ChangeView

```

### 添加meta属性

```html
// 页面的关键字和描述，作者，是写给搜索引擎看的，关键字可以有多个用 ‘,’号隔开
<meta name="keywords" content="">
<meta name="description" content="">
<meta name="author" content="">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
// 禁止浏览器从本地计算机的缓存中访问页面内容
<meta http-equiv="Expires" content="-1">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Pragma" content="no-cache">
// 全屏显示网页
<meta name="full-screen" content="yes">
<meta name="x5-fullscreen" content="true">
// 强制坚屏显示
<meta name="browsermode" content="application">
<meta name="x5-orientation" content="portrait">
<meta name="screen-orientation" content="portrait">
// QQ浏览器应用模式
<meta name="x5-page-mode" content="app">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
// ios添加到主屏后的标题
<meta name="apple-mobile-web-app-capable" content="yes">
// ios设置工具栏颜色
<meta name="apple-mobile-web-app-status-bar-style" content="black">
// 禁止ios点击数字拨号
<meta name="format-detection" content="telephone=no">
```

### EsLint规则

不加分号！！！ [JavaScript Standard Style](https://github.com/standard/eslint-config-standard)

### [normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css)

选用部分[normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css)重置样式

### API

通过新建js文件,把所有ajax请求汇总,便于管理
```javascript
// config.js
import axios from 'axios'
// 配置api地址
const baseURL = '/api'
// axios设置
const $ajax = axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: true
})
export default $ajax


// getData.js
import $ajax from './config'
/* 登陆 */
export const login = data => $ajax.post('/admin/login', data)
/* 注销 */
export const sign = data => $ajax.post('/sign', data)

// test.vue

import { sign } from './getData'
sign('url').then()
```

### 本地开发代理请求实现跨域

通过在<key> vue.config.js </key>中进行代理配置,实现跨域

```json 
module.exports = {
devServer: {
    port: 1234,
    proxy: {
      '/api': {
        target: 'https://it.test.top',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```
经过上述配置过后
```
axios.post('/api/goInfo').then()
// 等价下面的代码
axios.post('https://it.test.top/goInfo').then()
```

### Nginx

通过配置Nginx可现线上环境的请求代理和vue-router的history模式支持


* 下载Nginx [官网](http://nginx.org/en/download.html)
* 修改 <key>conf/nginx.conf </key>文件中 server{} 部分配置
```Nginx 
    server {
        listen       1996; # 端口
        server_name  localhost;

        #charset koi8-r;
        #access_log  logs/host.access.log  main;

        root E:/Work/Ele/ele/dist; # 映射目录,npm run build后生成的dist

        location / {
            try_files $uri $uri/ @router; # vue-router history模式配置
            index  index.html;
        }

        location ^~/api/ {
	        proxy_pass   http://192.168.3.207:88/manager/; # 代理配置
	    }

        location @router {
            rewrite ^.*$ /index.html last; # vue-router history模式配置
        }

        #error_page  404              /404.html;
    }
```
* 运行 nginx.exe ,Shift + 鼠标右键,在目录打开shell命令窗口
* 执行 start nginx
* 其他命令
``` 
start nginx # 启动
nginx -s stop # 停止
nginx -s quit # 退出
nginx -s reload # 重启
```

### 下次见咯

你竟然看完了,好吧,你很棒棒哦,下次见咯 ~~