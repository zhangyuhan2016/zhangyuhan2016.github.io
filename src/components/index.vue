<template>
    <div class="index">
        <div>
            <span>工资</span>
            <input type="number" placeholder="工资">
            <span>剩余工资 {{user.allmoney}}</span>
        </div>
        <div>
            <span>公积金缴费基准</span>
            <input type="number">
        </div>
        <div>
            <span>单位</span>
            <input type="number" placeholder="12">
            <span>%</span>
            <input type="checkbox" checked>
            <input type="number" placeholder="最高缴费">
        </div>
        <div>
            <span>个人</span>
            <input type="number" placeholder="12">
            <span>%</span>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'index',
    data: function () {
      return {
        user: {
          allmoney: 400
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
    methods: {} // 函数
  }
</script>
<style lang='scss'>
    .index {
        box-sizing: border-box;
        background-color: green;
    }
</style>
