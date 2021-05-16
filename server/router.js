/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-16 11:31:35
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 11:39:07
 * @FilePath: \vite-project-based:\learn\webpack-learn\server\router.js
 */
var express = require('express')
var router = express.Router()

// middleware
router.use(function timeLog(req, res, next) {
  console.log('Time', Date.now())
  next()
})

router.get('/', function (req, res) {
  res.send('Birds home page')
})

router.get('/about', function (req, res) {
  res.send('About Bird')
})

module.exports = router
