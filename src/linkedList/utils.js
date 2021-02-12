export class Node {
  constructor(element) {
    // this.element = element
    // this.next = undefined
    [this.element, this.next] = [element, null]
  }
}
export class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    console.log('super', element, next);
    this.prev = prev
  }
}
export function defaultEquals(a, b) {
  return a === b
}
export const counter = 10
export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}
export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}