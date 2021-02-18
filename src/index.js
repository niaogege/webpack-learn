/*
 * @Author: your name
 * @Date: 2020-11-15 17:20:16
 * @LastEditTime: 2021-02-13 20:20:17
 * @LastEditors: cpp
 * @Description: In User Settings Edit
 * @FilePath: \vue_studyd:\learn\webpack-learn\src\index.js
 */
import Vue from '../node_modules/vue/dist/vue.js'
import app from './App.vue'
import router from './router.js'

new Vue({
  router,
  render: (h) => h(app)
}).$mount('#app')