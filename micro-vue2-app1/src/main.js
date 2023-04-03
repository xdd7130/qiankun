// The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

import './public-path.js';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
// import store from './store';

Vue.config.productionTip = false;

// let routerData = null;
// let instance = null;
// function render(props = {}) {
//   const { container } = props;
//   console.log(container)
//   debugger
//   routerData = new VueRouter({
//     base: window.__POWERED_BY_QIANKUN__ ? '/micro-vue2-app1/' : '/',
//     mode: 'history',
//     router,
//   });

//   instance = new Vue({
//     router,
//     // store,
//     render: (h) => h(App),
//   }).$mount(container ? container.querySelector('#micro-vue2-app1') : '#app');
// }

// // 独立运行时
// if (!window.__POWERED_BY_QIANKUN__) {
//   render();
// }

// export async function bootstrap() {
//   console.log('[vue] vue app bootstraped');
// }
// export async function mount(props) {

//   debugger
//   console.log('[vue] props from main framework', props);
//   render(props);
// }
// export async function unmount() {
//   instance.$destroy();
//   instance.$el.innerHTML = '';
//   instance = null;
//   routerData = null;
// }

// 定义一个Vue实例
let instance = null
// 渲染方法
function render(props = {}) {
  const { container } = props
  instance = new Vue({
    router,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app'): '#app')
}
// 独立运行时
if(!window.__POWERED_BY_QIANKUN__) {
  render()
}
//暴露主应用生命周期钩子
/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  console.log('vue2-app bootstraped');
}
/**
 * mount ： 在应用每次进入时调用
 */
export async function mount(props) {
  console.log('vue2-app mount', props);
  render(props);
}
/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
  console.log("vue2-app unmount")
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;

}
