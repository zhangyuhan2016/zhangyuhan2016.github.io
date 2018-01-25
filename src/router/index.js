import Vue from 'vue'
import Router from 'vue-router'
// 全加载
// import Index from '../components/Index'
// 懒加载
const index = () => import('../components/index')
const moneyCounter = ()=> import('../components/money-counter')
const font3D = () => import('../components/font-3D')
const textPrint = () => import('../components/text-print')
const mine = () => import('../components/mine')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/moneyCounter',
    name: 'moneyCounter',
    component: moneyCounter
  }, {
    path: '/font3D',
    name: 'font3D',
    component: font3D
  }, {
    path: '/textPrint',
    name: 'textPrint',
    component: textPrint
  }, {
    path: '/mine',
    name: 'mine',
    component: mine
  }]
})