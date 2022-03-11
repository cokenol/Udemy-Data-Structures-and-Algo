class Stack {
  constructor(value) {
    this.stack = new Array()
  }
  peek() {
    return this.stack[this.stack.length - 1]
  }
  push(value) {
    this.stack.push(value)
  }
  pop() {
    this.stack.pop()
  }
}

const myStack = new Stack()

myStack.push("1")
myStack.push("2")
myStack.push("3")
console.log(myStack)
// console.log(myStack.peek())

myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack)
console.log(myStack.peek())

// Discord
// Udemy
// Google
