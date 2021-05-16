/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-16 19:06:54
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 20:21:43
 * @FilePath: \vite-project-based:\learn\webpack-learn\store\modules\a.js
 */
const state={
  name: 'a.js',
  path: './a.js',
  moduleName: 'AA'
}

const mutations={
  CHANGE_NAME: (state, name) => {
    console.log('a.js中的mutation')
    state.name = 'muatation: cpp-' + name
  }
}
const actions={
  actionA: {
    root: true,
    handler(context, data) {
      console.log('context', context, data)
      context.dispatch('AllAction', 'from a.js')
    }
  },
  AllAction(context, data) {
    console.log('context a.js', context, data)
  }
}
export default{
  namespaced: true,
  state,
  mutations,
  actions
}