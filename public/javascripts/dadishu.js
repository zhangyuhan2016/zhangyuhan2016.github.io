/**
 * Created by zhangyuhan on 2016/11/27.
 */
/*调节音量*/
document.getElementById('bgAudio').volume = 0.02
document.getElementById('dazhong').volume = 0.02

//随机出现地鼠
function show () {
  //得到0~15之间的任意一个随机数
  var index = Math.random() * 16
  index = Math.floor(index)

  //添加up类名让地鼠出现，添加down类名让地鼠隐藏
  $('img').eq(index).addClass('up').removeClass('down')

  //2.5s后隐藏地鼠
  setTimeout(function () {
    $('img').eq(index).addClass('down').removeClass('up')
  }, 2500)

}

// show();

setInterval(function () {
  for (var i = 0; i < 6; i++) {
    show()
  }
}, 2000)

//按下鼠标时，改变鼠标的样式
$('body').mousedown(function () {
  //$(this)表示是当前触发事件的对象，在这里指的就是$('body')
  $(this).css('cursor', 'url(../public/image/dishu/cursor-down.png),auto')

})
//松开鼠标时，改变图片
$('body').mouseup(function () {
  $(this).css('cursor', 'url(../public/image/dishu/cursor.png),auto')

})

//记录分数
var score = 0
//点击事件，打中地鼠
$('img').click(function () {

  //添加打中的声音
  $('#dazhong').attr('src', '../public/audio/dazhong.wav').get(0).play()
  //打中之后，立马让地鼠消失，添加down类名
  $(this).addClass('down').removeClass('up')

  //每打中一只地鼠加10分
  score += 10

  $('#score').text('得分：' + score)

  if (score > 100) {

    alert('恭喜过关')

  }

})