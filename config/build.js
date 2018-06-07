const fs = require('fs')
const path = require('path')
const config = require('./config')
const ex = require('./md2Html')

/* 补全路径 */
const [mdDir, inDir, outDir] = [config.mdDir, config.inDir, config.outDir].map(v => path.resolve(__dirname, '../' + v))

/* 获取md转换为html */
function M2H () {
  // 获取目录下md
  readDir(mdDir).then(res => {
    delDir(outDir).then(result => {
      res.forEach(v => {
        // md转化为H
        let url = path.join(mdDir, v)
        rexHtml(url).then(data => {
          let newFile =  path.join(outDir, path.basename(v,'.md') + '.html')
          fs.writeFile(newFile, data, function (err) {
            if (err) throw err
            console.log('--ok--', newFile)
          })
        })
      })
    }).catch(err => {throw  err })
  }).catch(err => { throw err })
}

/* 获取目录下文件名 */
async function readDir (dir) {
  let file = await fs.readdirSync(dir)
  return file
}

/* 清空文件夹 */
async function delDir (dir) {
  await deleteall(dir)
  await fs.mkdirSync(dir)
  return true
}

/* 删除文章目录及文件 */
function deleteall (path) {
  let files = []
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)
    files.forEach(function (file, index) {
      let curPath = path + '/' + file
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteall(curPath)
      } else { // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

/* 正则替换HTML */
async function rexHtml (md) {
  /* 获取时间 */
  let time = await fs.statSync(md)
  /* 获取内容 */
  let content = await ex(fs.readFileSync(md, 'utf8'))
  /* 获取骨架 */
  let layout = await fs.readFileSync(path.join(inDir, 'layout/essay.html'), 'utf8')
  /* 规则替换 */
  let span = `<span>${format(fix(time.birthtime))}</span><span>${format(fix(time.ctime))}</span>`
  let meta = `<title>${content.info.title}</title><meta name="keywords"content="${content.info.tags}"><meta name="description"content="${content.info.info}">`
  let title = `<div class="essay-title">
        <div class="title" data-time="${content.info.date}" data-tags="${content.info.tags}">${content.info.title}</div>
        <span class="title-line"></span>
        <div class="info">${content.info.info}</div>
    </div>`
  let html = layout
  html = html.replace('${time}', span).replace('${meta}', meta).replace('${essay}', title + content.html)
  return html
}

/* 时间格式化 */
function fix (date) {
  if (typeof date === 'object') {
    let fixDate = (n) => n < 10 ? '0' + n : n
    return {
      'Y': date.getFullYear(), // 年
      'M': fixDate(date.getMonth() + 1), //月
      'D': fixDate(date.getDate()), //日
      'h': fixDate(date.getHours()), //时
      'm': fixDate(date.getMinutes()), //分
      's': fixDate(date.getSeconds()), //秒
      'S': date.getMilliseconds(), //毫秒,
      'week': date.getDay() // 周几
    }
  }
  else {
    return fix(new Date(date))
  }
}

function format (date, rex = 'Y-M-D h:m:s') {
  let temp = ''
  let time = date
  let ttt = [...rex]
  ttt.forEach(v => {
    if (Object.keys(time).includes(v)) {
      temp += time[v]
    } else {
      temp += v
    }
  })
  return temp
}

M2H()