<template>
    <div class="money-counter">
        <h2>五险一金计算器</h2>
        <!--title-->
        <section><label>税前薪资</label><input type="number" v-model="income.before"></section>
        <section><label>其他支出</label><input type="number" v-model="income.other"></section>
        <section><label>税后薪资</label><input type="number" v-model="income.after"></section>
        <section><label>社保基数</label><input type="number" v-model="sb.base"></section>
        <section><label>公积金基数</label><input type="number" v-model="house.base"></section>

        <!--sb-->
        <section v-for="item in sb.option" class="sb">
            <span class="name">{{item.name}}</span>
            <span class="money" >{{item.user.money = (item.user.ratio / 100 * sb.base).toFixed(2)}}</span>
            <label class="ratio"><input type="number" v-model="item.user.ratio"></label>
            <span class="money">{{item.org.money = (item.org.ratio / 100 * sb.base).toFixed(2)}}</span>
            <label class="ratio"><input type="number" v-model="item.org.ratio"></label>
        </section>
        <!--house-->
        <section class="sb">
            <span class="name">公积金</span>
            <span class="money">{{house.user.money = (house.user.ratio / 100 * house.base).toFixed(2)}}</span>
            <label class="ratio"><input type="number" v-model="house.user.ratio"></label>
            <span class="money">{{house.org.money = (house.org.ratio / 100 * house.base).toFixed(2)}}</span>
            <label class="ratio"><input type="number" v-model="house.org.ratio"></label>
        </section>
        <!--user-->
        <section class="sb">
            <span class="name">个税</span>
            <span class="money">{{income.us.money}}</span>
            <label class="ratio"><input type="number" v-model="income.us.ratio"></label>
        </section>
        <!--all-->
        <section class="sb">
            <span class="name">共计</span>
            <span class="money all">{{`${sbMoney[0]} (${(sbMoney[0] / income.before * 100).toFixed(2)}%)`}}</span>
            <span class="money all">{{sbMoney[1] + Number(house.org.money)}}</span>
        </section>
    </div>
</template>
<script>
  export default {
    name: 'money-counter',
    data: function () {
      return {
        income: {
          before: 4500,
          after: 0,
          other: 0,
          us: {
            money: 0,
            ratio: 3
          }
        },
        sb: {
          base: 3057.45,
          money: [],
          option: [
            {
              name: '养老保险',
              user: {money: 0, ratio: 8},
              org: {money: 0, ratio: 19}
            }, {
              name: '医疗保险',
              user: {money: 0, ratio: 2},
              org: {money: 0, ratio: 8}
            }, {
              name: '失业保险',
              user: {money: 0, ratio: 0.3},
              org: {money: 0, ratio: 0.7}
            }, {
              name: '工伤保险',
              user: {money: 0, ratio: 0},
              org: {money: 0, ratio: 0.5}
            }, {
              name: '生育保险',
              user: {money: 0, ratio: 0},
              org: {money: 0, ratio: 1}
            }
          ]
        },
        house: {
          base: 3500,
          user: {
            money: 0,
            ratio: 12
          },
          org: {
            money: 0,
            ratio: 12
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
    computed: {
      sbMoney () {
        let money = [[], []]
        this.sb.option.forEach((v) => {
          money[0].push(v.user.money)
          money[1].push(v.org.money)
        })
        let us = money.map(v => {
          return v.reduce((p, c) => Number(p) + Number(c))
        })
        this.income.us.money = (this.income.before - us[0]) - 3500 > 0 ? ((this.income.before - us[0] - 3500) * this.income.us.ratio / 100).toFixed(2) : 0
        let all = us[0] + Number(this.house.user.money) + Number(this.income.us.money)
        this.income.after =  this.income.before - all - this.income.other
        us[0] = all
        return us
      }
    },
    methods: {} // 函数
  }
</script>
<style lang='scss'>
    .money-counter {
        box-sizing: border-box;
        font-family: Tahoma;
        * {
            font-size: 20px;
        }
        section {
            margin: 10px 0;
        }
        .sb {
            .name {
                width: 8rem;
                text-align: center;
                display: inline-block;
            }
            .money {
                width: 6rem;
                text-align: right;
                display: inline-block;
                &.all{
                    width: 10rem;
                }
            }
            .ratio {
                width: 5rem;
                text-align: center;
                display: inline-block;
                &::before {
                    content: '(';
                }
                &::after {
                    content: '%)';
                    margin-left: -0.7rem;
                }
            }
            input {
                width: 3rem;
                border: 0;
            }
        }
        label {
            width: 8rem;
            text-align: center;
            display: inline-block;
        }
        input {
            text-align: right;
            height: 30px;
            width: 100px;
        }

    }
</style>
