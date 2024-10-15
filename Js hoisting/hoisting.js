// Hoisting: It is a default behavior of moving all the declaration at the top scope before code execution.
/**
 * we can do function hoisting in js but we cant do variable hoisting
 * note: js only hoist declaration not initialization
 * js allocates memory for all the variables
 */

let a=10
console.log(a)

console.log(b)
let b=10     //we will get error because we should initialize the value before console. so variable hoisting can't be done in js.

//function declaration are hoisted but function expression are not hoisted.
//1. approach calling function below
function sayHello(){
    console.log("Hello How Are You...")
}
sayHello()

//2 approach calling function above
sayHello()
function sayHello(){
    console.log("Hello How Are You...")
}

//using arrow functions.
let greet=()=>{
    console.log("I am arrow function")
}
greet()


greet1()  //Here we cannot do 
let greet1=()=>{
    console.log("I am arrow function")
}
