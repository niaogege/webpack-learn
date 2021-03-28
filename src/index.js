/*
 * @Author: your name
 * @Date: 2020-11-15 17:20:16
 * @LastEditTime: 2021-03-28 09:15:10
 * @LastEditors: cpp
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\src\index.js
 */
import Vue from 'vue'
import app from './App.vue'
import router from './router.js'

new Vue({
  router,
  render: (h) => h(app)
}).$mount('#app')
