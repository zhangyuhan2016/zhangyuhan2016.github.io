## 野狗云版 [扫码登陆](https://zhangyuhan2016.github.io/demo/qrcode/index.html)

     仅在chrome测试,其他浏览器未兼容
     
     电脑端输入用户 Name&password 生成二维码 然后监听数据
     
     确认扫码页面 手动确认用户身份 更新数据
     
 
#####  2017/8/17  v 0.1.0
    基本完成demo效果
    
    后续等什么时候认证开发者了,加入微信登录,获取用户信息显示
    
### **小结**
    
    在实现的过程中尝试了很多东西，一开始构思的时候加入了很多后续并没有使用的功能。
    
    在使用野狗云存储的时候,不知道怎么指定节点新增数据,看API文档无果,询问技术支持得到方法。
    
        ref = sync('users/chen');
        ref.set({name:'merry chen'});
           
        ref = sync('users');
        ref.update({'chen':{name:'merry chen'}});
    
    有时候想走个捷径,就掉坑了。
    
    本来是想搭建Node服务器用socket来做,调教了一些时间没收拾好,就换了种方法。
    
    写这些可比兼容IE8有趣多了,科科
    

### Q&A
     Q: tab切换至password时会触发keyup事件,这导致了password输入框提前检测,加上了err-style
     A: 解决方法目前想到,加判断如果触发时为空不检测,可是不想改.. 
