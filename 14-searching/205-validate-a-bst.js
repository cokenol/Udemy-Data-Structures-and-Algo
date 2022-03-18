class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
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
