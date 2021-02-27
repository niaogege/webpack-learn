<template>
  <div id="app">
    <h1 class='name' v-if="4564564" data={true}>{{name}}</h1>
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
    // console.log(Test, 'Test')
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
      // list: {}
    };
  },
};
</script>
<style lang="less" scoped>
.name {
  color: red;
}
</style>
