function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boo")
  }
}

// boo([1, 2, 3, 4, 5])

function arrayOfHighNTimes(n) {
  let hiArr = []
  for (let i = 0; i < n; i++) {
    hiArr[i] = "hi"
  }
  return hiArr
}

console.log(arrayOfHighNTimes(6))
