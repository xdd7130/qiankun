import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Iframe from '@/components/Iframe'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: 'hello'
    },
    {
      path: '/iframe',
      name: 'Iframe',
      component: Iframe
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
