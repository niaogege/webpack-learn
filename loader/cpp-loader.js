/*
 * @Author: cpp
 * @Date: 2021-01-09 21:34:34
 * @LastEditors: cpp
 * @LastEditTime: 2021-01-09 21:45:39
 * @FilePath: \vue_studyd:\learn\webpack-learn\loader\cpp-loader.js
 */
function loader(source) {
    console.log('处在cpp loader source', source);
    return source
}
loader.log = function () {
  console.log('log 函数');
}
module.exports = loader