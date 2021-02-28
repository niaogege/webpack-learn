/*
 * @Author: cpp
 * @Date: 2021-02-13 18:50:56
 * @LastEditors: cpp
 * @LastEditTime: 2021-02-27 18:53:01
 * @FilePath: \webpack-learn\src\router.js
 */
import Router from 'vue-router'
import Vue from '../node_modules/vue/dist/vue.js'
// import NameComponent from './render/name';
// import Test from './render/test';
import Main from './main'
import Tree from './tree'
import LinkedList from './linkedList/index'
import Sort from './sort'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/linkedList',
      component: LinkedList
    },
    {
      path: '/tree',
      component: Tree
    },{
      path: '/sort',
      component: Sort
    }
    // {
    //   path: '/name',
    //   component: NameComponent
    // },
    // {
    //   path: '/test',
    //   component: Test
    // }
  ]
})
