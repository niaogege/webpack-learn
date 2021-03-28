/*
 * @Author: cpp
 * @Date: 2021-03-28 17:12:08
 * @LastEditors: cpp
 * @LastEditTime: 2021-03-28 17:12:17
 * @FilePath: \webpack-learn\src\utils\compare.js
 */
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