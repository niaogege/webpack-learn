/*
 * @Author: cpp
 * @Date: 2021-02-15 17:12:56
 * @LastEditors: cpp
 * @LastEditTime: 2021-02-27 18:51:45
 * @FilePath: \webpack-learn\src\tree\main.js
 */
import {
  Node, Compare, defaultCompare
} from './util'
export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.root = null
    this.maxHeight = 1
    this.compareFn = compareFn
  }
  // 插入一个节点
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key) {
    // 如果要插入的节点小于根节点
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  // 中序遍历 按照上行顺序
  inOrderTraverse(cb) {
    this.inOrderTraverseNode(this.root, cb)
  }
  
  inOrderTraverseNode(node, cb) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, cb)
      cb(node.key)
      this.inOrderTraverseNode(node.right, cb)
    }
  }
  // 中序遍历迭代
  inOrderTravserseIterator(root) {
    const res = [] // 最终的结果
    const stack = []
    while(root) {
      stack.push(root)
      root= root.left
    }
    while(stack.length) {
      let current = stack.pop() // 栈顶的节点出栈 
      res.push(current.val)
      current = current.right // 获取右子树
      while(current) {
        stack.push(current)
        current = current.left
      }
    }
    return res
  }
  // 先序遍历 先祖父节点
  preOrderTraverse(cb) {
    this.preOrderTraverseNode(this.root, cb)
  }
  preOrderTraverseNode(node, cb) {
    if (node != null) {
      cb(node.key)
      this.preOrderTraverseNode(node.left, cb)
      this.preOrderTraverseNode(node.right, cb)
    }
  }
  // 后序遍历 先后代节点
  postOrderTraverse(cb) {
    this.postOrderTraverseNode(this.root, cb)
  }
  postOrderTraverseNode(node, cb) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, cb)
      this.postOrderTraverseNode(node.right, cb)
      cb(node.key)
    }
  }
  // 搜索最小值
  min() {
    return this.minNode(this.root)
  }
  minNode(node) {
    let current = node
    // 找到最左边的那个current
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }
  // 搜索最大值
  max() {
    return this.maxNode(this.root)
  }
  maxNode(node) {
    let current = node
    while(current != null && current.right != null) {
      this.maxHeight ++
      current = current.right
    }
    return current
  }
  // 搜索特定的值
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node == null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (
      this.compareFn(key, node.key) === Compare.BIGGER_THAN
    ) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  // 比较俩个树是否相同 中序遍历一样即可
  // diff(p, q) {
  //   const pArr = []
  //   const pArrFn = (val) => {
  //     pArr.push(val)
  //   }
  //   this.inOrderTraverse(p, pArrFn);
  //   const qArr = []
  //   const qArrFn = (val) => {
  //     qArr.push(val)
  //   }
  //   this.inOrderTraverse(q, qArrFn);
  //   return pArr.toString() === qArr.toString()
  // }
  // 移除一个节点
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }
  removeNode(node, key) {
    if(node == null) {
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node 
    } else {
      // 移除叶节点
      if (node.left == null && node.right == null) {
        node = null
        return node
      }
      // 移除有一个左侧或者右侧子节点的节点
      if (node.left == null) {
        node = node.right
        return node
      } else if(node.right == null) {
        node = node.left
        return node
      }
      // 移除有两个子节点的节点
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
  // 最大深度
  getMaxDepth() {
    if (this.root == null) {
      return 0
    } else {
      const leftMaxDepth = this.getMaxDepth(this.root.left)
      const rightMaxDepth = this.getMaxDepth(this.root.right)
      return 1 + Math.max(leftMaxDepth, rightMaxDepth)
    }
  }
  // 层序遍历
  levelOrder() {
    const root = this.root
    var res = []
    root && res.push([root.key])
    // 返回每一层的数据
    const countArr = (node) => {
      var arr = []
      let left = node.left
      let right = node.right
      while(
        left != null && right != null
      ) {
        arr.push(left.key)
        left = left.left
        arr.push(right.key)
        right = right.right
      }
      return arr
    }
    // 每一层的数据放到数组里
    // for(let i = 0; i < this.getMaxDepth; i ++) {
    // }
    const arr1 = countArr(root)
    arr1 && arr1.length && res.push(arr1)
    console.log('arr1', arr1)
    return res
  }
  levelOrderdfs() {
    if (!this.root) {return []}
    const res = []
    const dfs = (node, step, res) => {
      if (node !== null) {
        if (!res[step]) {
          res[step] = []
        }
        res[step].push(node.key)
        dfs(node.left, step + 1, res)
        dfs(node.right, step + 1, res)
      }
    }
    dfs(this.root, 0, res)
    return res
  }
  levelOrderbfs() {
    
    // 
  }
  // 所有路径
  binaryTreePaths(root) {
    if (root == null) return []
    const queue = [] // 暂存队列
    const maxLeft = (node) => {
      let arr = []
      if (node && node.left != null) {
        arr.push(node.val)
        node = node.left
      }
      arr.push(node.val)
      return arr
    }
    queue.push(maxLeft(root))
  }
}