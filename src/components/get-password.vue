<template>
    <div class="get-password">
        <div class="setting">
            <div>
                <span>口令</span>
                <input type="password" placeholder="天不知地不知你知的基础口令" v-model="setting.key" maxlength="15">
            </div>
            <div>
                <span>网站缩写</span>
                <input type="text" placeholder="两个字符" maxlength="2" v-model="setting.ac">
            </div>
            <div>
                <span>生成规则</span>
                <select v-model="setting.acType">
                    <option disabled value="">请选择</option>
                    <option v-for="(item,i) of setting.type" :key="i">{{item.name}}</option>
                </select>
            </div>

        </div>
        <!--规则设置-->
        <div class="rule-setting" v-for="(item,i) of setting.type" :key="i" v-show="setting.acType === item.name">
            <div>
                <span class="tip">设置</span>
            </div>
            <div v-for="(a,index) of item.rule" :key="index">
                <span>{{a.n}}</span>
                <input type="text" v-model="a.m">
            </div>
        </div>
        <div class="password">
            <textarea placeholder="标志位" v-html="getPw(this.setting.ac)" disabled></textarea>
        </div>
        <div class="tip"><p>
            使用示例：
            <br>口令: 一行白鹭上青天
            <br>网站缩写: gg
            <br>通过设置以上参数,会生成<strong>标志位</strong>
            <br>假如生成<strong>qDI_</strong>
            <br>把标志位放在密码的任意位置 <br>xxxxx(标志位): <strong>666888qDI_</strong>
            <br><br>最大最小码点是匹配Unicode码点,33-125是字母加常见特殊符号,<strong>范围过小会导致密码不好输入</strong></p></div>
    </div>
</template>
<script>
  export default {
    name: 'get-password',
    data: function () {
      return {
        password: '',
        setting: {
          key: '',
          ac: '',
          acType: '字符加密',
          type: [{
            name: '字符加密',
            rule: [{n: '最小码点', m: '33'}, {n: '最大码点', m: '125'}]
          }]
        }
      }
    },
    created: function () {}, // 创建时
    beforeMount: function () {}, // 挂载之前
    mounted: function () {}, // 挂载之后
    beforeUpdate: function () {}, // 数据更新时调用,在渲染之前
    updated: function () {}, // 数据更新后,渲染后调用(禁止)
    beforeDestroy: function () {}, // 实例销毁前调用,解绑中间层的数据传输
    destroyed: function () {}, // 实例销毁后调用
    methods: {
      toN (str) {
        let flag = Number.isNaN(Number(str))
        if (flag) {
          /* 是NaN */
          let temp = Array.from(str)
          let arr = temp.map(function (v) {
            if (Number.isNaN(Number(v))) {
              return v.codePointAt().toString()[0]
            } else {
              return v
            }
          })
          return arr.join('').slice(0, 15)
        }
        return str
      },
      createPassword (key = '网站前俩位字母') {
        let start = key[0].codePointAt()
        let end = key[1].codePointAt()
        const only = this.toN(this.setting.key)
        let tempStr = 0
        if (start === end) {
          let temp = String(start)[0] + String(end)[0]
          start = parseInt(temp + String(only)[temp])
        }
        if ((start + end) % 2) {
          tempStr = start * only / end
        } else {
          tempStr = end * only / start
        }
        return tempStr
      },
      createStr (str, min = 33, max = 125) {
        // 33 - 125
        // 48 - 122
        let tempStr = str.length % 2 ? str + '0' : str
        let arr = tempStr.replace(/(.{2})/g, '$1^').split('^')
        arr.length = tempStr.length / 2
        let all = ''
        arr.forEach((a) => {
          let tempNumber = parseInt(a)
          let setNumber = tempNumber
          if (tempNumber < min) {
            setNumber = max - tempNumber
          }
          all += String.fromCodePoint(parseInt(setNumber))
        })
        return all
      },
      getPw (key) {
        if (key && this.setting.ac.length === 2) {
          return this.createStr(parseInt(this.createPassword(key)).toString(), this.setting.type[0].rule[0].m, this.setting.type[0].rule[1].m)
        }
      }
    } // 函数
  }
</script>
<style lang='scss'>
    .get-password {
        .tip {
            p {
                font-size: 18px;
                line-height: 30px;
            }
        }
        box-sizing: border-box;
        background-color: #eaeaea;
        min-height: 100vh;
        max-width: 640px;
        padding: 20px 10px;
        margin: 0 auto;
        font-family: Arial;
        .rule-setting {
            .tip {
                font-size: 16px;
                text-align: center;
            }
            @extend .setting;
            input {
                max-width: 60px;
            }
        }
        .setting {
            > div {
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding-bottom: 20px;
                &:first-child {
                    padding-top: 20px;
                }
                > span {
                    display: block;
                    width: 6rem;
                    text-align: right;
                    padding-right: 40px;
                    font-size: 20px;
                }
                > input, select {
                    flex: 1;
                    height: 40px;
                    text-align: center;
                    font-size: 18px;
                    outline: none;
                    border: 0;
                    box-shadow: inset 0 0 5px 2px #d1d1d1;
                }
                > select {
                    max-width: 10 * 18px;
                    padding-left: 3 * 18px;
                }
            }
        }
        .password {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            textarea {
                width: 90%;
                font-size: 30px;
                line-height: 50px;
                min-height: 50px;
                box-sizing: border-box;
                padding: 5px;
                background-color: #eaeaea;
                color: black;
                font-weight: bold;
            }
        }
    }
</style>
