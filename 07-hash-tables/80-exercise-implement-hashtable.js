class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(k, v) {
    let address = this._hash(k)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([k, v])
    return this.data
  }
  get(k) {
    let address = this._hash(k)
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        {
          if (currentBucket[i][0] === k) {
            return currentBucket[i][1]
          }
        }
      }
    }
    return undefined
  }
  //  82 - keys () - first method
  // keys() {
  //   const keysArray = []
  //   for (let i = 0; i < this.data.length; i++) {
  //     if (this.data[i]) {
  //       console.log(this.data[i][0][0])
  //       keysArray.push(this.data[i][0][0])
  //     }
  //   }
  //   return keysArray
  // }

  //  83 - keys() without collision
  keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0])
          }
        } else {
          result.push(this.data[i][0])
        }
      }
    }
    return result
  }
}

const myHashTable = new HashTable(50)
myHashTable.set("grapes", 10000)
myHashTable.set("apples", 54)
myHashTable.set("oranges", 2)
console.log(myHashTable.keys())
// console.log(myHashTable.data)
