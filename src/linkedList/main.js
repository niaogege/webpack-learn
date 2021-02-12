/*
 * @Author: cpp
 * @Date: 2021-01-02 10:54:38
 * @LastEditors: cpp
 * @LastEditTime: 2021-02-12 17:17:05
 * @FilePath: \vue_studyd:\learn\webpack-learn\src\linkedList\main.js
 */
import { Node, defaultEquals, DoublyNode, defaultCompare, Compare } from './utils'
export class LinkedList { 
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined
    this.equalsFn = equalsFn
  }
  // 添加元素
  push(element) {
    const node = new Node(element);
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while(current.next !== undefined && current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.count ++
  }
  // 目标索引的元素
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for(let i = 0; i < index && node != null; i ++) {
        node = node.next
      }
      return node
    }
    return undefined
  }
  // 特定位置移除
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        // let previous;
        // for (let i = 0; i <index; i ++) {
        //   previous = current
        //   current = current.next
        // }
        // previous.next = current.next
        let previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
  // 某一位置插入元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element) 
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count ++
      return true
    }
    return false
  }
  // 根据元素返回索引
  indexOf(element) {
    let current = this.head 
    for (let i = 0; i < this.count && current != null; i ++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.size() === 0
  }
  getHead() {
    return this.head
  }
  getToString() {
    if (this.head === null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1;i < this.size() && current != null; i ++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
  // 两两交换
  swapPairs() {
    const head = this.head
    if (!head) return null;
    let helper = function(node) {
      const tempNext = node.next
      if (tempNext) {
        const tempNextNext = node.next.next
        node.next.next = node
        if (tempNextNext) {
          node.next = helper(tempNextNext)
        } else {
          node.next = null
        }
      }
      return tempNext || node
    }
    this.head = helper(head);
    console.log('head', this.head);
    // return res
  }
}
/**
 * @Author: cpp
 * @Date: 2021-01-03 19:09:46
 * @Description: 双向链表
 */
export class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined; // 最后一个元素的引用
  }
  push(element) {
    const node = new DoublyNode(element);
    if (this.head == null) {
      this.head = node;
      this.tail = node; // NEW
    } else {
      // attach to the tail node // NEW
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }
  insert(element, index) {
    if(index >= 0 && index <= this.count) {
      let node = new DoublyNode(element)
      let current = this.head;
      // 起点位置插入一个新元素
      if (index === 0) {
        // 如果双向链表为空 只需要把head和tail执行这个新节点
        if (this.head == null) {
          this.head = node
          this.tail = node
        } else {
          // current变量将是链表中第一个元素的引用
          node.next = this.head
          current.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
        node.prev = previous
        current.prev = node
      }
      this.count ++
      return true
    }
    return false
  }
  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      if (this.index === 0) {
        this.head = current.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        current = this.getElementAt(index)
        const previous = current.prev
        current = previous.next
        previous.next = current.next
        current.next.prev = previous
      }
      this.count --
      return current.element
    }
    return undefined
  }
}

export class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }
  // 链表尾部的next指向head
  insert(element, index) {
    if(index >= 0 && index <= this.count) {
      let node = new DoublyNode(element)
      let current = this.head;
      // 起点位置插入一个新元素
      if (index === 0) {
        // 如果双向链表为空 只需要把head和tail执行这个新节点
        if (this.head == null) {
          this.head = node
          node.next = this.head
        } else {
          // current变量将是链表中第一个元素的引用
          node.next = current
          current = this.getElementAt(this.size())
          this.head = node
          current.next = this.head
        }
      }  else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count ++
      return true
    }
    return false
  }  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined
        } else {
          const removed = this.head
          current = this.getElementAt(this.size())
          this.head = this.head.next
          current.next = this.head
          current = removed
        }
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count --
      return current.element
    }
    return undefined
  }

}

export class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.equalsFn = equalsFn;
    this.compareFn = compareFn
  }
  push(element) {
    if (this.isEmpty()) {
      super.push(element);
    } else {
      const index = this.getIndexNextSortedElement(element);
      super.insert(element, index);
    }
  }
  getIndexNextSortedElement(element) {
    let current = this.head
    let i = 0;
    for (; i < this.size() && current; i ++) {
      const comp = this.compareFn(element, current.element)
      if (comp === Compare.LESS_THAN) {
        return i
      }
      current = current.next
    }
    return i
  }
  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, index === 0 ? index : 0)
    }
    const pos = this.getIndexNextSortedElement(element) 
    return super.insert(element, pos)
  }
}

