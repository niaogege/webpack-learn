const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true,
    inline: true,
    open: true,
    contentBase: path.join(__dirname, '../public'),
    overlay: {
      errors: true,
      warnings: true
    }
  }
})