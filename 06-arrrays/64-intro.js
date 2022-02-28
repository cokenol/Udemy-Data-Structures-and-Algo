const strings = ["a", "b", "c", "d"]
//0   1    2    3    4
//4*4 = 16 bytes of storage

// Push
strings.push("e") // O(1)

// Pop
strings.pop(strings) // O(1)

// Unshift
strings.unshift("x") // O(n)

// Splice
strings.splice(2, 0, "alien") // O(n)

console.log(strings)
