/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-23 20:30:45
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-23 20:48:10
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\components\dialog\index.js
 */
import Vue from 'vue'
import dialog from './main.vue'
console.log('dialog', dialog)
function showDialog(options) {
  const Dialog = Vue.extend(dialog)
  const parent = document.createElement('div')
  const app = new Dialog().$mount(parent)
  for (let key in options) {
    app[key] = options[key]
  }
  console.log('Dialog', Dialog)
  document.body.appendChild(app.$el)
}
export default {
  install(vue) {
    vue.prototype.$showDialog = showDialog
  }
}
