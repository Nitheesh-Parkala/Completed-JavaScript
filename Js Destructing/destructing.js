// Destructing of array or objects

/**
 * It is a technique in javascript to unpack properties or
 * Elements from object or array and assigning variables
 */

//Example for object destructing.
 let person={
    name:"virat",
    age:36,
    city:"mumbai",
    gender:"male"
 }

 //old approach:
 let name1=person.name
 let age1=person.age
 console.log(name1+" "+age1)
 
 //New approach:
const{name,age,city,gender}=person
console.log(name)
console.log(age)
console.log(gender)
console.log(city)

//example: array destructing
//Old approach
let products=["I phone 15pro","Samsung s24 ultra","Vivo A24","Oppo f9 pro","Mi 13"]

let element1=products[0]
let element2=products[1]
let element3=products[2]

console.log(element1+","+element2+","+element3)

//New approach
const[ele1,ele2,ele3]=products
console.log(ele1+" "+ele2+" "+ele3)