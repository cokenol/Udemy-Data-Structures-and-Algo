function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  // if (array.length === 0) {
  //   throw new Error("Something went badly wrong!")
  // }
  // Split Array in into right and left.

  return merge(mergeSort(array.slice(0, array.length / 2)), mergeSort(array.slice(array.length / 2)))
}

function merge(left, right) {
  let merged = []
  // console.log("left", left, "right", right)
  while (left.length > 0 || right.length > 0) {
    if (left.length === 0 && right.length > 0) {
      merged.push(right.shift())
    } else if (left.length > 0 && right.length === 0) {
      merged.push(left.shift())
    } else if (left[0] > right[0]) {
      merged.push(right.shift())
    } else {
      merged.push(left.shift())
    }
  }
  // console.log("merged=", ...merged, "\n=====================\n")
  return merged
}

const num = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const answer = mergeSort(num)
console.log(...num, "\n")
console.log(...answer, "\n=============================\n")

let nums = []
for (let i = 0; i < 1000; i++) {
  nums.push(Math.round(Math.random() * 100))
}

console.log(...nums, "\n")
console.log(...mergeSort(nums), "\n=============================\n")
