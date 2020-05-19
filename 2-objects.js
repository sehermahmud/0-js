const o = newObject()
o.firstName = "Seher"
o.lastName = 'Mahmud'
o.isTeaching = true
o.greet = function() {
  console.log('hi!')
}

const o2 = {}
o.firstName = 'Seher'
o['lastName'] = 'Mahmud'
const key = "isTeaching"
o[key] = true
o['greet'] = function() {
  console.log('hi!')
}

const o3 = {
  1: 'test',
  firstName: "Seher",
  lastName: 'Mahmud',
  isTeaching: true,
  greet: function() {
    console.log('hi!')
  },
  address: {
    street: 'Main St.',
    number: 123,
  },
}
