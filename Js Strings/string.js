// strings: Is the collection of characters enclosed with in quotes with(single/double) is consider to be strings.

// string concatenation: Combining one or more string together is called as concatenation in order to concat two strings we should use plus opertor
var fname="Virat"
var lname="kholi"
console.log("fullname: " +fname+lname)

// How to find the length of  a given string?
// To find length of a given string we use length property.
let city="Bengaluru"
console.log(city.length)

// How to compare a two strings?
// We can compare two string by using "=="or "==="

// Example for ==
/**
 * It will check the type and then it will do === operation if types are not equal in that case it will do type conversion
 */

var a="hello"
var b="hello"
console.log(a==b)

var a="5"
var b=5
console.log(a==b) //true
// right: number
// left: string  //it will do  type conversion to number

// Example for ===
/**
 * If types are not equal it will return false.
 * if types are equal then it will check with the value.
 */
var a="5"
var b=5
console.log(a===b)

var a=5
var b=5
console.log(a===b)