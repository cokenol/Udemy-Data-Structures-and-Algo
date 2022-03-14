// Given a number N return the index value of the fib sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2 + 3

// O(n - 2)
function fibIterative(n) {
  let arr = [0, 1]
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr[n]
}
console.log(fibIterative(13))

// O(2^n)
function fibRecursive(n) {
  if (n < 2) {
    return n
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2)
}

console.log(fibRecursive(0))
console.log(fibRecursive(1))
console.log(fibRecursive(2))
console.log(fibRecursive(3))
console.log(fibRecursive(4))
console.log(fibRecursive(5))
console.log(fibRecursive(6))
console.log(fibRecursive(7))
console.log(fibRecursive(8))
console.log(fibRecursive(9))
console.log(fibRecursive(10))
console.log(fibRecursive(11))
console.log(fibRecursive(12))
console.log(fibRecursive(13))
console.log(fibRecursive(14))
console.log(fibRecursive(15))
