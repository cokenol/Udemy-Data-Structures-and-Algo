// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// Return 1

// Given an array = [2,3,4,5]
// Return undefined

// my solution using set
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

// instructor solution using objects
function recurring2(arr) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i]
    } else {
      map[arr[i]] = i
    }
  }
}

console.log(recurring2([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(recurring2([2, 1, 1, 2, 3, 5, 1, 2, 4]))
console.log(recurring2([2, 3, 4, 5]))
