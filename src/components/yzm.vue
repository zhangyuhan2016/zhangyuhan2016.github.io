<template>
    <div class="checkCode" :class="{success:checkData.cData.flag}">
        <span class="title">{{checkData.title}}</span>
        <div class="content" @click="showCode">
            <div class="anime">
                <div class="one"></div>
            </div>
            <div v-show="!checkData.popShow && !checkData.cData.flag">{{checkData.text[0]}}</div>
            <div v-show="checkData.popShow && !checkData.cData.flag">{{checkData.text[1]}}</div>
            <div v-show="!checkData.popShow && checkData.cData.flag">{{checkData.text[2]}}</div>
        </div>
        <div class="dialog-bg" @click.self.stop="closeCode" v-show="checkData.popShow"></div>

        <div class="dialog l-box" v-show="checkData.popShow && !checkData.cData.flag">
            <div class="title">
                <span v-if="checkData.cData.tipStatus">{{checkData.cData.tip[0]}}</span>
                <span v-else class="warn">{{checkData.cData.tip[1]}}</span>
                <span class="card-bg">{{checkData.cData.text}}</span>
            </div>
            <div class="content">
                <canvas id="yzm-canvas" @click="addNumber" :width="parseInt(checkData.cData.style.width) * 2 + 'px' "
                        :height="parseInt(checkData.cData.style.height) * 2 + 'px' "
                        :style="checkData.cData.style"></canvas>
                <div v-for="(item,index) in checkData.cData.clickData" class="number" @click="removeNumber(index)"
                     :data-index="index + 1"
                     :key="index" :style="{left: item.x + 'px', top: item.y + 35 + 'px'}"></div>
            </div>
            <div class="footer">
                <i class="iconfont icon-refresh tip" data-tip="刷新验证码" @click="reFont"></i>
                <button @click="checkCfData">验证</button>
            </div>
        </div>
    </div>
</template>
<script>
  import DrawCode from '../assets/js/drawCode'

  export default {
    name: 'checkCode',
    data: function () {
      return {
        checkData: {
          title: '验证码',
          text: ['点击进行验证', '正在验证', '验证成功'],
          popShow: false,
          cData: {
            flag: false,
            text: '默认成语',
            tipStatus: true,
            tip: ['请按顺序点击图中文字', '验证错误,请重新验证'],
            style: {
              width: '280px',
              height: '200px'
            },
            clickData: [],
            fontData: []
          }
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
      showCode () {
        if (this.checkData.cData.flag) { return false }
        this.checkData.popShow = true
        return this.reFont()
      },
      closeCode () {
        this.checkData.popShow = false
      },
      addNumber (e) {
        this.checkData.cData.tipStatus = true
        if (this.checkData.cData.clickData.length >= 4) {
          return false
        }
        let x = e.offsetX
        let y = e.offsetY
        this.checkData.cData.clickData.push({x, y})
        if (this.checkData.cData.clickData.length === 4) {
          return this.checkCfData()
        }
      },
      removeNumber (i) {
        this.checkData.cData.clickData.splice(i)
      },
      drawFont (data) {
        let temp = new DrawCode(data)
        temp.start()
        this.checkData.cData.fontData = temp.fontData
        this.checkData.cData.scope = temp.scope
        this.checkData.cData.text = temp.text.join('')
      },
      reFont (flag) {
        let tempStr = [['狡兔三窟', '免库'], ['长袖善舞', '柚'], ['匪夷所思', '篚'], ['飞扬跋扈', '杨拔'], ['多事之秋', '是又']]
        this.checkData.cData.clickData = []
        this.checkData.cData.flag = false
        if (flag !== true) {
          this.checkData.cData.tipStatus = true
        } else {
          this.checkData.cData.tipStatus = false
        }
        this.drawFont({
          text: tempStr[parseInt(Math.random() * tempStr.length)]
        })
      },
      checkCfData () {
        if (this.checkData.cData.clickData.length !== 4) {
          this.checkData.cData.flag = false
          return false
        }
        let flag = this.checkData.cData.fontData.map((v) => {
          return {
            x: v.x / 2,
            y: v.y / 2
          }
        }).every((value, index) => {
          let booleanX = value.x <= this.checkData.cData.clickData[index].x && this.checkData.cData.clickData[index].x <= (parseInt(value.x) + this.checkData.cData.scope / 2)
          let booleanY = value.y <= this.checkData.cData.clickData[index].y && this.checkData.cData.clickData[index].y <= (parseInt(value.y) + this.checkData.cData.scope / 2)
          return booleanX || booleanY
        })
        this.checkData.cData.flag = flag
        if (flag) {
          this.checkData.popShow = false
        } else {
          this.checkData.cData.tipStatus = false
          return this.reFont(true)
        }
      }
    } // 函数
  }
</script>
<style lang='scss'>
    /* click-box */
    .yzm-img {
        .bg {
        }
        .card {
            width: 50px;
            height: 50px;
            background-color: gold;
            position: relative;
            &::before {
                content: "";
                display: block;
                left: 50%;
                width: 20px;
                height: 20px;
                border-radius: 50% 50% 0 0;
                background-color: black;
                top: -10px;
                margin-left: -10px;
                position: absolute;
            }
            &::after {
                content: "";
                display: block;
                left: 50%;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                position: absolute;
                background-color: red;
                bottom: -10px;
                margin-left: -10px;
            }
        }
    }

    .checkCode {
        /* 基本参数设置 */
        $success-color: #42DD18; // 成功色调
        $height: 50px; // click-box 最小高度
        $gap: 15px; // click-box 间距
        /* 验证成功 */
        &.success {
            > .content {
                border: 1px solid $success-color;
                color: $success-color;
                pointer-events: none;
                .anime .one::before {
                    background-color: $success-color;
                }
            }
        }
        /* 禁止复制 */
        * {
            user-select: none;
        }
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: $height;
        margin: #{$gap * 0.5} 0;
        position: relative;
        > .title {
            padding: 0 $gap;
        }
        > .content {
            max-width: 200px;
            border: 1px solid #e7e7e7;
            flex: 1;
            height: $height;
            margin-right: $gap;
            display: flex;
            flex-direction: row;
            align-items: center;
            .anime {
                min-width: $height;
                margin-left: $gap;
                $w: 12px;
                .one {
                    display: block;
                    width: $w * 3;
                    height: $w * 3;
                    border-radius: 50%;
                    background-color: #DEE9FA;
                    position: relative;
                    animation: zoomIn 1.2s infinite alternate ease-in;
                    transition: all 1.2s;
                    @keyframes zoomIn {
                        to {
                            transform: scale(0.6);
                        }
                    }
                    @keyframes zoomOut {
                        to {
                            transform: scale(1.5);
                        }
                    }
                    &::before {
                        content: "";
                        display: block;
                        position: absolute;
                        width: $w;
                        height: $w;
                        border-radius: 50%;
                        background-color: #5D91F4;
                        left: $w;
                        top: $w;
                        animation: zoomOut 2.4s infinite alternate 1s ease-in;
                    }
                }
            }
        }
        .dialog-bg {
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            width: 100vw;
            z-index: 4;
        }
        .dialog {
            $dW: 320px;
            $dH: 200px;
            min-width: $dW;
            min-height: $dH;
            position: absolute;
            border: 1px solid #e6e6e6;
            background-color: white;
            z-index: 5;
            top: $height;
            margin-left: $height * 2.9;
            margin-top: -#{$height * 0.7};
            $width: 8px;
            &::before {
                content: "";
                height: 0px;
                width: 0px;
                position: absolute;
                left: -17px;
                top: 5px;
                z-index: 0;
                border-left: $width solid transparent;
                border-top: $width solid transparent;
                border-bottom: $width solid transparent;
                border-right: $width solid rgba(63, 63, 63, 0.1);
            }
            &::after {
                content: "";
                height: 0px;
                width: 0px;
                position: absolute;
                left: -14px;
                top: 5px;
                z-index: 1;
                border-left: $width solid transparent;
                border-top: $width solid transparent;
                border-bottom: $width solid transparent;
                border-right: $width solid white;
            }
            @media screen and (max-width: 480px) {
                & {
                    left: calc(50% - 160px);
                    margin: 0;
                    top: 70px;
                    &::before {
                        left: auto;
                        top: -17px;
                        transform: rotateZ(90deg);
                    }
                    &::after {
                        left: auto;
                        top: -15px;
                        transform: rotateZ(90deg);
                    }
                }
            }
        }
        .l-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            canvas {
                border: 1px solid #e6e6e6;
            }
            .warn {
                color: #ff8a00;
            }
            .title {
                height: 50px;
                line-height: 50px;
                display: flex;
                flex-direction: row;
                align-items: center;
                .card-bg {
                    border: 1px solid #e6e6e6;
                    box-sizing: border-box;
                    height: 30px;
                    line-height: 30px;
                    background-color: deepskyblue;
                    color: white;
                    font-weight: bold;
                    margin: 0 10px;
                    padding: 0 10px;
                    letter-spacing: 4px;
                }
            }
            .content {

            }
            .footer {
                margin: 5px 0;
                width: 100%;
                height: 40px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                i {
                    font-size: 30px;
                    color: #b3b3b3;
                }
                button {
                    height: 40px;
                    width: 100px;
                    color: white;
                    background-color: deepskyblue;
                    border: 0;
                    font-size: 18px;
                }
            }
        }
        .tip {
            position: relative;
            &:hover {
                &::after {
                    content: attr(data-tip);
                }
            }
            &::after {
                $w: 50px;
                display: block;
                position: absolute;
                font-size: 16px;
                min-width: $w;
                background: white;
                border: 1px solid #e6e6e6;
                margin-top: - #{$w + 10px};
                margin-left: - #{$w / 2};
                white-space: nowrap;
                padding: 3px;
            }
        }
        .number {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            color: white;
            text-align: center;
            line-height: 30px;
            position: absolute;
            background: #007cff;
            box-shadow: 0 0 2px 1px white;
            &::before {
                content: attr(data-index);
                font-size: 20px;
            }
        }
    }
</style>
