// Clousers in javascript:
/**
 * Calling inner function outside the outer is called clousers 
 * It is a technique to access of the outer function varibale inside inner functions
 * It is a function to define inside another function
 *  syntax: Outer(){
 *      ---------
 *      ---------
 *   function inner(){
 *   ---------
 *   ---------
 *   ---------
 *           }
 *   }
 */

function Outer(){
    console.log("I am outer function")
    function inner(){
        console.log("I am inner Function")
    }
    return inner()
}
Outer()

//2.
function Outer(){
    var city="Benagluru"
    console.log("Outer variable"+city)
    console.log("I am outer function")
    function inner(){
        console.log("inner Function"+city)
        console.log("I am inner Function")
    }
    return inner()
}
Outer()

//3.
function Outer(){
    
    var city="Benagluru"
    console.log("Outer variable"+city)
    console.log("I am outer function")

    function inner(a,b){
        c=a+b
        console.log("Inner Function addition value is:"+c)
        console.log("inner Function"+city)
        console.log("I am inner Function")
    }
    return inner(10,11)
}
Outer()