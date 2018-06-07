/* 解析md文件 */
const Marked = require('marked')
const highlight = require('highlight.js')
const renderer = new Marked.Renderer()
let tempStr = null
/* 自定义抽取信息 */
renderer.code = function (text, level) {
  let template = `<pre><code class="${level ? level : 'javascript'} hljs">${highlight.highlightAuto(text).value}</code></pre>`
  if (level === 'essay-info') {
    let test = {}
    text.split('\n').forEach(v => {
      let temp = v.split(':')
      test[temp[0]] = temp[1].trim()
    })
    tempStr = test
    template = ''
  }
  return template
}
/* md 转化 */
module.exports = function ex(md) {
  return {
    html: Marked(md, {renderer: renderer}),
    info: tempStr
  }
}
