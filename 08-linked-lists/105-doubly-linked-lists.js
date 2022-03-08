class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
    // console.log(this)
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.prev = newNode
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

  printPrev() {
    const array = []
    let currentNode = this.head
    let counter = 0
    while (currentNode !== null) {
      if (counter > 0) {
        array.push(currentNode.prev.value)
      }
      counter++
      currentNode = currentNode.next
    }
    // array.push("null")
    // return array.join(" --> ")
    console.log("Prev:", ...array)
  }

  insert(index, value) {
    let currentNode = this.head
    if (index === 0) {
      return this.prepend(value)
    }
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value)
    const leader = this.traverseToIndex(index - 1)
    const follower = leader.next
    leader.next = newNode
    newNode.prev = leader
    newNode.next = follower
    follower.prev = newNode
    this.length++
  }
  // My remove solution
  remove(index) {
    if (index === 0) {
      this.head = this.head.next
      this.length--
      return
    }
    if (index >= this.length - 1) {
      const leader = this.traverseToIndex(this.length - 2)
      leader.next = null
    } else {
      const leader = this.traverseToIndex(index - 1)
      const follower = leader.next.next
      leader.next = follower
      follower.prev = leader
    }
    this.length--
    return this.print()
  }

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
  // instructor solution
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
}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList)
myLinkedList.print()
myLinkedList.printPrev()

myLinkedList.insert(2, 3)
myLinkedList.print()
myLinkedList.printPrev()

// myLinkedList.insert(3, 4)
// myLinkedList.print()

// myLinkedList.insert(4, 45)
// myLinkedList.print()

myLinkedList.remove(6)
myLinkedList.printPrev()

myLinkedList.remove(2)
myLinkedList.printPrev()
