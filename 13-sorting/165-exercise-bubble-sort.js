// Time O(n^2)
// Space O(1)
function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < arr.length; i++) {
    let j = 0
    while (j < len) {
      let a = arr[j]
      let b = arr[j + 1]
      if (a > b) {
        arr[j + 1] = a
        arr[j] = b
      }
      j++
    }
    len--
  }
}

arr = [8, 6, 1, 10, 5, 4, 3, 2, 7, 9]

bubbleSort(arr)
console.log(arr)

const num = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
bubbleSort(num)
console.log(num)
