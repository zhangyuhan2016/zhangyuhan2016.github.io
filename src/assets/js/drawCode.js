/**
 * 1. 准备画布背景
 *  0. 清空画布
 *  1. 获取画布大小
 *  2. 获取背景
 * 2. 绘制文字(坐标,css,文字)
 *  0. 获取文字
 *  1. 获取css
 *  2. 获取坐标
 *  3. 绘制
 *  4. 绘制干扰字符
 *  -------
 * 3. 判断用户操作
 *  0. 判断点击数量
 *  1. 判断点击位置
 * 4. 用户操作
 *  0. 添加标识
 *  1. 刷新验证码
 *
 *  防止坐标重复的方法
 *    0. 先提取一个有所有坐标的数组 (X)
 *    1. 随机,迭代与抽取出的坐标比较 (*)
 **/
class DrawCode {
  constructor ({
                 selector = 'yzm-canvas',
                 imgURL = require('../images/17.jpg'),
                 text = ['负荆请罪', '清醉'],
                 prob = '0.85',
                 scope = '72',
                 style = {
                   width: '280px',
                   height: '200px',
                   font: 'oblique small-caps bold 72px Arial',
                   color: 'white'
                 }
               } = {}) {
    this.ctx = document.getElementById(selector).getContext('2d')
    this.imgURL = imgURL
    this.text = [...text[0]]
    this.mix = [...text[1]]
    this.prob = prob
    this.width = parseInt(style.width) * 2
    this.height = parseInt(style.height) * 2
    this.font = style.font
    this.color = style.color
    this.fontData = []
    this.scope = parseInt(scope)
  }

  getRanXY () {
    let x = parseInt(Math.random() * (this.width - this.scope))
    let y = parseInt(Math.random() * (this.height - this.scope))
    let flag = this.fontData.some((value) => {
      let booleanX = value.x <= x && x <= (parseInt(value.x) + this.scope)
      let booleanY = value.y <= y && y <= (parseInt(value.y) + this.scope)
      return booleanX || booleanY
    })
    if (flag) {
      return this.getRanXY()
    } else {
      return {x, y}
    }
  }

  start () {
    let img = new Image()
    img.onload = () => {
      this.ctx.drawImage(img, 0, 0, this.width, this.height)
      this.ctx.font = this.font
      this.ctx.fillStyle = this.color
      this.ctx.textAlign = 'start'
      this.ctx.textBaseline = 'top'
      for (let i in this.text) {
        let tempXY = this.getRanXY()
        this.ctx.fillText(this.text[i], tempXY.x, tempXY.y)
        this.fontData.push(tempXY)
      }
      if (Math.random() > this.prob) {
        let tempXY = this.getRanXY()
        this.ctx.fillText(this.mix[parseInt(Math.random() * this.mix.length)], tempXY.x, tempXY.y)
      }
    }
    img.src = this.imgURL
  }
}

export default DrawCode
