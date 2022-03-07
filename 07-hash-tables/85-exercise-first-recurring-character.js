// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// Return 1

// Given an array = [2,3,4,5]
// Return undefined

function recurring(arr) {
  let set_one = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (!set_one.has(arr[i])) {
      set_one.add(arr[i])
    } else {
      return arr[i]
    }
  }
  return undefined
}

console.log(recurring([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(recurring([2, 1, 1, 2, 3, 5, 1, 2, 4]))
console.log(recurring([2, 3, 4, 5]))
