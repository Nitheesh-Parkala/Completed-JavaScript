/*Advance array method
* 1. forEach()
* 2. map()
* 3. filter()
* 4. sort()
*/ 

/* 1. forEach(): If we want to access each and every element of an array along with index value we are using forEach method,
   This method will not return any value and not alter original array*/

let arr=[10,"sachin",true,"virat",18,false]

var newarr=arr.forEach((ele,index)=>{
  console.log(ele+" "+index)
 })
 console.log(newarr)

// 2.map(): This method should return some value ,returned value always added in newarray,map() will not alter the original array.
var arr1=[10,20,30,40,50,60,70,80,90]
var mapvalue=arr1.map((ele,index)=>{
  return ele*10
})
console.log(mapvalue)

/* 3.filter(): It is used to filter element or data from the array based on certain condition.
filter call back function will return always boolean value and it will not alter the original array and it will create a new array*/
var arr2=[101,200,150,20,600]
var filterValue=arr2.filter((ele,index)=>{
    return  ele>200
})
console.log(filterValue)

// 4.sort():It is used to sort the array either in ascending or descending order.
var names=["sachin","Dhoni","Nitheesh","Kholi"]
console.log(names.sort())

// ascending order
var arr3=[10,2,5,26,21]
var newarr=arr3.sort((a,b)=>{
    return a-b
})
console.log(newarr)

// descending order
var arr3=[10,2,5,26,21]
var newarr=arr3.sort((a,b)=>{
    return b-a
})
console.log(newarr)