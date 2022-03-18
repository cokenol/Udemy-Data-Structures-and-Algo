// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

// Time - O(n)
let calculationsNP = 0
function fibonacci(n) {
  calculationsNP++
  if (n < 2) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

let calculationsDP = 0
function fibMaster() {
  let cache = {}
  return function fib(n) {
    calculationsDP++
    if (n in cache) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n]
      }
    }
  }
}

const fasterFib = fibMaster()

console.log("Slow", fibonacci(30))
console.log("We did " + calculationsNP)
console.log("DP", fasterFib(20))
console.log("We did " + calculationsDP)
