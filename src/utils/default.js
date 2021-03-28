/*
 * @Author: cpp
 * @Date: 2021-03-28 17:13:19
 * @LastEditors: cpp
 * @LastEditTime: 2021-03-28 17:13:19
 * @FilePath: \webpack-learn\src\utils\default.js
 */
export const swap = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]] 
}
