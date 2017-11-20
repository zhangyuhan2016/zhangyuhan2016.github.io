/**
 * Created by zhangyuhan on 2017/01/10.
 */

var aText = {
  i: 0,
  index: 0,
  data: [],
  Selector: 'Selector',
  temp: '一个初始值',
  add: function () {
    let str = aText.temp
    if (aText.i < str.length) {
      let a = str.substring(0, ++aText.i)
      $(this.Selector).text(a)
    } else {
      aText.i = 0
      return setTimeout('aText.del()', 2000)
    }
    setTimeout('aText.add()', 200)
  },
  del: function () {
    let str = $(this.Selector).text()
    if (str.length) {
      $(this.Selector).text(str.substring(0, str.length - 1))
      setTimeout('aText.del()', 200)
    }
    else {
      setTimeout('aText.main()', 1000)
    }
  },
  main: function () {
    if (aText.index < aText.data.length) {
      aText.temp = aText.data[aText.index++]
      aText.add()
    } else {
      aText.index = 0
      aText.main()
    }
  },
  start: function (selector, data) {
    this.Selector = selector
    this.data = data
    this.main()
  }
}



