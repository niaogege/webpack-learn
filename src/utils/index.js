/*
 * @Author: cpp
 * @Date: 2021-02-28 17:09:02
 * @LastEditors: cpp
 * @LastEditTime: 2021-02-28 17:16:53
 * @FilePath: \webpack-learn\src\utils\index.js
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
export const swap = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]] 
}
