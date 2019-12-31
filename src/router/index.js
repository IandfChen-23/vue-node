import Vue from 'vue'
import Router from 'vue-router'
import ShopMall from '@/components/pages/ShopMall'
import Register from '@/components/pages/register'
import Login from '@/components/pages/login'
import Goods from '@/components/pages/goods'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'ShopMall',
      component: ShopMall
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    }
  ]
})
