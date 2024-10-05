/** String Method
  ===============
 * 1.charAt()
 * 2.toLowerCase()
 * 3.toUpperCase()
 * 4.slice()
 * 5.substring()
 * 6.replace()
 * 7.replaceAll()
 * 8.trim()
 * 9.concat()
 */
// 1.charAt():Whenever from string if we need to extract a specific character we use charAt().

var str="hello World"
console.log(str.charAt(4))

// 2.toLowerCase(): All the character of the string will be converted to lower case.
var str="HELLO WORLD"
console.log(str.toLowerCase())

// 3.toUpperCase(): All the character of the string will be converted to upper case.
var str="hello world"
console.log(str.toUpperCase())

// 4.slice(): When ever we want to extract a substring from a string we can use slice method.
/** syntax:
 * slice(stratindex)
 * slice(startindex,endindex)
 */
var str="hello world"
console.log(str.slice(2))

console.log(str.slice(2,8))

console.log(str.slice(-3))

// 5.substring(): It's almost similar to slice method the difference between substring and the slice method ,In substring it does not accept the negative index value.
var str="hello world"
console.log(str.substring(3))
console.log(str.substring(-3)) //It will print-> hello world, Not give error 

// 6.replace(): When we want replace a particular string with new string we use replace method.
var str="hello world"
console.log(str.replace("hello","Hi"))

var str1="Hello Hello World"
console.log(str1.replace("hello","hi"))  // hi Hello World

// 7.replaceAll(): To replace all the occurrences with new string we can use replaceAll().
var str1="Hello Hello World"
console.log(str1.replaceAll("hello","hi")) // hi hi World

// 8.trim(): In order to remove the white spaces from the string we can use trim method, It will remove only white spaces before and after the string & It won't remove white spaces in between the string.
var str="  hello world  "
console.log(str.trim())

//  9.concat(): It is used to concat the string.
let str="hello"
let str1="world"
console.log(str.concat(str1))