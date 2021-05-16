/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-14 10:20:48
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-15 09:46:56
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\utils\demo.js
 */

// @ts-check
/**
 * @param {number} num
 */
export function test(num) {
  console.log(num)
} 
// @ts-ignore
const num1 = test('111')
console.log('num', num1)