(function(){if(!localStorage.getItem('dev')){var a=/./;a.toString=function(){alert('检测你打开了控制台,请关闭重试');debugger;console.clear();},console.log('%c',a)}})();let Yue=!1;const id=/article\/(.*?).html/.exec(location.pathname)[1];let Like='true'===localStorage.getItem(id);function showText({parent:a='body'}){let b=Array.from(document.querySelector(a).children).map(d=>d.localName),c=new Set(b);c.forEach(d=>{query(d).forEach(function(e){observer.observe(e)})})}function query(a){return Array.from(document.querySelectorAll(a))}let observer=new IntersectionObserver(a=>{a.forEach(function(b){if(0===b.intersectionRatio)return!1;let c=b.target;c.className+=' show',observer.unobserve(c)})});showText({parent:'body'});let start=document.querySelector('html').scrollTop;function getScrollTop(){let a=0,b=0,c=0;return document.body&&(b=document.body.scrollTop),document.documentElement&&(c=document.documentElement.scrollTop),a=0<b-c?b:c,a}function getScrollHeight(){let a=0,b=0,c=0;return document.body&&(b=document.body.scrollHeight),document.documentElement&&(c=document.documentElement.scrollHeight),a=0<b-c?b:c,a}function getWindowHeight(){let a=0;return a='CSS1Compat'===document.compatMode?document.documentElement.clientHeight:document.body.clientHeight,a}window.onscroll=()=>{let a=start;start=document.querySelector('html').scrollTop,document.querySelector('.bottom-box').style.bottom=0>start-a?'0':'-60px';let b=(getScrollTop()+getWindowHeight())/getScrollHeight();0.9<b&&!1==Yue&&(Yue=!0,!localStorage.getItem(id)&&upData())};let stop={};document.querySelector('#like').onclick=()=>{let a=querySelector('#like'),b=a.className.split(' ').includes('icon-xihuan'),c='icon-xihuan'+(b?'1':'');a.className='iconfont '+c;let d=+a.attr('data-like');d+=b?1:-1,localStorage.setItem(id,b),a.attr('data-like',d),clearTimeout(stop.like),stop.like=setTimeout(()=>{(!b&&Like||!Like&&b)&&(Like=!Like,upData())},2e3)};const cos=new COS({SecretId:'AKIDqhebO2Sq11qUyJPbMzUqDSittiMpaII7',SecretKey:'oRvIYegsO1hKo8JLOHzWs33tadcUFrS0'}),Bucket='blog-1256874758',Region='ap-chengdu';function upData(){getData(id,a=>{let b=a;localStorage.getItem(id)?querySelector('#like').className.split(' ').includes('icon-xihuan')?b[0]-=1:(localStorage.setItem(id,!0),b[0]+=1):(querySelector('#like').className.split(' ').includes('icon-xihuan')||(localStorage.setItem(id,!0),b[0]+=1),b[1]+=1,Yue&&(b[2]+=1)),setData(id,JSON.stringify(b))})}window.onload=()=>{'true'===localStorage.getItem(id)&&(querySelector('#like').className='iconfont icon-xihuan1'),getData(id)};function getData(a,b=null){cos.getObject({Bucket,Region,Key:a+'.jpg'},(c,d)=>{if(c)return setData(id,JSON.stringify([0,0,0]));let e=JSON.parse(d.Body);Array.isArray(e)&&('function'==typeof b?b(e):null,querySelector('#like').attr('data-like',e[0]),querySelector('#kanzi').attr('data-like',e[1]),querySelector('#yuedu').attr('data-like',e[2]))})}function setData(a,b){cos.putObject({Bucket,Region,Key:a+'.jpg',Body:b},(c,d)=>{console.log(c||d)})}function querySelector(a){let b=document.querySelector(a);return b.attr=attr,b}function attr(a,b){return b?this.setAttribute(a,b):this.getAttribute(a)}