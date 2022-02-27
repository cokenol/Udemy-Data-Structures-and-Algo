const nemo = ["nemo"]

const large = new Array(100000).fill("nemo")

function findNemo(array) {
  found = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      found++
      console.log("Found NEMO")
    }
  }
}

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0])
  console.log(boxes[1])
}

// findNemo(large)

const boxes = [0, 1, 2, 3, 4, 5]

logFirstTwoBoxes(boxes)
