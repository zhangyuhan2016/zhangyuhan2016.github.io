<template>
    <div class="yzm">
        <h2>滑块验证</h2>
        <div>
            <div class="bg" :style="slideCode.bgStyle" ref="codeBg">
                <i class="iconfont icon-refresh retry" @click="retryCode"></i>
                <img class="y-img" :src="slideCode.imgURL" alt="验证码">
                <img class="t-img" :style="slideCode.slideImg" :src="slideCode.imgURL" alt="验证码">
                <div class="b-card" :style="slideCode.fixedBlock"></div>
            </div>
            <div class="h-card">
                <div class="text" :class="{err: slideCode.result === false}">
                    {{slideCode.result === '' ? '请向右滑动进行验证' : (slideCode.result === true ? '验证通过' : '验证失败')}}
                </div>
                <div class="card-bg" :style="slideCode.slideBlock">
                    <div class="bg"></div>
                    <div class="card" :class="{stop: slideCode.result === true}" @touchstart="slideStart"
                         @touchmove="slideMove"
                         @touchend="slideEnd">
                        <i class="iconfont icon-right" v-show="slideCode.result === ''"></i>
                        <i class="iconfont icon-refresh" v-show="slideCode.result === false"></i>
                        <i class="iconfont icon-duihao" v-show="slideCode.result === true"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  /** 怎么做
   * 2. 通过css剪切背景图,拖动滑块
   *    1. 背景图 & 空白块图 & 有图块图
   *    2. 滑块与有图块图同步距离
   * */
  export default {
    name: 'yzm',
    data: function () {
      return {
        clickText: '',
        canvasFlag: false,
        canvasNumber: 1,
        ClickData: [],
        fontData: [],
        imgArr: [
          'http://img.hb.aicdn.com/47829a3692500f8e765acc236a6f158a882e12675a062-TTD3D2_fw658',
          require('../assets/images/17.jpg')
        ],
        useImg: 'http://img.hb.aicdn.com/47829a3692500f8e765acc236a6f158a882e12675a062-TTD3D2_fw658',
        slideCode: {
          imgURL: 'http://img.hb.aicdn.com/47829a3692500f8e765acc236a6f158a882e12675a062-TTD3D2_fw658',
          bgStyle: {height: '300px', width: '100%'},
          result: '',
          slideImg: {
            width: '100%',
            height: '',
            clip: '',
            'margin-left': ''
          },
          fixedBlock: {},
          slideBlock: {
            'margin-left': '-100%',
            'transition': '',
            cardW: '15',
            text: '拖动滑块进行验证'
          }
        },
        leftRange: 50,
        slideData: {
          'margin-left': '-100%',
          'transition': ''
        },
        initData: {
          top: '100px',
          left: '200px',
          width: '50px',
          height: '50px'
        },
        clipData: {
          width: '100%',
          height: '300px',
          clip: '',
          'margin-left': '-200px'
        }
      }
    },
    created: function () {
      this.clipData.clip = `rect(${this.initData.top} ${parseFloat(this.initData.left) + parseFloat(this.initData.width)}px ${parseFloat(this.initData.top) + parseFloat(this.initData.height)}px ${this.initData.left})`
      this.clipData['margin-left'] = '-' + this.initData.left
    }, // 创建时
    beforeMount: function () {}, // 挂载之前
    mounted: function () {
      this.createSlideImg()
    }, // 挂载之后
    beforeUpdate: function () {}, // 数据更新时调用,在渲染之前
    updated: function () {}, // 数据更新后,渲染后调用(禁止)
    beforeDestroy: function () {}, // 实例销毁前调用,解绑中间层的数据传输
    destroyed: function () {}, // 实例销毁后调用
    methods: {
      test () {
        let tempNumber = this.leftRange > 50 ? this.leftRange - 50 : -(50 - this.leftRange)
        console.log(tempNumber)
        this.clipData['margin-left'] = parseInt(tempNumber) + parseFloat(this.clipData['margin-left']) + 'px'
      },
      tStart (e) {
        this.slideData['transition'] = ''
      },
      tMove (e) {
        this.slideData['margin-left'] = `calc(-100% + ${e.targetTouches[0].pageX - 15}px)`
        this.clipData['margin-left'] = -200 + e.targetTouches[0].pageX - 15 + 'px'
        console.log(this.slideData['margin-left'], this.clipData['margin-left'])
      },
      tEnd () {
        console.log('1')
        this.slideData['transition'] = 'all 0.3s'
        this.slideData['margin-left'] = '-100%'
        // this.clipData['margin-left'] = '-200px'
      },
      slideStart (e) {
        // 重置滑块的过渡
        this.slideCode.result = ''
        this.slideCode.slideBlock['transition'] = ''
        this.slideCode.slideBlock['margin-left'] = '-100%'
        this.createSlideImg()
      },
      slideMove (e) {
        /* 同步滑块&图片位置 */
        let tempDis = e.targetTouches[0].pageX - parseFloat(this.slideCode.slideBlock.cardW)
        if (tempDis > this.slideCode.slideBlock.maxRange) {
          /* 拉到尽头 */
          tempDis = this.slideCode.slideBlock.maxRange
          return this.checkDis()
        }
        if (tempDis < 0) { tempDis = 0 }
        this.slideCode.slideBlock['margin-left'] = `calc(-100% + ${tempDis}px)`
        this.slideCode.slideImg['margin-left'] = parseFloat('-' + this.slideCode.fixedBlock.left) + tempDis + 'px'
      },
      slideEnd () {
        this.checkDis()
      },
      retryCode () {
        /* 重新生成验证码 */
        // 重置滑块的过渡
        this.slideCode.result = ''
        this.slideCode.slideBlock['transition'] = ''
        this.slideCode.slideBlock['margin-left'] = '-100%'
        this.useImg = this.getImgUrl()
        this.slideCode.imgURL = this.useImg
      },
      checkDis () {
        let flag = Math.abs(parseFloat(this.slideCode.slideImg['margin-left'])) < this.slideCode.fault
        this.slideCode.result = flag
        if (flag) {
          this.slideCode.slideBlock['transition'] = 'all 0.3s'
          this.slideCode.slideBlock['margin-left'] = parseFloat(this.slideCode.slideBlock.cardW) * -2 + 'px'
        } else {
          /* 添加过渡效果 */
          this.slideCode.slideBlock['transition'] = 'all 0.3s'
          this.slideCode.slideBlock['margin-left'] = '-100%'
        }
      },
      addPx (n) { return parseInt(n) + 'px' },
      createRanInit ({minX = '50', maxX, minY = '5', maxY, w = '50', h = '50'}) {
        /* 随机生成白块的位置 */
        return {
          top: this.addPx(Math.random() * (maxY - h) + minY),
          left: this.addPx(Math.random() * (maxX - w) + minX),
          width: this.addPx(w),
          height: this.addPx(h)
        }
      },
      getImgUrl () {
        return this.imgArr[parseInt(Math.random() * this.imgArr.length)]
      },
      createSlideImg () {
        /* 获取codeBg的宽高 */
        let bgHeight = this.$refs.codeBg.offsetHeight || '300px'
        let bgWidth = this.$refs.codeBg.offsetWidth || '400px'
        console.log('--bgHeight, bgWidth--', bgHeight, bgWidth)
        /* 生成遮挡(白块)的位置 */
        let fixedBlock = this.createRanInit({
          maxX: bgWidth,
          maxY: bgHeight
        })
        /* 根据遮挡的位置裁剪img */
        let slideImg = {
          width: '100%',
          height: this.addPx(bgHeight),
          clip: `rect(${fixedBlock.top} ${parseFloat(fixedBlock.left) + parseFloat(fixedBlock.width)}px ${parseFloat(fixedBlock.top) + parseFloat(fixedBlock.height)}px ${fixedBlock.left})`,
          'margin-left': '-' + fixedBlock.left
        }
        console.log('a', this.useImg)
        let data = {
          imgURL: this.useImg,
          fault: '5',
          result: '',
          bgStyle: {
            height: this.addPx(bgHeight),
            width: this.addPx(bgWidth)
          },
          slideImg,
          fixedBlock,
          slideBlock: {
            'margin-left': '-100%',
            'transition': '',
            cardW: '15',
            maxRange: bgWidth - 15 * 2
          }
        }
        this.slideCode = data
        return data
      }
    } // 函数
  }
</script>
<style lang='scss'>
    .yzm {
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
    }

    .bg {
        width: 100vw;
        height: 300px;
        position: relative;
        overflow: hidden;
        .retry {
            font-size: 40px;
            position: absolute;
            right: 0;
            padding: 5px;
            color: white;
            z-index: 4;
        }
        .y-img {
            width: 100%;
            height: 100%;
            display: block;
            z-index: 1;
        }
        .b-card {
            position: absolute;
            top: 0;
            left: 0;
            background-color: white;
            box-shadow: inset 0 0 7px 3px #a5a5a5;
            border-radius: 5px;
            z-index: 2;
        }
        .t-img {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
        }
    }

    .h-card {
        $b-height: 40px;
        margin-top: $b-height;
        height: $b-height;
        line-height: $b-height;
        position: relative;
        background-color: #E8E8E8;
        .text {
            text-align: center;
            &.err {
                background-color: #da5a21;
                color: white;
            }
        }
        .card-bg {
            display: flex;
            flex-direction: row;
            position: absolute;
            top: 0;
            left: 0;
            margin-left: -100%;
            .bg {
                flex: 1;
                background-color: rgba(0, 128, 0, 0.53);
                height: $b-height;
            }
            .card {
                width: 30px;
                background-color: white;
                height: $b-height;
                box-sizing: border-box;
                border: 1px solid #ababab;
                &.stop {
                    pointer-events: none;
                }
                i {
                    font-size: 26px;
                }
            }
        }

    }
</style>
