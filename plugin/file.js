/*
 * @Author: cpp
 * @Date: 2021-03-14 17:06:11
 * @LastEditors: cpp
 * @LastEditTime: 2021-03-14 17:39:09
 * @FilePath: \webpack-learn\plugin\file.js
 */
function FileListPlugin(options) {
  console.log('options', options)
}
FileListPlugin.prototype.apply = function(compiler) {
  compiler.hooks.emit.tapAsync('FileListPlugin', function(compilation, callback) {
    var filelist = 'In this build :\n'
    for(let filename in compilation.assets) {
      filelist += (`- ${filename}\n`)
    }
    compilation.assets['cpp.md'] = {
      source: function() {
        return filelist
      },
      size: function() {
        return filelist.length
      }
    }
    callback()
  })
}
module.exports = FileListPlugin