/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-07 22:19:43
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-15 21:46:53
 * @FilePath: \vite-project-based:\learn\webpack-learn\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

console.log('vuex', Vuex)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'cpp'
  },
  mutations: {
    increment(state) {
      state.name='cpp + wmh'
    }
  }
})
export default store