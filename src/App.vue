<template>
  <div id="app">
    <!-- <h3 class='h3red'>标记静态节点</h3>
    <h1 class='name' v-if="4564564"  @click='sayName'>{{name}}</h1>
    <h3>
      首字符大写{{displayName}}
    </h3>
    <h3>{{aPlus}}</h3> -->
    <!-- <NameComponent name='来自父组件name'/>
    <Test name='来自Parent组件'/> -->
    <router-view></router-view>
    <!-- <LinkedList /> -->
  </div>
</template>
<script>
// import allComponent from './allComponent';
export default {
  // components: {
  //   ...allComponent
  // },
  mounted() {
    console.log('APP mounted——————', this)
    // const list = new LinkedList()
    // list.push(10)
    // list.push(15)
    // list.push(20)
    // console.log('list ', list);
    // this.list = list
    // window.list = list
    // const double =  new DoublyLinkedList()
    // // double.push(10)
    // // double.push(15)
    // // double.push(20)
    // double.insert(10, 0)
    // double.insert(15, 1)
    // double.insert(20, 2)
    // console.log('double', double);
    // window.double = double
    // // 排序链表
    // const sortList = new SortedLinkedList()
    // sortList.insert(15, 0)
    // sortList.insert(20, 2)
    // sortList.insert(10, 1)
    // console.log('sortList', sortList);
    // window.sortList = sortList
  },
  data() {
    return {
      name: 'chendap',
      focus: 'FOCUS 聚焦核心',
      test: {
        sex: 'human',
        age: 30,
      }
      // list: {}
    }
  },
  computed: {
    displayName() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1)
    },
    mockComputed() {
      return this.focus + '!!!'
    },
    aPlus: {
      get: function() {
        return 'computed aplus'
      },
      set: function(val) {
        console.log('触发 set aPlus')
        this.name = val
      }
    }
  },
  watch: {
    'test': function(newVal, oldVal) {
      console.log('foucus', newVal, oldVal)
    },
    // 'name': {
    //   handler: 'changeName',
    //   immediate: true
    // },
    'test.age': 'watchTestAge'
  },
  methods: {
    sayName() {
      // this.name = '理清先后顺序'
      // console.log('this.name', this.name)
      this.focus = '深度聚焦核心'
      this.aPlus = 'name属性改变成了 computed'
      console.log('this.focus', this)
      this.mockComputed = '设置 computed 属性'
    },
    changeName(newVal, oldVal) {
      console.log('监听watch改变 立即执行name新名称', newVal, oldVal)
    },
    watchTestAge() {
      console.log('watchTestAge——————')
    }
  }
}
</script>
<style lang="less" scoped>
.h3red{
  color: yellow;
}
.name {
  color: red;
}
</style>
