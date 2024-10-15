/**spread operators.
 
 * ...<object_name>
 * or
 * ...<array name>
 */
//It is used to copy properties of one object into another object and it is used to copy elements of one array into another array.

//Example applying spread operator for object.

var obj1={
    name:"virat",
    age:36,
    city:"mumbai"
}
console.log(obj1)

var obj2={
    ...obj1,
    id:18,
    gender:"Male",
    gmail:"virat18@gmail.com"
}
console.log(obj2)

var obj3={
    ...obj1,
    ...obj2,
    team:"India",
    IplTeam:"RCB"
}
console.log(obj3)


//Applying spread operator for array.
var arr1=[10,20,30,50]
console.log(arr1)

var arr2=[...arr1,60,70,80,90]
console.log(arr2)