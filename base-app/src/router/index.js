import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/micro-vue2-app1',
      name: 'micro-vue2-app1',
      meta: { title: '子应用'}
    },
    {
      path: '/micro-react-app2',
      name: 'micro-react-app2',
      meta: { title: '子应用'}
    }
  ]
})
