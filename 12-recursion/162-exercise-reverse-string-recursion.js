function reverseRecursive(str) {
  console.log(str[str.length - 1], str)
  if (!str) {
    return ""
  }

  return str[str.length - 1] + reverseRecursive(str.slice(0, -1))
}

console.log(reverseRecursive("hello"))
