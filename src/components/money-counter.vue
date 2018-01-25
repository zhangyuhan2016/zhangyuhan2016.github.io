<template>
    <div class="money-counter">
        <h1>公积金缴费计算</h1>
        <div>
            <span class="tip">个人</span>
            <div class="input">
                <span>税前工资:</span>
                <input type="number" v-model="pData.user.money">
            </div>
            <div class="input">
                <span>缴费比例:</span>
                <input type="number" v-model="pData.user.ratio">
            </div>
            <div class="input">
                <span>税后工资:</span>
                <div>{{countMoney()}}</div>
            </div>
        </div>
        <div>
            <span class="tip">单位</span>
            <div class="input">
                <span>公积金基数:</span>
                <input type="number" v-model="pData.unit.base">
            </div>
            <div class="input">
                <span>缴费比例:</span>
                <input type="number" v-model="pData.unit.ratio">
            </div>
            <div class="input">
                <span>最高缴费额度:</span>
                <input type="number" v-model="pData.unit.max">
            </div>
            <div class="input">
                <span>应缴费额度:</span>
                <input type="number" v-model="pData.unit.remain">
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'money-counter',
    data: function () {
      return {
        pData: {
          user: {
            money: 4500,
            remain: 3500,
            ratio: 0.12
          },
          unit: {
            base: 2650,
            ratio: 0.12,
            max: 318,
            remain: 318
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
      countMoney: function() {
        // 缴费金额
        let userMoney = this.pData.user.ratio * this.pData.unit.base
        let unitMoney = this.pData.unit.ratio * this.pData.unit.base
        this.pData.unit.remain = unitMoney
        let tempMoney = unitMoney
        if(unitMoney >= this.pData.unit.max){
          tempMoney = unitMoney - this.pData.unit.max
        }else{
          tempMoney = 0
        }
        return `${this.pData.user.money} - (${userMoney} + ${tempMoney}) = ${this.pData.user.money - (userMoney + tempMoney)}`
      }
    }
  }
</script>
<style lang='scss'>
    .money-counter {
        box-sizing: border-box;
        font-size: 14px;
        .tip{
            font-size: 16px;
            color: #a1a1a1;
            display: block;
            margin: 10px 0;
        }
        .input{
            height: 30px;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 10px 0;
            >span{
                width: 100px;
                display: block;
                text-align: center;
            }
            >input{
                width: 100px;
                height: 25px;
                text-align: center;
            }
        }
    }
</style>
