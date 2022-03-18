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
    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        return currentNode
      }
    }
    return null
  }
  remove(value) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    let parentNode = null
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left
          if (parentNode === null) {
            this.root = currentNode.right
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left
          let leftmostParent = currentNode.right
          while (leftmost.left !== null) {
            leftmostParent = leftmost
            leftmost = leftmost.left
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right
          leftmost.left = currentNode.left
          leftmost.right = currentNode.right

          if (parentNode === null) {
            this.root = leftmost
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost
            }
          }
        }
        return true
      }
    }
  }
  breadthFirstSearch() {
    let currentNode = this.root
    let list = []
    let queue = []
    queue.push(currentNode)
    console.log(queue)
    while (queue.length > 0) {
      console.log(queue)
      currentNode = queue.shift()
      console.log(currentNode.value)
      list.push(currentNode.value)
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return list
  }
  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list
    }
    let currentNode = queue.shift()
    list.push(currentNode.value)
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }
    return this.breadthFirstSearchR(queue, list)
  }
  DFSInOrder() {
    return traverseInOrder(this.root, [])
  }
  DFSPreOrder() {
    return traversePreOrder(this.root, [])
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, [])
  }
  isValidBST(root) {
    if (!root) {
      return false
    }

    const helper = (root, min, max) => {
      if (!root) {
        return true // We hit the end of the path
      }

      if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
        return false // current node's val doesn't satisfy the BST rules
      }

      // Continue to scan left and right
      return helper(root.left, min, root.val) && helper(root.right, root.val, max)
    }

    return helper(root, null, null)
  }
}
function traverseInOrder(node, list) {
  // console.log(node.value)
  if (node.left) {
    traverseInOrder(node.left, list)
  }
  list.push(node.value)
  if (node.right) {
    traverseInOrder(node.right, list)
  }
  return list
}
function traversePreOrder(node, list) {
  // console.log(node.value)
  list.push(node.value)
  if (node.left) {
    traversePreOrder(node.left, list)
  }
  if (node.right) {
    traversePreOrder(node.right, list)
  }
  return list
}
function traversePostOrder(node, list) {
  // console.log(node.value)
  if (node.left) {
    traversePostOrder(node.left, list)
  }
  if (node.right) {
    traversePostOrder(node.right, list)
  }
  list.push(node.value)
  return list
}
//     9
//  4     20
//1  6  15  170
// InOrder - [1, 4, 6, 9, 15, 20, 170]
// PreOrder - [9, 4, 1, 6, 20, 15, 170]
// PostOrder - [1, 6, 4, 15, 170, 20, 9]

const tree = new BinarySearchTree()
// tree.insert(9)
// tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
// tree.remove(170)
// console.log(tree.breadthFirstSearch())
// console.log(tree.breadthFirstSearchR([tree.root], []))
// JSON.stringify(traverse(tree.root))
// console.log(...tree.DFSInOrder())
// console.log(...tree.DFSPreOrder())
// console.log(...tree.DFSPostOrder())

function traverse(node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}

function isValidBST(root) {
  if (!root) {
    return false
  }

  const helper = (root, min, max) => {
    if (!root) {
      return true // We hit the end of the path
    }
    console.log("root=", root.value, "min", min, "max", max, (min !== null && root.value <= min) || (max !== null && root.value >= max) ? "false" : " true", "\n=============================\n")

    if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
      return false // current node's value doesn't satisfy the BST rules
    }

    // Continue to scan left and right
    return helper(root.left, min, root.value) && helper(root.right, root.value, max)
  }

  return helper(root, null, null)
}
/*        5
      4       10
    2  6    8  12
   1          6  13*/
five = new Node(5)
four = new Node(4)
ten = new Node(10)
five.left = four
five.right = ten
ten.left = new Node(8)
twelve = new Node(12)
ten.right = twelve
twelve.left = new Node(6)
twelve.right = new Node(13)

two = new Node(2)
two.left = new Node(1)
four.left = two
six = new Node(6)
four.right = six

console.log(isValidBST(five))