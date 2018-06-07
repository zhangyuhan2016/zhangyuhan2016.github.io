``` essay-info
title: mock-note
tags: mock
info: 如果你还不知道如何在vue项目中使用mock,那太好了,我相信再过五分钟你就会了.你可能会疑惑,五分钟得时间真的够么?那么下面跟帅气得小哥哥走近 mock.js 咯 ~~~
```
![mock](../static/images/mock/mock.png)

### 安装 mock.js
如果你看了标题以为我会告诉你怎么安装,那么你想错了..
```
npm install mockjs --save-dev
```
- [文档](https://github.com/nuysoft/Mock/wiki/Getting-Started)

### 使用

下面是使用教程,全是图哦,幸福感满满有没有

![配置](../static/images/mock/mock-mock.png)
```javascript
// xx/mock.js
import Mock from 'mockjs'
const base = 'http://localhost:8080'
Mock.mock(base + '/mock', {
  'name': '@name'
})
Mock.mock(base + '/test', 'post', {
  'age|1-100': 100
})
export default Mock
```
细心得你会发现代码和图上不一样,为啥子呢,这个你需要了解一下两者得区别 [require，import区别？](https://www.zhihu.com/question/56820346)
![引入](../static/images/mock/mock-main.png)
```javascript
// main.js
/* mock */
import './xx/mock'
```
![配置axios](../static/images/mock/mock-config.jpg)
**这里一定要注意导出哦**
```javascript
 // config.js
 import axios from 'axios'
 // 配置api地址
 const baseURL = '/api'
 // axios设置
 const $ajax = axios.create({
   baseURL,
   timeout: 5000,
   withCredentials: true  // 跨域cookie
 })
 export default $ajax
```
![配置api](../static/images/mock/mock-getData.png)
```javascript
// getData.js
import $ajax from './config'
/* 测试 */
export const getName = data => $ajax.get('/mock', data)
```
![使用](../static/images/mock/mock-use.png)

### 总结

我相信聪明得你一定五分钟都没有用到就 Get√ 
拜拜,下期再见