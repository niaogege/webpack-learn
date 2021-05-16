const state={
  //...
  name: 'b.js',
  path: './b.js',
  moduleName: 'BB'
}
const getters={
  //...
}
const mutations={
  CHANGE_NAME: (state, name) => {
    state.name = 'muatation: cpp-' + name
  }
}
const actions={
  //...
}
export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}