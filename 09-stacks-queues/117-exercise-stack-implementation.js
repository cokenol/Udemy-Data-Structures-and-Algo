// Linked Lists
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(value) {
    this.top = null
    this.bottom = null
    this.length = 0
  }
  peek() {
    return this.top
  }
  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.bottom = newNode
      this.top = newNode
    } else {
      const prevTop = this.top
      this.top = newNode
      this.top.next = prevTop
    }
    this.length++
  }
  pop() {
    if (!this.top) {
      return null
    }
    if (this.length === 1) {
      this.bottom = null
    }
    this.top = this.top.next
    this.length--
  }
}

const myStack = new Stack()

myStack.push("1")
myStack.push("2")
myStack.push("3")
console.log(myStack)
// console.log(myStack.peek())

myStack.pop()
console.log(myStack)
myStack.push("4")
console.log(myStack)
myStack.pop()
console.log(myStack)
myStack.pop()
console.log(myStack)
myStack.pop()
console.log(myStack)

// Discord
// Udemy
// Google
