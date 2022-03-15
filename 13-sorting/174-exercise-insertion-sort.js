// instructor method using arrays
function insertionSortIns(array) {
  const length = array.length
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // move number to the first position
      array.unshift(array.splice(i, 1)[0])
    } else {
      // Find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0])
        }
      }
    }
  }
  return array
}

// My insertion sort using Linked Lists
function insertionSort(arr) {
  let minNode = new Node(arr[0])
  for (let i = 1; i < arr.length; i++) {
    const newNode = new Node(arr[i])
    let counter = 0
    let currentNode = minNode
    let parentNode = new Node(0)
    while (counter < i) {
      // Insert before currentNode if newNode smaller than currentNode
      if (newNode.value < currentNode.value) {
        // If newNode smaller than all num in Lists then newNode as minNode
        if (counter === 0) {
          minNode = newNode
        }
        newNode.next = currentNode
        parentNode.next = newNode
        break
      }
      // Move to the end of lists if currentNode next is null
      if (!currentNode.next) {
        currentNode.next = newNode
        break
      }
      parentNode = currentNode
      currentNode = currentNode.next
      counter++
    }
  }
  return printList(minNode)
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function printList(List) {
  let newArr = []
  while (List) {
    newArr.push(List.value)
    List = List.next
  }
  return newArr
}
arr = [8, 6, 1, 10, 5, 4, 3, 2, 7, 9]

console.log(...insertionSortIns(arr))

num = [6, 5, 3, 1, 8, 7, 2, 4]

console.log(...insertionSortIns(num))
