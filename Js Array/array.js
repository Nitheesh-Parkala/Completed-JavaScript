// Array is the index collections different of data.
// arrays are kind of data structure where we can store any data & there is no restriction about the data we are storing
// those data we going to call as element in js array we can add any type of datatype inside it

/* How to declare an array?
1. array literal
2.array constructor
*/

// 1.Array literal
/*
var array_name=[]
        or
let array_name=[]
        or
const array_name=[]
*/

let arr=[21,"virat",true,20.89,{name:"raj",age:30}]
console.log(arr)

// 2.Array Constructor
/*
 var array_name=new Array()
           or
let array_name=new Array()
           or
const array_name=new Array()
*/
const array_name=new Array(18,"virat",true,20.89,{name:"raj",age:30})
console.log(arr)


// How to access  the data present in an array

let arr1=[20,"virat",true,20.7,{name:"raj",age:30}]
console.log(arr1[2])
console.log(arr[1])
console.log(arr[4])
console.log(arr[4].age)

// How to size of an array

console.log(arr1.length)

