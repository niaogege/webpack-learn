/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-23 21:41:31
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-23 21:44:51
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\tree\myMixin.js
 */
export const myMixin = {
  data() {
    return {
      title: 'myMinxin Title'
    }
  },
  created() {
    console.log('myMixin --- Created')
  },
  mounted() {
    console.log('myMixin---Mounted')
  }
}