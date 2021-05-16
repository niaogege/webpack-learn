/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-07 22:19:43
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 20:38:20
 * @FilePath: \vite-project-based:\learn\webpack-learn\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import AModule from './modules/a'
import BModule from './modules/b'
import createPlugin from './plugin'
const myPlugin = new createPlugin({name: 'myPlugin'})
Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [myPlugin],
  state: {
    name: 'cpp',
    path: 'index'
  },
  mutations: {
    increment(state) {
      state.name = 'cpp + wmh'
    },
    CHANGE_NAME: (state, name) => {
      console.log('index')
      state.name = 'INDEX——muatation: cpp-' + name
    }
  },
  actions: {
    AllAction(context) {
      console.log('context All', context)
    }
  },
  modules: {
    AModule,
    BModule
  },
})
export default store