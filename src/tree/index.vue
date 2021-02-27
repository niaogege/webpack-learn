<!--
 * @Author: cpp
 * @Date: 2021-02-15 17:09:21
 * @LastEditors: cpp
 * @LastEditTime: 2021-02-27 17:34:04
 * @FilePath: \webpack-learn\src\tree\index.vue
-->

<template>
  <div>
    <h3>
    tree 主页 --{{title}}
    </h3>
    <section v-if="true">
      never give up
      <div>{{tree}}</div>
    </section>
  </div>
</template>
<script>
import BinarySearchTree from './main';
export default {
  data() {
    return {
      title: '寒假还剩5天',
      tree: {}
    };
  },
  methods: {},
  mounted() {
    const tree = new BinarySearchTree();
    tree.insert(7);
    tree.insert(5);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    // tree.insert(13);
    // tree.insert(12);
    // tree.insert(14);
    // tree.insert(20);
    // tree.insert(18);
    // tree.insert(25);
    
    // tree.insert(6);
    window.tree = this.tree = tree;
    // 中序
    const InOrderarr = [];
    const printNode = (val) => {
      InOrderarr.push(val);
    };
    tree.inOrderTraverse(printNode);
    console.log('InOrderarr 中序遍历', InOrderarr);
    // 先序
    const preOrderarr = [];
    const pushNode = (val) => {
      preOrderarr.push(val);
    };
    tree.preOrderTraverse(pushNode);
    console.log('preOrderarr 先序遍历', preOrderarr);
    // 后序
    const postOderarr = [];
    const postNode = (val) => {
      postOderarr.push(val);
    };
    tree.postOrderTraverse(postNode);
    console.log('postOrder 后序遍历', postOderarr);
    console.log(`最小值${tree.min().key}, 最大值${tree.max().key}`);

    // 搜索特定的值
    const isHas = tree.search(35);
    console.log('搜索特定的值5 是否存在', isHas);
    console.log('tree', tree);
  }
};
</script>