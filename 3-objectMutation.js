const o = {
  a: 'a',
  b: 'b',
  obj: {
    key: 'key',
  },
}

const o2 = Object.assign({}, o)


// o2.a = 'new value'

// console.log(o.a)

// deep copy
function deepCopy(obj) {
  // check if val are objects
  // if so, copy that object (deep copy)
 // else return the value
  const keys = Object.keys(obj)

  const newObject = {}
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (typeof obj[key] === 'object') {
      newObject[key] = deepCopy(obj[key])
    } else {
      newObject[key] = obj[key]
    }
  }

  return newObject
}

const o3 = deepCopy(o)

o.obj.key = 'new key!'
console.log(o3.obj.key)
