import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  base: '/micro-vue2-app1', // 如果作为乾坤的子应用则使用主应用中配置的路由前缀，如果是独立运行则使用根目录
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
