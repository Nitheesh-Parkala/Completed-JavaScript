// selection statement or conditional statement.
// we can control the execution of the program using
// control or selection statement only

/** Types of control statements
 * 1.if
 * 2.if else
 * 3.else if
 * 4.switch
 * 5.ternary operator
 */

// 1.if:
/** syntax:
 * if(condition){
 *   //set of code
 * }
 */

function findEven(num){
    if(num%2==0){
        console.log("the given number is even")
    }
}
findEven(2)
findEven(3)

// 2.if else:
/** syntax:
 * if(condition){
 *   //set of code
 * } else(condition){
 *   //set of code
 * }
 */
function findEvenOdd(num){
    if(num%2==0){
        console.log("the given number is even")
    }else{
        console.log("The given Number is Odd")
    }
}
findEvenOdd(2)
findEvenOdd(3)

// 3.else if:
/** syntax:
 * if(condition){
 *   //set of code
 * } else if(condition){
 *   //set of code
 * }
 * else{
 * }
 */

function wish(message){
    if(message=="gm"){
        console.log("Good Morning")
    }
    else if(message=="ga"){
        console.log("Good Afternoon")
    }
    else if(message=="ge"){
        console.log("Good evening")
    }
    else if(message=="gn"){
        console.log("Good Night")
    }
    else{
        console.log("There is Nothing to print")
    }
}
wish("gn")
wish()

// 4.switch: 
function wish1(message){
    switch(message){
    case "gm":{
        console.log("Good Morning")
        break;
    }
    case "ga":{
        console.log("Good Afternoon")
        break;
    }
   case "ge":{
        console.log("Good evening")
        break;
    }
    case "gn":{
        console.log("Good Night")
        break;
    } default:
        console.log("There is Nothing to print")
    }
}
wish1("gn")
wish1()
wish1("gm")

// 5.ternary operator: 
/**
 * syntax:
 * condition?//true statement://false statement
 */
var firstname="dhoni"
firstname.includes("virat")?console.log("my name is virat"):
console.log("Your name is something else")