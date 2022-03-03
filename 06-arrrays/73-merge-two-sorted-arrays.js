function mergeSortedArrays(arr1, arr2) {
  if (arr1.length == 0) {
    return arr2
  }
  if (arr2.length == 0) {
    return arr1
  }

  arr2.forEach(n => {
    arr1.push(n)
    console.log(`arr1=${arr1} n=${n}`)
  })
  return arr1.sort((a, b) => a - b)
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))
