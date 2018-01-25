<template>
    <div>
        <div class="weui-mask"></div>
        <div class="bg">
            <div class="weui-picker__bd">
                <div class="weui-picker__group" @touchstart="pStart" @touchmove="pMove" @touchend="pEnd">
                    <div class="weui-picker__mask"></div>
                    <div class="weui-picker__indicator"></div>
                    <div class="weui-picker__content"
                         style="transform: translate3d(0px, 0px, 0px); transition: all 0.3s;" ref="box">
                        <div class="weui-picker__item" v-for="(item,index) in picData.data" :id="'a' + index"
                             :ref="'a' + index" :key="index"
                             @click="cIndex(index)">{{item}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
  export default {
    name: 'picker',
    data: function () {
      return {
        picData: {
          default: 0,
          data: ['1', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7'],
          height: 34
        },
        pageData: {
          start: '',
          end: ''
        }
      }
    },
    created: function () {
    }, // 创建时
    beforeMount: function () {}, // 挂载之前
    mounted: function () {
      this.createPicker()
    }, // 挂载之后
    beforeUpdate: function () {}, // 数据更新时调用,在渲染之前
    updated: function () {}, // 数据更新后,渲染后调用(禁止)
    beforeDestroy: function () {}, // 实例销毁前调用,解绑中间层的数据传输
    destroyed: function () {}, // 实例销毁后调用
    methods: {
      createPicker () {
        /* 初始化 */
        this.$refs.box.style.transform = `translate3d(0px, ${(this.picData.default + 3) * this.picData.height}px, 0px)`
      },
      cIndex (i) {
        console.log('--i--', i)
      },
      pMove (e) {
        let oldHeight = this.$refs.box.style.transform.split('px,')[1] || 0
        let tempHeight = Number(oldHeight) + (Number(e.targetTouches[0].pageY) - Number(this.pageData.start))
        this.pageData.start = e.targetTouches[0].pageY
        this.$refs.box.style.transform = `translate3d(0px, ${tempHeight}px, 0px)`
        e.preventDefault()
      },
      pEnd () {
        const Boxlength = this.picData.data.length
        let oldHeight = this.$refs.box.style.transform.split('px,')[1] || 0
        let index = Math.round(oldHeight / this.picData.height)
        if (index < -Boxlength + 4) {
          index = -Boxlength + 4
        }
        if (index > 3) {
          index = 3
        }
        this.$refs.box.style.transform = `translate3d(0px, ${index * 34}px, 0px)`
      },
      pStart (e) {
        this.pageData.start = e.targetTouches[0].pageY
      }
    } // 函数
  }
</script>
<style lang='scss'>
    .weui-picker__bd {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        position: relative;
        background-color: #fff;
        height: 238px;
        overflow: hidden;
    }

    .weui-picker__group {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        position: relative;
        height: 100%;
    }

    .weui-picker__mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        z-index: 3;
        background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
        background-position: top, bottom;
        background-size: 100% 102px;
        background-repeat: no-repeat;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }

    .weui-picker__indicator {
        width: 100%;
        height: 34px;
        position: absolute;
        left: 0;
        top: 102px;
        z-index: 3;
    }

    .weui-picker__indicator:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #E5E5E5;
        color: #E5E5E5;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }

    .weui-picker__indicator:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #E5E5E5;
        color: #E5E5E5;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }

    .weui-picker__content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transition: all 0.3s;
    }

    .weui-picker__item {
        padding: 0;
        height: 34px;
        line-height: 34px;
        text-align: center;
        color: #000;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .bg {
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        z-index: 5000;
    }

    .weui-mask {
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
    }
</style>
