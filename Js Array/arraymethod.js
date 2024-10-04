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

// 7.reverse():If we want to reverse the array this particular method is used.
let arr5=[10,"sachin",true,"virat",18,false]
console.log(arr5.reverse())

// 8.includes():This method checks weather the data passed to it is present inside the array or not,If it present then it returns true else false.
let arr6=[10,"sachin",true,"virat",18,false]
console.log(arr6.includes(true))
console.log(arr6.includes(7))

// 9.slice():When ever we need to extract the particular elements from array,It will not alter the original array.
// slice(startindex)
// slice(startindex,endindex)
var arr=[10,20,30,40,50,60,70,80,90]
console.log(arr.slice(4))
console.log(arr.slice(2,5))

// 10.splice():Extraction starts at the start index extracts the length number of element from the array and it will alter original array.
// splice(startindex,length)

var arr=[10,20,30,40,50,60,70,80,90]
console.log("original array:"+ arr)
arr.splice(2,4)
console.log("spliced array:"+ arr)