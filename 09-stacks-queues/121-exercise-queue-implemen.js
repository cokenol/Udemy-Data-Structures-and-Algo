class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  peek() {
    return this.first
  }
  enqueue(value) {
    const newNode = new Node(value)
    if (!this.first) {
      this.first = newNode
    } else {
      this.last.next = newNode
    }
    this.last = newNode
    this.length++
    return this
  }

  dequeue() {
    console.log("\ndequeue", "length=", this.length, this.printList())
    if (!this.first) {
      return null
    }
    if (this.length === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
    }
    this.length--
    return this
  }

  printList() {
    const array = []
    let currentNode = this.first
    while (currentNode !== null) {
      // console.log("currentNode=", currentNode)
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
}

const myQueue = new Queue()
console.log(myQueue.enqueue("1"))
console.log(myQueue.enqueue("2"))
console.log(myQueue.enqueue("3"))
console.log(myQueue.enqueue("4"))
console.log(myQueue.printList())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.printList())

// Joy
// Matt
// Pavel
// Samir
