// Naive
function hasPairWithSum(arr, sum) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        return true
      }
    }
  }
  return false
}

// better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set()
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true
    }
    mySet.add(sum - arr[i])
    // console.log(`Element=${arr[i]}`)
    // console.log(mySet)
  }
  return false
}

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9))
