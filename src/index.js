/*
 * @Author: cpp
 * @Date: 2020-11-15 17:20:16
 * @LastEditTime: 2020-12-12 23:09:24
 * @LastEditors: cpp
 * @Description: In User Settings Edit
 * @FilePath: \plugin-cppd:\learn\webpack-learn\src\index.js
 */
import Vue from 'vue/dist/vue'
import app from './App.vue'
import TheLoading from '../src/component/index.js'

console.log('TheLoading', TheLoading);
Vue.use(TheLoading)

new Vue({
  render: (h) => h(app)
}).$mount('#app')