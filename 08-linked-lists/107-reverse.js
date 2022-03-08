class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
    // console.log(this)
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length += 1
    // console.log(this)
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    // array.push("null")
    // return array.join(" --> ")
    return array
  }

  insert(index, value) {
    let currentNode = this.head
    if (index === 0) {
      return this.prepend(value)
    }
    if (index >= this.length) {
      return this.append(value)
    }
    for (let i = 0; i < this.length; i++) {
      if (i == index - 1) {
        const oldnext = currentNode.next
        const insertNode = new Node(value)
        currentNode.next = insertNode
        insertNode.next = oldnext
        this.length++
        return
      }
      currentNode = currentNode.next
    }
  }
  // My remove solution
  remove(index) {
    if (index === 0) {
      this.head = this.head.next
      this.length--
      return
    }
    let currentNode = this.head
    for (let i = 0; i < this.length; i++) {
      if (i == index - 1) {
        currentNode.next = currentNode.next.next
        this.length--
        return
      }
      if (index >= this.length && i == this.length - 2) {
        currentNode.next = null
        this.length--
        return
      }
      currentNode = currentNode.next
    }
  }

  // traverseToIndex(index) {
  //   let counter = 0
  //   let currentNode = this.head
  //   while (counter !== index) {
  //     currentNode = currentNode.next
  //     counter++
  //   }
  //   return currentNode
  // }
  // // instructor solution
  // remove(index) {
  //   // check params
  //   const leader = this.traverseToIndex(index - 1)
  //   const unwantedNode = leader.next
  //   leader.next = unwantedNode.next
  //   this.length--
  //   return this.print()
  // }

  print() {
    console.log(...myLinkedList.printList(), "this.length=", myLinkedList.length)
  }

  // My solution
  reverse() {
    console.log("reversing")
    if (!this.head.next) {
      return
    }
    let currentNode = this.head
    let nextNode = currentNode.next
    let prevNode = currentNode
    for (let i = 0; i < this.length; i++) {
      if (currentNode.next) {
        nextNode = currentNode.next
      } else {
        this.head = currentNode
        this.head.next = prevNode
        return
      }
      if (i == 0) {
        currentNode.next = null
        prevNode.next = null
        this.tail = currentNode
      } else {
        currentNode.next = prevNode
      }
      prevNode = currentNode
      currentNode = nextNode
    }
  }

  // instructor solution
  reverse2() {
    if (!this.head.next) {
      return
    }
    let first = this.head
    this.tail = this.head
    let second = first.next
    while (second) {
      const temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null
    this.head = first
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.print()

myLinkedList.insert(2, 3)
myLinkedList.print()

myLinkedList.insert(3, 4)
myLinkedList.print()

myLinkedList.insert(4, 45)
myLinkedList.print()

myLinkedList.reverse()
myLinkedList.print()
