import TheLoading from './TheLoading.vue'
// import Vue from 'vue'
export default {
  install(Vue, options) {
    console.log('options', options);
    console.log('TheLoading', TheLoading);
    Vue.component(TheLoading.name, TheLoading)
  }
}