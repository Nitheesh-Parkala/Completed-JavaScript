// Array methods.
/*
 * 1.push()
 * 2.pop()
 * 3.unshift()
 * 4.shift()
 * 5.indexof()
 * 6.join()
 * 7.reverse()
 * 8.includes()
 * 9.slice()
 * 10.splice()
 */

// 1. push(): When we need to push any data to an array we can use push method , push method always append the data to the end of an array.
var arr=[]
arr.push("virat")
console.log(arr)
arr.push(18)
console.log(arr)

// 2.pop():This method is used to remove/pop the last element/index of the array.
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)

// 3.unshift(): When we need to push the data to the beagning of the array we use unshift method
let arr1=[10,"sachin",true,"virat",18,false]
console.log(arr1)
arr1.unshift(100)
arr1.unshift("welcome")
console.log(arr1)

// 4.shift():To remove the element from the beagning of an array we can use shift method.
let arr2=[10,"sachin",true,"virat",18,false]
console.log(arr2)
arr2.shift()
console.log(arr2)
arr2.shift()
console.log(arr2)

// 5.indexOf():This method is used to find the index value of particular element if the element is not available inside the array then the index of method will return -1 value.
 let arr3=[10,"sachin",true,"virat",18,false]
 console.log(arr3.indexOf("sachin"))
 console.log(arr3.indexOf(100))

// 6.join():When ever we need to join all the element inside the array join method should be used .This method will join the all the element of an array and return it in the string format.
let arr4=[10,"sachin",true,"virat",18,false]
console.log(arr4)
console.log(arr4.join())
console.log(arr4.join(''))
console.log(arr4.join(' '))
console.log(arr4.join('$'))

// 7.reverse():

// 8.includes():

// 9.slice():

// 10.splice():