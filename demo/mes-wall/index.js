// 数据存放点
let mesArr=[];
let strArr=[];
// 配置Wilddog
let config = {
  authDomain: "danmu.wilddog.com",
  syncURL: "https://demo-tanmu.wilddogio.com"};
wilddog.initializeApp(config);
let ref = wilddog.sync().ref();
// 绑定 'child_added' 事件，当 message 节点下有子节点新增时，就会触发回调，回调的 `snapshot` 对象包含了新增的数据
ref.child('messages').on('child_added', function(snapshot) {
  mesArr.push(snapshot.val());
  mess(snapshot.val().title,snapshot.val().content);
  creAre(mesArr);
});
ref.child('message').on('child_added', function(snapshot) {
  strArr.push(snapshot.val());
});
// 随机坐标
let coordinate=(x=1000,y=500)=>Math.floor(Math.random()*x)+","+Math.floor(Math.random()*y);
// 生成不重复的坐标
let ranCoord=(arr)=>{
  let temp=coordinate();
  if(arr.includes(temp)){
    ranCoord(arr);
  }else{
    return temp;
  }
}
// 画圆
function drawQ(x,y){
  var c=document.getElementById("myCanvas");
  var cxt=c.getContext("2d");
  cxt.fillStyle="#FF0000";
  cxt.beginPath();
  cxt.arc(parseInt(x),parseInt(y),15,0,Math.PI*2,true);
  cxt.closePath();
  cxt.fill();
}
// 判断是否点到圆
function Panduan(x,y,json){
  let tempXY=x+","+y;
  let t=json.find(function(e){
    let arr=e.coord.split(',');
    return b2(arr[0],arr[1],15,x,y)
  });
  // 返回查到的数据/没有为un
  return t;
}
// 计算点击的范围内是否有圆
function b2(x,y,r,px,py){
  let maxX=parseInt(x)+parseInt(r),
    maxY=parseInt(y)+parseInt(r),
    minX=parseInt(x)-parseInt(r),
    minY=parseInt(y)-parseInt(r);
  if(minX<=px&&px<=maxX&&minY<=py&&py<=maxY){
    return true;
  }else{
    return false;
  }
}
// 利用Bootstrap的Pop提示框显示文本
function pop(x,y,tit="坐标",str="信息",el="a[tabindex=0]"){
  $(el).css({
    "top":parseInt(y-7.5)+"px",
    "left":parseInt(x-7.5)+"px",
  }).attr({
    "data-original-title":tit,
    "title":tit,
    "data-content":str
  }).popover('show');
}
// 根据数据生成圆
function creAre(json){
  for(let b of json){
    let arr=b.coord.split(',');
    drawQ(arr[0],arr[1]);
  }
}
// 鼠标点击获取坐标
$('#myCanvas').on('click',function(e){
  let x=e.offsetX;
  let y=e.offsetY;
  // 进行判断
  let p=Panduan(x,y,mesArr);
  // 没点到时
  if(p===undefined){
    $("a[tabindex=0]").css({
      "top":parseInt(y-7.5)+"px",
      "left":parseInt(x-7.5)+"px",
    }).popover('hide')
  }else{
    // 点到时pop弹出
    let tit=p.title;
    let con=p.content;
    pop(x,y,tit,con);
  };
})
// 提交数据
function upData(){
  // 获取输入框的数据
  let title=$('#name').val()||"佚名";
  let text = $("#tst").val()||strArr[Math.floor(Math.random()*strArr.length)];
  // 清空文本框
  $('#name').val("");
  $("#tst").val("");
  // 将数据写到云端 messages 节点下，child 用来定位子节点
  let postsRef = ref.child("messages");
  postsRef.push({
    "coord":ranCoord(["100,100"]),
    "title": title,
    "content":text
  });
}
$('#up').on('click',function(){
  upData();
})
// 通知
function mess(tit,con){
  Notification.requestPermission(function (perm) {
    if (perm === "granted") {
      let notification = new Notification(tit+"  发布了新留言哦~:", {
        dir: "auto",
        lang: "hi",
        tag: "msg" + tit,
        body: con,
        icon: "https://avatars3.githubusercontent.com/u/18086072?v=3&s=40",

      })
    }else{
      console.log("浏览器已禁止提示")
    }
  })
}
// 回车事件
$(document).ready(function(){
  let upNum=5;
  $("body").keydown(function(event){
    if(event.keyCode == "13" ){
      if(upNum){
        upNum --;
        upData()
      }
    }
  });
});