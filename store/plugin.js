/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-16 20:11:21
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 20:25:41
 * @FilePath: \vite-project-based:\learn\webpack-learn\store\plugin.js
 */
export default function createPlugin() {
  return store => {
    store.subscribe((mutation, state) => {
      console.log('subscribe', mutation)
      console.log('state', state)
    }),
    store.subscribeAction({
      before: (action, state) => {
        console.log(`before action ${action.type}`, state)
      },
      after: (action, state) => {//提交action之后
        console.log(`after action ${action.type}`, state)
      }
    })
  }
}