function quickSort(arr) {
  if (arr.length === 0) {
    return arr
  }
  const pivot = arr[arr.length - 1]
  let left = []
  let right = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  // console.log("left=", ...left, "right=", ...right)
  // console.log(...left.concat(pivot).concat(right), "\n======================\n")
  if (arr.length <= 2) {
    return left.concat(pivot).concat(right)
  }
  return quickSort(left).concat(pivot).concat(quickSort(right))
}

const num = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 0, 45, 14]

console.log(...num)
console.log(...quickSort(num), "\n===========================\n")

let nums = []
for (let i = 0; i < 20; i++) {
  nums.push(Math.round(Math.random() * 100))
}

console.log("\n===========================\n", nums.length)
console.log(...nums)

console.log(...quickSort(nums))
console.log(quickSort(nums).length, "\n===========================\n")
