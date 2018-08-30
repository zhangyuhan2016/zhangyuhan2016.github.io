/**
 * @file userSpeak
 * @author zhangyuhan2016 <hi_zhangyuhan@163.com>
 */
class UserSpeak {
  constructor ({selector = '#userSpeak', sid = location.pathname.split('/').pop().slice(0, -5), num = 5, sync = false, config = {}}) {
    this.selecotr = selector
    this.num = num
    this.sync = sync
    this.sid = sid
    this.config = config
    this.addLike = null
    this.addSpeak = null
    this.addNote = null
    this.init()
  }

  /*
   * 初始化
   * query 当前评论数据
   * */
  init () {
    this.error()
    wilddog.initializeApp(this.config)
    let query = wilddog.sync().ref(this.sid)
    this.addLike = (k) => query.child(k + '/h').transaction(c => (c || 0) + 1)
    this.addSpeak = (o) => {
      query.push(o)
    }

    let data = null
    /* 时间倒序 */
    this.data(query).reverse(s => {
      data = this.toArr(s.val()).sort((a, b) => b.t - a.t)
      this.render(data)
    })
    /* 赞数排序 */
    // this.data(query).like(s => {
    //   data = this.toArr(s.val()).sort((a, b) => b.h - a.h)
    //   this.render(data)
    // })
  }

  /* 数据查询 */
  data (q) {
    let query = {}
    query.reverse = (c) => q.limitToLast(this.num)[this.sync ? 'on' : 'once']('value', c)
    query.like = c => q.orderByChild('h').limitToLast(this.num)[this.sync ? 'on' : 'once']('value', c)
    return query
  }
  /* 评论 */
  speak (t,i) {
    let sTime = 60
    let sIn = null
    return (e) => {
      if(t.value.trim().length === 0) {
        return t.focus()
      }
      if(sTime !== 60) {return false}
      let o = {
        n: (i.value || '匿名').substr(0,10),
        s: t.value.substr(0,150),
        t: new Date().getTime()
      }
      this.addSpeak(o)
      t.value = ''
      o.t = this.toTime(o.t)
      this.addNote(o)
      sIn = setInterval(() => {
        e.className = 'ac'
        e.innerText = sTime--+' s'
        if(sTime === 1) {
          clearInterval(sIn)
          e.innerText = '评价'
          e.className = ''
          sTime = 60
        }
      },1000)
    }
  }

  /* 点赞 */
  upLike (k) {
    return (t) => {
      this.addLike(k)
      t.classList.add('ac')
      t.innerText = parseInt(t.innerText) + 1
    }
  }

  /* 渲染 */
  render (d) {
    document.querySelector(this.selecotr).appendChild(this.createDom({
      classList: ['title'],
      text: '评论'
    }))
    let noteBox = this.createDom()
    d.forEach(v => {
      let o = v
      o.t = this.toTime(v.t)
      o.event = {
        'click': this.upLike(v.k)
      }
      noteBox.appendChild(this.createNote(o))
    })
    this.addNote = o => noteBox.insertBefore(this.createNote(o),noteBox.firstChild)
    document.querySelector(this.selecotr).appendChild(noteBox)
    let footer = this.createDom({classList: ['speak']})
    let text = this.createDom({
      tag: 'textarea',
      event: {
        'input': (e) => e.value = e.value.substr(0,150)
      },
      callback: (e) => {
        e.setAttribute('placeholder','写下你的想法,让更多人知道...')
      }
    })
    let inputBox = this.createDom({classList: ['name']})
    let inp = this.createDom({
      tag: 'input',
      callback: (e) => {
        e.setAttribute('placeholder','匿名')
      }
    })
    inputBox.appendChild(inp)
    inputBox.appendChild(this.createDom({
      tag: 'button',
      text: '评论',
      event: {
        'click': this.speak(text,inp)
      }
    }))
    footer.appendChild(text)
    footer.appendChild(inputBox)
    document.querySelector(this.selecotr).appendChild(footer)
  }

  /* 创建Note */
  createNote ({n, s, t, h, event = {}}) {
    let note = this.createDom({
      classList: ['note']
    })
    let headImg = this.createDom({
      classList: ['head-img'],
      text: Array.from(n)[0]
    })
    let conBox = this.createDom({
      classList: ['con-box']
    })
    let strong = this.createDom({
      tag: 'strong',
      text: s
    })
    let info = this.createDom({
      classList: ['info']
    })
    let button = this.createDom({
      tag: 'button',
      text: h || 0,
      event
    })
    let em = this.createDom({
      tag: 'em',
      text: n
    })
    let time = this.createDom({
      tag: 'time',
      text: t
    })
    /* 组装 */
    info.appendChild(button)
    info.appendChild(em)
    info.appendChild(time)
    conBox.appendChild(strong)
    conBox.appendChild(info)
    note.appendChild(headImg)
    note.appendChild(conBox)
    return note
  }

  /* 创建Dom */
  createDom ({tag = 'div', classList = [], event = {}, text = '', callback} = {}) {
    let t = document.createElement(tag)
    t.className = classList.join(' ')
    t.innerText = text
    for (let i in event) {
      t.addEventListener(i, function () {
        event[i](this)
      })
    }
    typeof callback === 'function' ? callback(t) : null
    return t
  }

  /* 转化数据格式 */
  toArr (o) {
    let arr = []
    for (let i in o) {
      let obj = o[i]
      obj.k = i
      arr.push(obj)
    }
    return arr
  }

  /* 时间转化 */
  toTime (date) {
    let now = new Date().getTime()
    let old = (now - date) / 1000
    if (old < 10) {return '刚刚'}
    let f = 60
    let h = f * 60
    let d = h * 24
    let w = d * 7
    let m = w * 4
    let y = m * 12
    let sub = '小时'
    let nowI = 0
    let status = [old / y, old / m, old / w, old / d, old / h, old / f, old]
    status.some((v, i) => {
      nowI = i
      return v >= 1
    })
    switch (nowI) {
      case 0:
        sub = '年'
        break
      case 1:
        sub = '月'
        break
      case 2:
        sub = '周'
        break
      case 3:
        sub = '天'
        break
      case 4:
        sub = '小时'
        break
      case 5:
        sub = '分钟'
        break
      case 6:
        sub = '秒'
        break
    }
    return Math.floor(status[nowI]) + sub + '前'
  }

  /* 异常 */
  error() {
    window.onerror = (errorMessage, scriptURI, lineNo, columnNo, error) => {
      if (scriptURI === 'https://cdn.wilddog.com/sdk/js/2.5.8/wilddog.js') {
        document.querySelector(this.selecotr).innerHTML = `<div style="text-align: center;padding: 20px 0;">${error}</div>`
      }
      // console.log('errorMessage: ' + errorMessage); // 异常信息
      // console.log('scriptURI: ' + scriptURI); // 异常文件路径
      // console.log('lineNo: ' + lineNo); // 异常行号
      // console.log('columnNo: ' + columnNo); // 异常列号
      // console.log('error: ' + error); // 异常堆栈信息
    };
  }
}
 