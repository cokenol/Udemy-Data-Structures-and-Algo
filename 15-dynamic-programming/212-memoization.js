function addTo80(n) {
  return n + 80
}

function memoizedAddTo80() {
  let cache = {}
  return function (n) {
    if (cache[n]) {
      return cache[n]
    } else {
      console.log("long time")
      cache[n] = n + 80
      return cache[n]
    }
  }
}

const memized = memoizedAddTo80()

console.log("1", memized(5))
console.log("2", memized(6))
console.log("3", memized(5))
