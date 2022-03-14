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
  remove(value) {
    if (!this.root) {
      return false
    }
    let found = this.root
    let prev = null
    // find the value in BST
    while (found.value !== value) {
      prev = found
      if (value > found.value) {
        found = found.right
      } else {
        found = found.left
      }
      if (!found) {
        return false
      }
    }
    console.log("remove=", value, "found=", found.value)
    // Remove value from BST if found
    // Option 1: No right child
    if (!found.right) {
      if (!prev) {
        this.root = found.left
      } else {
        if (found.value < prev.value) {
          prev.left = found.left
        } else if (found.value > prev.value) {
          prev.right = found.left
        }
      }
      return
    }
    // Option 2 Right child which doesnt have a left child
    if (!found.right.left) {
      if (!prev) {
        this.root = found.left
      } else {
        found.right.left = found.left
        if (found.value < prev.value) {
          prev.left = found.right
        } else if (found.value > prev.value) {
          prev.right = found.right
        }
      }
      return true
    }
    // Option 3 Right child that has a left child
    if (found.right) {
      //find the Right child's left most child
      let leftmost = found.right.left
      let leftmostParent = found.right
      while (leftmost.left) {
        leftmostParent = leftmost
        leftmost = leftmost.left
      }
      //Parent's left subtree is now leftmost's right subtree
      leftmostParent.left = leftmost.right
      leftmost.left = found.left
      leftmost.right = found.right

      if (!prev) {
        this.root = leftmost
      } else {
        if (found.value < prev.value) {
          prev.left = leftmost
        } else if (found.value > prev.value) {
          prev.right = leftmost
        }
      }
      return true
    }
    // Option 4: No right and left child
    if (!found.right && !found.left) {
      if (!prev) {
        this.root = null
      }
      return true
    }
  }
}

function traverse(node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}

const tree = new BinarySearchTree()
tree.insert(9)
// console.log(tree)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// console.log(JSON.stringify(traverse(tree.root)))
// console.log(1, tree.lookup(1))
// console.log(4, tree.lookup(4))
// console.log(56, tree.lookup(56))
console.log(JSON.stringify(traverse(tree.root)))
tree.remove(9)
console.log(tree)
//       9
//    4     20
//  1  6  15  170
