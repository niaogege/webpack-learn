/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-15 22:11:11
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 16:53:35
 * @FilePath: \vite-project-based:\learn\webpack-learn\server\app.js
 */

// 引入express中间件
const express = require('express')
const dataJson = require('./data.json')
// 创建web服务器
const app = express()

var birds = require('./router')
// 指定启动服务器到哪个文件夹
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}
app.use(express.static('../dist', options))
 

const bodyParser = require('body-parser')

// 允许跨域访问
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Env, TigOrigin')
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By',' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

// 处理http请求，解析
app.use(bodyParser.urlencoded({ extended: false }))

// 定义变量，做为返回数据
let myPost = {
  code: '1',
  data: {
    method: 'post',
    age: 18,
    name: 'lily'
  }
}
// let myGet = {method:'get',age:20,name:'Jack'}

app.get('/', function (req, res) {
  res.send('hello world')
})

// get 请求
app.get('/list',(req,res)=>{
  res.status(200)
  res.json(dataJson)
})

// post 请求
app.post('/changeList',(req,res)=>{
  res.status(200)
  res.json(myPost)  // 返回处理结果
})

// post 请求
app.post('/error',(req,res)=>{
  res.status(200)
  res.json({
    code: '401',
    err: 'omg !!!'
  })  // 返回处理结果
})

// cancel
app.get('/cancel', (req, res) => {
  res.status(200)
  res.json({
    code: 1,
    data: 'cancel'
  })
})
app.use('/birds', birds)

const port = 80
app.listen(port, () => console.log('The server is running 127.0.0.1:' + port))