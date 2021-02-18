/*
 * @Author: cpp
 * @Date: 2021-02-13 19:32:55
 * @LastEditors: cpp
 * @LastEditTime: 2021-02-13 19:34:33
 * @FilePath: \vue_studyd:\learn\webpack-learn\src\tree\util.js
 */
export class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}
export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}