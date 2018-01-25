/***
 * 背景动画块
 * 可配置大小范围，块的形状
 * */
class UpCard {
  constructor ({x = 20, size = 80, polygon = 0.1} = {}) {
    this.cardNumber = x // 块的数量
    this.cardCss = [] // 块的样式集
    this.size = size // 最大宽高
    this.polygon = polygon // 出现多边形的概率
  }

  /* 初始化 */
  created () {
    let i = 0
    while (i < this.cardNumber) {
      this.cardCss.splice(i, 1, this.randomCss())
      i++
    }
    this.setTime(0)
  }

  /* 定时更新 */
  setTime (n) {
    setTimeout(() => {
      this.createCss()
      return this.setTime(Math.random() * 10000 + 4000)
    }, n)
  }

  /* 更新CSS */
  createCss () {
    for (let i = 0; i < Math.random() * this.cardNumber; i++) {
      this.cardCss.splice(Math.random() * this.cardNumber, 1, this.randomCss())
    }
  }

  /* 随机定义li的颜色,大小,距离,动画 */
  randomCss () {
    /* 随机数 */
    let radNum = (n) => Math.floor(Math.random() * n + 1)
    let opacity = Math.random() + 0.25
    let width = radNum(this.size) + 'px'
    let height = width
    let left = radNum(90) + '%'
    let anTime = radNum(30) + 3 + 's'
    let boxRa = radNum(50) + 3 + '%'
    let duration = radNum(5) + 1 + 's'
    let delay = radNum(3) + 's'
    let rgbBg = `rgba(${radNum(255)}, ${radNum(255)}, ${radNum(255)}, ${Math.random() * 0.4 + 0.1})`
    let an = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()} )`
    let boo = ''
    let booBg = ''
    // 其他形状
    if (Math.random() < this.polygon) {
      rgbBg = ''
      boo = `${radNum(50) + 3 + 'px'} solid transparent`
      booBg = `
                ${Math.random() * 10 > 6 ? `rgba(${radNum(255)}, ${radNum(255)}, ${radNum(255)}, ${Math.random() * 0.3 + 0.1})` : 'transparent'}
                ${Math.random() * 10 > 8 ? `rgba(${radNum(255)}, ${radNum(255)}, ${radNum(255)}, ${Math.random() * 0.3 + 0.1})` : 'transparent'}
                ${Math.random() * 10 > 6 ? `rgba(${radNum(255)}, ${radNum(255)}, ${radNum(255)}, ${Math.random() * 0.3 + 0.1})` : 'transparent'}
                ${Math.random() * 10 > 1 ? `rgba(${radNum(255)}, ${radNum(255)}, ${radNum(255)}, ${Math.random() * 0.3 + 0.1})` : 'transparent'}
          `
    }
    return {
      'width': width,
      'height': height,
      'left': left,
      'opacity': opacity,
      'animation-duration': anTime,
      'border-radius': boxRa,
      'transition-duration': duration,
      'background-color': rgbBg,
      'animation-delay': delay,
      'animation-timing-function': an,
      'border': boo,
      'border-color': booBg
    }
  }
}

export { UpCard }
/* 块动画背景 */
/** .wrapper {
  z-index: -1;
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
  opacity: 0.8;
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
.card {
    position: absolute;
    transition: all 0.6s;
    display: block;
    list-style: none;
    bottom: -200px;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0, 0.23, 0.94, 0.83);
    animation-name: lilili;
    animation-fill-mode: both;
  &:hover {
      animation-play-state: paused;
      transform: scale(1.2);
    }
  }
@keyframes lilili {
    to {
      bottom: 100%;
      transform: rotate(100deg);
    }
  }
}  **/
