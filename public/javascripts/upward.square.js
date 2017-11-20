/**
 * Created by zhangyuhan on 2016/11/10.
 */

function reday (id) {
  /*随机数*/
  let radNum = (n) => Math.floor(Math.random() * n + 1)
  /*生成li的个数*/
  let temp = radNum(10) + 5
  for (let x = 0; x < temp; x++) {
    addLi(id, randomCss())
  }

  /*add Li*/
  function addLi (id, obj) {
    $(id).append($('<li></li>').css(obj))
  }

  /*随机定义li的颜色,大小,距离,动画*/
  function randomCss () {
    let opacity = Math.random() + 0.25,
      width = radNum(200),
      height = width,
      left = radNum(90) + '%',
      deTime = radNum(5),
      anTime = radNum(30) + 3
    return {width, height, left, opacity, 'animation-duration': anTime + 's', 'animation-delay': deTime + 's'}
  }
}

$(reday('.wrapper'))
