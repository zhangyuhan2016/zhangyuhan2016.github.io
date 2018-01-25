<style lang='scss'>
    .mine {
        user-select: none;
        box-sizing: border-box;
        background-color: #aaa;
        min-height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        $box-size: 30px;
        $gap: 8px;
        $number: 9;
        .game-box {
            cursor: cell;
            width: $number * ($box-size + $gap);
            height: $number * ($box-size + $gap);
            border: $gap solid #341a1a;
            background-color: #808080;
            display: grid;
            padding: $gap;
            grid-gap: $gap;
            grid-template-columns: repeat($number, 1fr);
            grid-template-rows: repeat($number, 1fr);
            grid-auto-flow: row;
            &.two{
                $number: 18;
                width: $number * ($box-size + $gap);
                height: $number * ($box-size + $gap);
                grid-template-columns: repeat($number, 1fr);
                grid-template-rows: repeat($number, 1fr);
            }
            &.three{
                $number: 32;
                width: $number * ($box-size + $gap);
                height: $number * ($box-size + $gap);
                grid-template-columns: repeat($number, 1fr);
                grid-template-rows: repeat($number, 1fr);
            }
            .grid {
                width: $box-size;
                height: $box-size;
                background-color: #c0c0c0;
                box-sizing: border-box;
                box-shadow: 0 0 10px 2px #7f7e7e;
                position: relative;
                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    background-color: #c0c0c0;
                    width: $box-size;
                    height: $box-size;
                    top: 0;
                    left: 0;
                }
                &.dian {
                    background-color: #f9f9f9;
                    &::after {
                        content: none;
                    }
                }
                .number {
                    display: block;
                    line-height: $box-size;
                    text-align: center;
                    font-size: 24px;
                    font-weight: bold;
                    color: #00f;
                    &.two {
                        color: #008000;
                    }
                    &.three {
                        color: #ff0000;
                    }
                    &.four {
                        color: #000080;
                    }

                }
                &.tip {
                    background-size: $box-size * 2;
                    background-repeat: no-repeat;
                    background-position: -80px -40px;

                    &.l {
                        background-position-x: -$box-size;
                        background-position-y: -$box-size;
                    }
                    &.w {
                        background-position-x: 0;
                        background-position-y: -$box-size;
                    }
                    &.q {
                        background-position-x: 0;
                        background-position-y: 0;
                        &::after {
                            content: none;
                        }
                    }
                }
            }
        }
        .game-number {
            margin: 20px 0;
            $height: 30px;
            display: flex;
            flex-direction: row;
            align-items: center;
            .qi {
                display: block;
                min-width: 3 * $height;
                height: 1.5 * $height;
                line-height: 1.5 * $height;
                font-size: 30px;
                border: 1px solid black;
                text-align: center;
                margin: 0 20px;
            }
            .time {
                @extend .qi;
            }
            button {
                border-radius: 50%;
                width: 3rem;
                height: 3rem;
                outline: none;
                border: none;
                box-shadow: 0 0 10px 3px #756f6f;
                background: yellow;
                color: #161616;
            }
            select {
                height: 3rem;
                width: 5rem;
                font-size: 18px;
                text-align: center;
                padding-left: 1rem;

            }
        }
    }
</style>
<template>
    <div class="mine">
        <div class="game-number">
            <span class="qi">{{qNum}}</span>
            <button @click="createGame()">重来</button>
            <span class="time">{{gameTime}}{{gameWin()}}</span>
            <select v-model="lv" @change="changeLv">
                <option :value="o.value" v-for="o in oArr" :key="o.value">{{o.name}}</option>
            </select>
        </div>
        <div class="game-box" :class="{two: lv===1,three: lv===2}">
            <div class="grid background tip" v-for="(g,index) of gameGe" :key="g.id" :class="{l:g.l,dian:g.d,q:g.b}"
                 v-on:mousedown="test(index,$event)">
                <span v-if="g.s && !g.b" class="number" :class="{two:g.s === 2,three: g.s === 3,four: g.s === 4}">{{g.s}}</span>
            </div>
        </div>
    </div>
</template>
<script>
  /*阻止右键事件冒泡*/
  document.oncontextmenu = function () {
    return false
  }
  export default {
    name: 'mine',
    data: function () {
      return {
        gNum: 9 * 9,
        lNum: 10,
        qNum: 10,
        lv: 0,
        oArr: [
          {name: '初级', value: 0},
          {name: '中级', value: 1},
          {name: '高级', value: 2}
        ],
        gameGe: [],
        tableClass: {
          width: '0px',
        },
        show: false,
        gameTime: 0,
        t: '',
        tan: false,
        bang: [
          {name: 'Win', time: '12s'},
        ],
        te: false
      }
    },
    created: function () {}, // 创建时
    beforeMount: function () {}, // 挂载之前
    mounted: function () {
      this.createGame()
    }, // 挂载之后
    beforeUpdate: function () {}, // 数据更新时调用,在渲染之前
    updated: function () {}, // 数据更新后,渲染后调用(禁止)
    beforeDestroy: function () {}, // 实例销毁前调用,解绑中间层的数据传输
    destroyed: function () {}, // 实例销毁后调用
    methods: {
      changeLv: function () {
        switch (this.lv) {
          case 0:
            this.gNum = 9 * 9
            this.lNum = 10
            this.qNum = 10
            break
          case 1:
            this.gNum = 18 * 18
            this.lNum = 40
            this.qNum = 40
            break
          case 2:
            this.gNum = 32 * 32
            this.lNum = 99
            this.qNum = 99
            break
        }
       return this.createGame()
      },
      createGame: function () {
        /*初始化*/
        let number = document.querySelectorAll('.grid').length
        for (let i = 0; i < number; i++) {
          document.querySelectorAll('.grid')[i].classList.remove('dian')
        }
        this.show = 0
        this.gameGe = new Array()
        this.gameTime = 0
        this.qNum = this.lNum
        clearTimeout(this.t)
        this.te = false
        let rNum = () => Math.floor(Math.random() * this.gNum)
        /*构建雷组*/
        let lArray = new Array()
        for (let a = 0; a < this.lNum; a++) {
          let temp = rNum()
          if (!lArray.includes(temp)) {
            lArray.push(temp)
          } else {
            a--
          }
        }
        /*填充格子*/
        for (let a = 0; a < this.gNum; a++) {
          let temp = lArray.indexOf(a)
          let tempObj = {
            l: 0,
            d: 0,
            b: 0
          }
          if (temp !== -1) {
            /*找到雷*/
            lArray.splice(temp, 1)
            tempObj.l = 1
          }
          this.gameGe.push(tempObj)
        }
        this.createShowNum()
      },
      createShowNum: function () {
        /*为格子添加标记数字*/
        let tempLength = this.gameGe.length
        for (let a = 0; a < tempLength; a++) {
          let tempCNum = 0
          let tempArr = this.x9(a, Math.sqrt(this.gNum), tempLength)
          for (let obj of tempArr) {
            if (this.gameGe[obj].l) {
              tempCNum++
            }
          }
          this.gameGe[a].l === 1 ? this.gameGe[a].s = false : this.gameGe[a].s = tempCNum
        }
      },
      x9: function (n, gNum, pStr) {
        /*九宫寻找术！*/
        let a = parseInt(n - gNum),
          b = parseInt(n + gNum)
        let tempArr = new Array()
        if (n % gNum === 0) {
          tempArr = [a, parseInt(a + 1), n, parseInt(n + 1), b, parseInt(b + 1)]
        } else if (n % gNum === parseInt(gNum - 1)) {
          tempArr = [parseInt(a - 1), a, parseInt(n - 1), n, parseInt(b - 1), b]
        } else {
          tempArr = [parseInt(a - 1), a, parseInt(a + 1), parseInt(n - 1), n, parseInt(n + 1), parseInt(b - 1), b, parseInt(b + 1)]
        }
        let arr = tempArr.filter(function (item) {
          return (item >= 0 && item < parseInt(pStr))
        })
        return arr
      },
      gameWin: function () {
        let qi = document.querySelectorAll('.q').length
        let d = document.querySelectorAll('.dian').length
        let boolean = parseInt(qi) === parseInt(this.lNum) && (parseInt(qi + d) === parseInt(this.gNum) || parseInt(qi + d) === parseInt(this.gNum - 1))
        if (boolean) {
          clearTimeout(this.t)
          let name = prompt('请输入您的大名', '')
          this.bang.push({name: name === '' ? '匿名' : name, time: this.gameTime + 's'})
          this.createGame()
          this.bang.sort(function (v1, v2) {
            return parseInt(v1.time) - parseInt(v2.time)
          })
          this.tan = true
        }
        return ''
      },
      gameOver: function () {
        let number = document.querySelectorAll('.grid').length
        for (let i = 0; i < number; i++) {
          document.querySelectorAll('.grid')[i].classList.add('dian')
        }
        clearTimeout(this.t)
        // this.createGame()
      },
      createTime: function () {
        this.gameTime++
        this.t = setTimeout(this.createTime, 1000)
      },
      test: function (index, e) {
        let d = this.gameGe[index].d,
          b = this.gameGe[index].b,
          s = this.gameGe[index].s,
          l = this.gameGe[index].l

        if (!this.te) {
          this.createTime()
          this.te = true
        } else if (this.gameTime === 0) {
          this.te = false
        }

        if (e.which === 1) {
          /*点击到已标记的时候*/
          if (b) {
            return false
          } else {
            /*点击到空时*/
            if (s === 0) {
              let zeroArr = new Array()
              zeroArr.push(index)
              let _this = this
              Tcc(zeroArr)

              function Tcc (arr) {
                /*递归所有s为0的格子并点开*/
                let aLength = zeroArr.length
                arr.forEach(function (item) {
                  _this.x9(item, Math.sqrt(_this.gNum), _this.gameGe.length).forEach(function (i) {
                    if (_this.gameGe[i].s === 0 && _this.gameGe[i].b === 0) {
                      if (!zeroArr.includes(i)) {zeroArr.push(i)}
                    } else if (_this.gameGe[i].s < 3 && _this.gameGe[i].b === 0) {
                      /*s<3的格子也点开*/
                      _this.gameGe[i].d = 1
                    }

                  })
                })
                let bLength = zeroArr.length
                if (bLength > aLength) {
                  Tcc(zeroArr)
                }
              }

              for (let b of zeroArr) {
                this.gameGe[b].d = 1
              }
            }
            this.gameGe[index].d = 1
            if (l === 1) {
              this.gameOver()
              return 0
            }
          }
        } else if (e.which === 3) {
          if (!d) {
            let number = document.querySelectorAll('.q').length
            if (this.gameGe[index].b) {
              this.gameGe[index].b = false
              number -= 1
            } else {
              if (number >= this.lNum) {
                return this.gameWin()
              }
              this.gameGe[index].b = true
              number += 1
            }
            this.qNum = this.lNum - number
          }
        }
        return this.gameWin()
      },
    },
  }
</script>