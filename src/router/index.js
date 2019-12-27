import Vue from 'vue'
import Router from 'vue-router'
import ShopMall from '@/components/pages/ShopMall'
import Register from '@/components/pages/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShopMall',
      component: ShopMall
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
