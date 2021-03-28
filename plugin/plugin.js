const Compiler = require('webpack/lib/Compiler')

/*
 * @Author: cpp
 * @Date: 2021-03-13 21:31:05
 * @LastEditors: cpp
 * @LastEditTime: 2021-03-14 21:00:28
 * @FilePath: \webpack-learn\plugin\plugin.js
 */
function MyFirstWebpckPlugin(options) {
  console.log('我的首个插件————————', options)
}
const pluginName = 'MyFirstWebpckPlugin'
MyFirstWebpckPlugin.prototype.apply = function(compiler) {
  // compiler对象代表了完整的webpack环境配置
  // 指定挂载到webpack自身的事件钩子
  // compiler.hooks.compile.tap(pluginName, function(compilationParams) {
  //   console.log('环境准备好了', Object.keys(compilationParams))
  // })
  compiler.hooks.emit.tap(pluginName, function(compilation) {
    // 处理内部实例的特定数据
    // console.log('————compilation————', Object.keys(compilation))
    // console.log('————compilation.hooks————', Object.keys(compilation.hooks))
    if (compilation.chunks && compilation.chunks.length) {
      compilation.chunks.forEach((chunk) => {
      // 检索chunk模块
        if (chunk && chunk.files && chunk.files.length) {
          chunk.files.forEach((fileName) => {
            console.log('fileName_____', fileName)
          })
        }
      })
    }

    // compilation 代表一次资源版本构建
    compilation.hooks.finishModules.tap(pluginName, (module) => {
      console.log('——————chunks——————', module)
    })
  })
}
module.exports = MyFirstWebpckPlugin

