/*
 * @Author: your name
 * @Date: 2020-11-15 17:20:16
 * @LastEditTime: 2021-05-15 21:47:05
 * @LastEditors: cpp
 * @Description: In User Settings Edit
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\index.js
 */
import Vue from 'vue'
import app from './App'
import router from './router'
import store from '../store'

Vue.performance = true

new Vue({
  router,
  store,
  render: (h) => h(app)
}).$mount('#app')
// new Vue({
//   router,
//   el: '#app',
//   render: function (h) {
//     return h('div', {
//       attrs: {
//         id: 'app',
//         class: 'rootApp'
//       }
//     }, this.message)
//   },
//   data: {
//     message: 'rootMessage'
//   }
// })