// 1.Object literals

/* syntax:
var object_name={}
     or
let object_name={}
     or
const object_name={}
*/

/* let object_name={}
  key1:value,
  key2:value,
  |
  |
  |
  keyN:valueN
*/

let person={
    name:"Dhnoi",
    age:42,
    team:"India",
    gender:"Male"
}

console.log(person)

// 2.object Constructor and new operator.
/* syntax:
let object_name=new Object{}
*/
let car=new Object()
car.name="BMV"
car.model=2024
car.color="red"
console.log(car)