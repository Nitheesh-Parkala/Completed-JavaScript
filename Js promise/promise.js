/**Asynchronous programming
 * It is a programming paradigm that allows tasks to be executed concurrently,without blocking the main thread of execution.
 * This is approach particularly useful when dealing with operations that might take time to complete,such as network request,file I/o or times,allowing the program to continue running other tasks.
 * asynchronous programming can be done by using timers,promises,async and await.
 */

//A promise is an object representing the eventual completion or failure of an asynchronous operations.
//The promise object can be in any 3 states.
/**
 * 1. pending
 * 2.fulfilled
 * 3.rejected
 */

/**
 *                                           promises
 *                                              |
 *                                              v
 * ---------------------------------------------------------------------------------------------------------
 *     |                                        |                                                     |
 *  fulfilled                                 pending                                              rejected
 *     |                                                                                              |
 *  resolve()                                                                                      reject()
 *     |                                                                                              |
 *   then()                                                                                         catch()                         
 */
//Creating a promise
/**
 * create a promise using promise constructor take a function with to parameters resolve and reject method.
 * here it may be a resolved or it may be rejected
 */

let isplaced=true
let promDemo=new Promise((resolve,reject)=>{
     if(isplaced){
        resolve("Promise is resolved")
     }
     else{
        reject("Promises rejected")
     }
})

//Handling promise result 
//we can use .then() method to handle the promise result is resolved. then we use .catch() method to handle the error.

promDemo.then((result)=>{
  console.log(result)
}).catch((error)=>{
    console.log(error)
})

