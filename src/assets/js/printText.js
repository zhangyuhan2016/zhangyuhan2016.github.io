/**
 * Created by zhangyuhan on 2017/01/10.
 */
'use strict'

class aText {
  constructor () {
    this.i = 0
    this.index = 0
    this.data = []
    this.Selector = 'Selector'
    this.temp = '一个初始值'
  }

  add () {
    let str = this.temp
    if (this.i < str.length) {
      let a = str.substring(0, ++this.i)
      document.querySelector(this.Selector).innerText = a
    } else {
      this.i = 0
      return setTimeout(() => {this.del()}, 2000)
    }
    setTimeout(() => {this.add()}, 200)
  }

  del () {
    let str = document.querySelector(this.Selector).innerText
    if (str.length) {
      document.querySelector(this.Selector).innerText = str.substring(0, str.length - 1)
      setTimeout(() => {this.del()}, 200)
    } else {
      setTimeout(() => {this.main()}, 1000)
    }
  }

  main () {
    if (this.index < this.data.length) {
      this.temp = this.data[this.index++]
      this.add()
    } else {
      this.index = 0
      return this.main()
    }
  }

  start (selector, data) {
    this.Selector = selector
    this.data = data
    this.main()
  }
}

export { aText }
