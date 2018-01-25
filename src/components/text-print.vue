<template>
    <div class="text-print">
        <div class="center">
            <span class="print-text"></span>
            <span class="after"></span>
        </div>
    </div>
</template>
<script>
  import {aText} from '../assets/js/printText'
  export default {
    name: 'text-print',
    data: function () {
      return {
        text: `把酒祝东风，且共从容，垂杨紫陌洛城东。总是当时携手处，游遍芳丛。聚散苦匆匆，此恨无穷。今年花胜去年红。可惜明年花更好，知与谁同`.split(/[，|。]/),
        att: new aText()
      }
    },
    created: function () {}, // 创建时
    beforeMount: function () {}, // 挂载之前
    mounted: function () {
      this.att.start('.print-text', this.text)
    }, // 挂载之后
    beforeUpdate: function () {}, // 数据更新时调用,在渲染之前
    updated: function () {}, // 数据更新后,渲染后调用(禁止)
    beforeDestroy: function () {}, // 实例销毁前调用,解绑中间层的数据传输
    destroyed: function () {
      this.att = null
    }, // 实例销毁后调用
    methods: {} // 函数
  }
</script>
<style lang='scss'>
    @import "../assets/css/text-print.scss";
    .text-print {
        box-sizing: border-box;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e7e1d4;
        .center{
            min-width: 20rem;
            height: 30px;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }
</style>
