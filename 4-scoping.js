thisIsNotHoisted()

thisIsAlsoVariable = "hello"

const thisIsAConst = 50

// thisIsAConst++ // error!

const constObj = {}

constObj.a = 'a'

let thisIsALet = 51
thisIsALet = 50

// let thisIsALet = 51 // errors!


var thisIsAVar = 50
thisIsAVar = 51
var thisIsAVar = 'new value!'

function thisIsHoisted() {
  console.log('this is a function declared at the bottom of a file')

var thisIsNotHoisted = function() {
  console.log('should this be hoisted?')
}
