class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
    } else {
      let currentNode = this.root
      while (currentNode) {
        if (newNode.value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode
            return
          }
          currentNode = currentNode.right
        } else {
          if (currentNode.left === null) {
            currentNode.left = newNode
            return
          }
          currentNode = currentNode.left
        }
      }
    }
  }

  lookup(value) {
    let currentNode = this.root
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode
      }
      if (value > currentNode.value) {
        currentNode = currentNode.right
      } else {
        currentNode = currentNode.left
      }
    }
    return false
  }
  // remove
}

function traverse(node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}

const tree = new BinarySearchTree()
tree.insert(9)
console.log(tree)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)))
console.log(1, tree.lookup(1))
console.log(4, tree.lookup(4))
console.log(56, tree.lookup(56))
//       9
//    4     20
//  1  6  15  170
