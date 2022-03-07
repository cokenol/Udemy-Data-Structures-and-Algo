// const basket = ["apples", "grapes", "pears"]

// Build linked lists.
// 92 - why linked list?
let obj1 = { a: true }

// js = reference type instead of assignment.
let obj2 = obj1
obj1.a = "booya"
delete obj1
console.log("1", obj1)
obj2 = "hello"
console.log("2", obj2)
