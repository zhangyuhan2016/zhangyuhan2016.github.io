<template>
    <div class="font-3D">
        <div id="show">
            <span class="text-3d" :data-text="item.text" :class="{right: item.right}" v-for="(item,index) in textArr" :key="index">{{item.text}}</span>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'font-3D',
    data: function () {
      return {
        textArr: [{
          text: '{'
        },{
          text: 'C'
        },{
          text: 'S'
        },{
          text: 'S'
        },{
          text: '}',
          right: true
        },{
          text: '《'
        },{
          text: '哈'
        },{
          text: '》',
          right: true
        },{
          text: '㊎'
        },{
          text: '㊍'
        },{
          text: '㊌'
        },{
          text: '㊋'
        },{
          text: '㊏'
        }]
      }
    },
    created: function () {}, // 创建时
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
    @import "../assets/css/font3D.scss";
    .font-3D {
        box-sizing: border-box;
    }
</style>
