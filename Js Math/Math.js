// Math object
//Math is an inbuilt object in js which can be used to perform some specific math expression/operation

console.log(Math.PI)  //print pi value
console.log(Math.sqrt(49))  //print the square root of the number
console.log(Math.pow(12,4)) //print the power of the number
console.log(Math.round(5.6)) //round to nearest number
console.log(Math.floor(5.5)) //floor to nearest number
console.log(Math.trunc(5.621718)) //It will remove the integer value and remove decimal value
console.log(Math.sign(-51)) //output -1
console.log(Math.sign(51))//output 1
console.log(Math.random()) //random value will given each time

// Generate a  NUmber between 1 to 6.
var random=Math.trunc(Math.random()*6+1) 
console.log(random)

//6 is the Number of possible result.
//1 is the start Number.
//Math.trunc will remove the decimal number.