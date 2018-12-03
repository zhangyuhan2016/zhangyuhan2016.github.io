## md-blog
把md文件输出为HTML

### 介绍

使用 node 通过 marked、highlight、RegExp 生成 HTML

基于 腾讯云的免费对象存储实现点赞功能

[更多过程](https://zhangyuhan2016.github.io/article/new-blog.html)

### news

- [face.js 人脸识别](https://zhangyuhan2016.github.io/face/index.html)

### 计划
- [ ] markdown实时预览
- [ ] index页面自动生成
- [ ] 留言功能
- [ ] 解耦代码
- [ ] 文章筛选
- [x] 点赞、统计访问
- [x] md2Html (marked)
- [x] 高亮代码块 (highlight.js)
- [x] Style (isux)


### 项目结构
```
-- dist // 生成
    -- article
    -- static
        -- css
        -- images
        -- js
    -- js
    -- css
-- static // 静态资源
    -- css
    -- images
    -- js              // 腾讯云SDK等
    -- layout          // 页面骨架
-- config // 配置项
    -- config.js       // 路径配置项
    -- md2Html.js        // marked配置
    -- build.js          // 打包配置
-- src
    -- note            // md文件
    -- js              // 需要处理的js
```


