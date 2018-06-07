function notChrome () {
  if (navigator.userAgent.toLowerCase().match(/chrome\/([\d.]+)/) === null) {
    let d = document.createElement('div')
    d.className = 'md-chrome'
    d.innerText = '如果样式出现错乱,请使用Chrome浏览器'
    document.querySelector('body').appendChild(d)
  }
}
notChrome()