/*
 * @Author: cpp
 * @Date: 2021-02-27 16:04:27
 * @LastEditors: cpp
 * @LastEditTime: 2021-02-27 16:28:56
 * @FilePath: \webpack-learn\prettier.config.js
 */
module.exports = {
  printWidth: 120, // 每行代码最大长度
  tabWidth: 2, //一个tab代表几个空格数，默认为80
  useTabs: false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
  semi: true, // 声明后带分号
  singleQuote: true, // 使用单引号
  jsxSingleQuote: true, // 使用单引号
  jsxBracketSameLine: true, // 启用jsx语法，> 放在末尾
  trailingComma: 'all', // 是否使用尾逗·號
};