/*
 * @Author: your name
 * @Date: 2020-11-15 17:20:16
 * @LastEditTime: 2021-02-27 17:21:16
 * @LastEditors: cpp
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\src\index.js
 */
import Vue from '../node_modules/vue/dist/vue.js';
import app from './App.vue';
import router from './router.js';

new Vue({
  router,
  render: (h) => h(app)
}).$mount('#app');
