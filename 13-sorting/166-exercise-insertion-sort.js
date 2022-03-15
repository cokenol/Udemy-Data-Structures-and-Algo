function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1
    let min = [arr[i], i]
    console.log("i:", i, "arr", ...arr, min)
    while (j <= arr.length) {
      // console.log("j:", j, "min:", min)
      if (min[0] > arr[j]) {
        min = [arr[j], j]
      }
      j++
    }
    if (i !== min[1]) {
      temp = arr[i]
      arr[i] = min[0]
      arr[min[1]] = temp
    }
  }
}

arr = [8, 6, 1, 10, 5, 4, 3, 2, 7, 9]

insertionSort(arr)
console.log(arr)

const num = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
insertionSort(num)
console.log(num)
