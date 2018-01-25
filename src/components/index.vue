<template>
    <div class="index">
        <div class="wrapper">
            <router-link tag="div" :to="item.url" v-for="(item,index) in page" :key="index">
                {{item.name}}
            </router-link>
        </div>
        <div class="my-bg-card">
            <li v-for="(item,index) in cards.cardNumber" v-bind:key="item" class="card"
                v-bind:style="cards.cardCss[index]" data-number="item">
            </li>
        </div>
    </div>
</template>
<script>
  import { UpCard } from '../assets/js/UpCard'

  export default {
    name: 'index',
    data: function () {
      return {
        cards: new UpCard(),
        page: [{
          name: '公积金计算器',
          url: 'moneyCounter'
        }, {
          name: 'CSS 3D阴影',
          url: 'font3D'
        }, {
          name: '文字打印机效果',
          url: 'textPrint'
        }, {
          name: '扫雷',
          url: 'mine'
        }, {
          name: '仿picker (touch) ',
          url: 'picker'
        }, {
          name: '图中点字验证码',
          url: 'yzm'
        }, {
          name: '拖动验证码',
          url: 'dragYzm'
        }]
      }
    },
    created: function () {
      // 初始化块动画
      this.cards.created()
    }, // 创建时
    beforeMount: function () {}, // 挂载之前
    mounted: function () {}, // 挂载之后
    beforeUpdate: function () {}, // 数据更新时调用,在渲染之前
    updated: function () {}, // 数据更新后,渲染后调用(禁止)
    beforeDestroy: function () {}, // 实例销毁前调用,解绑中间层的数据传输
    destroyed: function () {}, // 实例销毁后调用
    methods: {} // 函数
  }
</script>
<style lang='scss'>
    .index {
        box-sizing: border-box;
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        .wrapper {
            flex: 1;
            box-sizing: border-box;
            padding: 0 50px;
            display: grid;
            grid-column-gap: 1px;
            grid-row-gap: 10px;
            > div {
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                background-color: #4bc3f4;
                cursor: pointer;
                padding: 25px 0;
                font-size: 20px;
                &:hover {
                    transition: all 0.6s;
                    transform: scale(0.98);
                    background-color: #00aeef;

                }
            }
        }
    }

    .my-bg-card {
        /* 块动画背景 */
        z-index: -1;
        background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
        opacity: 0.8;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        .card {
            position: absolute;
            transition: all 0.6s;
            display: block;
            list-style: none;
            bottom: -200px;
            animation-iteration-count: infinite;
            animation-timing-function: cubic-bezier(0, 0.23, 0.94, 0.83);
            animation-name: lilili;
            animation-fill-mode: both;
            &:hover {
                animation-play-state: paused;
                transform: scale(1.2);
            }
        }
        @keyframes lilili {
            to {
                bottom: 100%;
                transform: rotate(100deg);
            }
        }
    }
</style>
