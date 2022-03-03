// Create a function tha reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eamn yM iH'

function reverse(str) {
  let j = -1
  let rev = []
  for (let i = 0; i < str.length; i++) {
    // console.log(str.length - i - 1)
    // console.log(str[str.length - i - 1])
    rev.push(str[str.length - i - 1])
    j--
  }
  return rev.join("")
}

console.log(reverse("Hi My name is Andrei"))
