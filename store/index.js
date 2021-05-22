/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-07 22:19:43
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-22 22:33:38
 * @FilePath: \vite-project-based:\learn\webpack-learn\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import AModule from './modules/a'
import BModule from './modules/b'
import createPlugin from './plugin'
// const myPlugin = new createPlugin({name: 'myPlugin'})
import CppVuex from './mockVuex'

Vue.use(CppVuex)

const store = new CppVuex.Store({
  // plugins: [myPlugin],
  state: {
    name: 'cpp',
    path: 'index'
  },
  getters: {
    getterTitle(state) {
      return 'cpp Getter:' + state.name
    }
  },
  mutations: {
    CHANGE_NAME(state, name) {
      console.log('index')
      state.name = 'INDEX——muatation: cpp-' + name
    }
  },
  actions: {
    AllAction({commit}) {
      commit('CHANGE_NAME', 'cppppp')
    }
  },
})
export default store