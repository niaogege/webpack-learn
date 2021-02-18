/*
 * @Author: cpp
 * @Date: 2021-02-15 17:12:56
 * @LastEditors: cpp
 * @LastEditTime: 2021-02-17 19:54:55
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
      this.inOrderTraverseNode(node.left, cb);
      cb(node.key);
      this.inOrderTraverseNode(node.right, cb);
    }
  }
  // 先序遍历 先祖父节点
  preOrderTraverse(cb) {
    this.preOrderTraverseNode(this.root, cb)
  }
  preOrderTraverseNode(node, cb) {
    if (node != null) {
      cb(node.key);
      this.preOrderTraverseNode(node.left, cb);
      this.preOrderTraverseNode(node.right, cb);
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
    let current = node;
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
      this.maxHeight ++;
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
  getMaxHeight() {
    if (root == null) {
      return 0
    } 
    const current = root
    const noop = (node, order) => {
        let num = 0;
        while (node[order] != null) {
            num = num + 1
            node = node[order]
        }
        return num + 1
    }
    const num1 = noop(current, 'right')
    const num2 = noop(current, 'left')
    return Math.max(num1, num2) 
  }
  getMaxDepth() {
    if (this.root == null) {
      return 0
    } else {
      const leftMaxDepth = getMaxDepth(this.root.left);
      const rightMaxDepth = getMaxDepth(this.root.right);
      console.log('leftMaxDepth', leftMaxDepth);
      // console.log('rightMaxDepth', rightMaxDepth);
      return 1 + Math.max(leftMaxDepth, rightMaxDepth)
    }
  }
}