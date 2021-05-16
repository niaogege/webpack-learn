/*
 * @Author: your name
 * @Date: 2020-11-17 19:31:22
 * @LastEditTime: 2021-04-10 19:57:40
 * @LastEditors: cpp
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\build\webpack.common.js
 */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin') // 复制并压缩html
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 分析打包时间
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
// const MyFirstWebpckPlugin = require('../plugin/plugin')
// const FileLIstPlugin = require('../plugin/file')
const resolve = (dist) => path.resolve(__dirname, dist)
module.exports = smp.wrap({
  entry: resolve('../src/index.js'),
  output: {
    path: resolve('../dist'),
    filename: '[name][hash:8].js',
    chunkFilename: '[name].[chunkhash:6].bundle.js',
    // publicPath: resolve('../public'),
  },
  // resolveLoader: {
  //   alias: {
  //     'cpp-loader': path.resolve(__dirname, '../loaders/a.js')
  //   }
  // },
  module: {
    rules: [
      // 转换 ES6 代码，解决浏览器兼容问题
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // 支持缓存转换出的结果
              cacheCompression: true,
              compact: true
            }
          }
        ],
        include: [resolve('../src')]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }],
        include: [resolve('../src')]
      },
      // 编译css，自动添加前缀，抽取css到独立文件
      {  
        test: /\.css$/,  
        use: ['style-loader', 'css-loader'],  
        include: [resolve('../src')]
      },
      // 处理静态资源
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ],
        include: [resolve('../src')]
      },
      // 解析vue文件
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        },
        include: [resolve('../src')]
        // exclude: /node_modules/
      }
    ]
  },
  resolve: {
    // resolve.module 用于配置webpack去哪些目录下寻找第三方模块
    modules: [
      resolve('../src'), path.resolve(__dirname, '../node_modules')
    ],
    // import导入时别名，减少耗时的递归解析操作
    alias: {
      '@': resolve('../src')
    },
    // 尽可能的减少后缀尝试的可能性
    // 如遇到 require('./data') 先找data.js再去找data.json,然后再去找data.vue
    // 列表越长 尝试的次数越多 影响构建
    extensions: ['.js', '.vue']
  },
  optimization: {
    splitChunks: {
      // 对所有的包进行拆分
      chunks: 'all',
    //   cacheGroups: {
    //     test: ''
    //   }
    }
  },
  plugins: [
    // new MyFirstWebpckPlugin({
    //   options: true,
    //   name: 'common',
    //   mode: 'Test'
    // }),
    // new FileLIstPlugin({
    //   name: 'cppmd'
    // }),
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 生成的文件名
      filename: 'index.html', // 生成html文件的名称
      inject: true, // 将js文件查到
      favicon: path.resolve(__dirname, '../public/avatar.png'),
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ],
  // 配置性能
  performance: {
    hints: false // 当打包是出现超过特定文件限制的资产和入口点，performance 控制 webpack 如何通知
  }
})