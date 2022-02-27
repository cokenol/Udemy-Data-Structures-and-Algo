function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true
      }
    }
  }
}
// O(a*b) - Time Complexity
// O(1) - Space Complexity

function containsCommonItem2(arr1, arr2) {
  // loop thru first array and create object where properties === items in te array
  // can we assume always 2 params ?

  let map = {}
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i]
      map[item] = true
    }
  }
  // loop thur second array and check if item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true
    }
  }
  return false
}
//  O(a + b) Time complexity
//  O(a) Space complexity

function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

arr1 = ["a", "b", "c", "x"]
arr2 = ["x", "y", "z"]

console.log(containsCommonItem2(arr1, arr2))
console.log(containsCommonItem3(arr1, arr2))
