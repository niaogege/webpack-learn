/*
 * @Author: cpp
 * @Date: 2021-02-13 18:50:56
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-15 22:52:41
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\router.js
 */
import Router from 'vue-router'
import Vue from 'vue'
// import NameComponent from './render/name';
// import Test from './render/test';
const Main = () => import('./main')
const Tree = () => import('./tree')
const LinkedList = () => import('./linkedList')
const Sort = () => import('./Sort')
const Render = () => import('./render')
const KeepAlive = () => import('./keepAlive')
const Http = () => import('./http')
// import Main from './main'
// import Tree from './tree'
// import LinkedList from './linkedList/index'
// import Sort from './sort'
// console.log('Router', Router)
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
    }, 
    {
      path: '/sort',
      component: Sort
    }, 
    {
      path: '/render',
      component: Render
    }, 
    {
      path: '/keepalive',
      component: KeepAlive
    },
    {
      path: '/http',
      component: Http
    }
  ]
})
