// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css'

Vue.use(ElementUI);
import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from 'qiankun';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

registerMicroApps([
  {
    name: 'micro-vue2-app1',
    entry: '//localhost:8085',
    container: '#microApp1',
    activeRule: '/micro-vue2-app1',
    props: {
      container: '#microApp1',
    }
  },
  // {
  //   name: 'vue app',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#yourContainer2',
  //   activeRule: '/yourActiveRule2',
  // },
], {

  beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
  ],
  beforeMount: [
      app => {
          console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
  ],
  afterUnmount: [
      app => {
          console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
          location.reload(true)
      },
  ],
});

addGlobalUncaughtErrorHandler(event => {
  const { msg } = event;
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
      console.log('加载失败');
  }
});
start();
