``` essay-info
title: new-blog
tags: blog node md markdown marked highlight
info: 之前是通过hexo、next搭建的博客在 gitee pages,最近突然想自己实现一下把md转化为html这个操作,也方便自己修改样式和添加demo,所以有了这一版的new blog,如果你细心看过，会发现这个仓库已经有了三个分支，第一个分支是初学时做的cv、第二个分支是 vue + parcel、现在是第几个呢,你猜咯 ~~
```

### 介绍

这个页面是通过 marked + highlight 转化的 HTML片段加上 Head等实现的

前期本来是用的markdown-it做的转化,但是自定义解析真的很磨人,呀呀呀

本来还上了UglifyJS,但是一转念发现自己整那么多干啥,专心写md就好了,遂放弃

在界面UI的实现上抄袭了 [ISUX](https://isux.tencent.com/articles/)、

参考了其他网站的一些效果

使用的腾讯云的对象存储,密钥就在代码里,求大佬放过,不要搞事情...

### 文字显示效果的实现

本来是准备手动计算元素的top值和scroll值比较然后palapala...
但是突然脑子里闪了一下,没错, 就是它 ~ [IntersectionObserver](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)

### 计划

后期要不要做markdown实时预览还是比较纠结的,因为我本人没有这个需求

写的时候本来准备把点赞和阅读数量生成图片存储在腾讯云,然后看文档发现可以直接传字符串...

关于图片像素藏代码,看这里的大佬怎么说:

- [像素化你的代码](https://imququ.com/post/code2png-encoder.html)
- [把JS,CSS任意文本文件加密成一张图片](http://www.zhangxinxu.com/wordpress/2017/12/js-css-encrypt-to-image/)
