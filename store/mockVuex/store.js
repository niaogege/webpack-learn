let Vue
export class Store {
  constructor(options = {}) {
    this.committing = false
    const {state} = options
    this._actions = Object.create(null)
    this._mutations = Object.create(null)
    this._getters = Object.create(null)
    regeistry(this, {
      getters: options.getters,
      mutations: options.mutations,
      actions: options.actions
    })
    const store = this
    let {
      commit, dispatch
    } = this
    this.commit = function boundCommit(type, payload) {
      return commit.call(store, type, payload)
    }
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store, type, payload)
    }
    resetStoreVm(this, state)
  }
  get state() {
    return this._vm._data.$$state
  }
  commit(type, payload) {
    const handler = this._mutations[type]
    this._withCommit(() => {
      handler(payload)
    })
  }
  dispatch(type, payload) {
    const handler = this._actions[type]
    handler(payload)
  }
  _withCommit(fn) {
    const committing = this.committing
    this.committing = true
    fn()
    this.committing = committing
  }
}
function resetStoreVm(store, state) {
  store.getters = {}
  let computed = {}
  let getters = store._getters
  Object.keys(getters).forEach(key => {
    console.log('getters', getters)
    computed[key] = () => getters[key]()

    Object.defineProperty(store.getters, key, {
      get: () => store._vm[key],
      enumerable: true
    })
  })
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed
  })
  store._vm.$watch(function() {
    return this._data.$$state
  }, () => {
    if(!store.committing) {
      throw new Error('state 只能通过mutation修改')
    }
  }, {
    deep: true,
    sync: true
  })
}
function regeistry(store, options) {
  Object.keys(options.mutations).forEach(type => {
    registerMutation(store, type, options.mutations[type])
  })
  Object.keys(options.getters).forEach(type => {
    registerGetter(store, type, options.getters[type])
  })
  Object.keys(options.actions).forEach(type => {
    registerAction(store, type, options.actions[type])
  })
}
// 包装getter函数
function registerGetter(store, type, rawGetter) {
  store._getters[type] = function() {
    return rawGetter(store.state, store.getters)
  }
}
// 包装mutation
function registerMutation(store, type, handler) {
  store._mutations[type] = function(payload) {
    return handler.call(store, store.state, payload)
  }
}
// 包装actions
function registerAction(store, type, handler) {
  store._actions[type] = function(payload) {
    handler.call(store, {
      dispatch: store.dispatch,
      commit: store.commit,
      getters: store.getters,
      state: store.state
    }, payload)
  }
}
export function install(_Vue) {
  Vue = _Vue
  _Vue.mixin({
    beforeCreate: vuexInit
  })
}
// maoState对象映射
export function mapState(states) {
  const res = {}
  normalizeMap(states).forEach(({key, val}) => {
    res[key] = function mappingState() {
      let state = this.$store.state
      let getters = this.$store.getters
      return typeof val === 'function' 
        ? val.call(this, state, getters)
        : state[val]
    }
  })
  return res
}

export function mapGstter(states) {
  const res = {}
  normalizeMap(states).forEach(({key, val}) => {
    res[key] = function mappingGetter() {
      let state = this.$store.getters
      return state[val]
    }
  })
  return res
}
function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(key => ({ key, val: key }))
    : Object.keys(map).map(key => ({ key, val: map[key] }))
}
function vuexInit() {
  const options = this.$options
  if (options.store) {
    this.$store = options.store
  } else if (options.parent && options.parent.$store){
    this.$store = options.parent.$store
  }
}