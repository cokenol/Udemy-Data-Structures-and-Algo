//  write two function that finds the factorial of any numbers. One should use recursive, the other should just use a for loop

// O(n)
function findFactorialRecursive(number) {
  // code here
  if (number === 2) {
    return 2
  }
  return number * findFactorialRecursive(number - 1)
}

// O(n)
function findFactorialIterative(number) {
  // code Here
  let answer = 1
  for (let i = number; i > 1; i--) {
    answer *= i
  }
  return answer
}

console.log(findFactorialRecursive(6))
console.log(findFactorialIterative(6))
