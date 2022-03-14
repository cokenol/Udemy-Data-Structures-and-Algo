// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2 + 3

function fibonacciIterative(n) {
  let arr = [0, 1]
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr[n]
}
console.log(fibonacciIterative(13))

function fibonacciRecursive(n) {
  if (n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(0))
console.log(fibonacciRecursive(1))
console.log(fibonacciRecursive(2))
console.log(fibonacciRecursive(3))
console.log(fibonacciRecursive(4))
console.log(fibonacciRecursive(5))
console.log(fibonacciRecursive(6))
console.log(fibonacciRecursive(7))
console.log(fibonacciRecursive(8))
console.log(fibonacciRecursive(9))
console.log(fibonacciRecursive(10))
console.log(fibonacciRecursive(11))
console.log(fibonacciRecursive(12))
console.log(fibonacciRecursive(13))
console.log(fibonacciRecursive(14))
console.log(fibonacciRecursive(15))
