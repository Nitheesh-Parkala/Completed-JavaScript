// Loops:It is used to complete repetitive task easily instead of manually repeating the task we must take the advantage of loops
/**Types Of Loop
 * 1.for loop
 * 2.while loop
 * 3.do while loop
 * 4.for in loop
 * 5.for of loop
 */

// 1.for loop:
/**
 * for(intalize variable;condition;increment/drecement)
 */
for(var i=0;i<10;i++){
    console.log("number is:"+i)
}

// 2.while loop:
/**
 * while(condition){
 * //set of code
 * increment/dcrement
 * }
 */
var counter=0
while(counter<10){
    console.log("counter value:"+counter)
    counter++
}

// 3.do while loop:
/**
 * do{
 * //set of code
 * }
 * while(condition)
 */
var count=0
do{
    console.log("count is:"+count)
    count++
}
while(count<10)

// 4.for in loop: we can iterate throughout the object and we can get access of all keys of object properties mainly this loop will access the key of the object
/**
 * for(var name in object_name)
 */
var person={
    name:"virat",
    age:36,
    city:"mumabi",
    gender:"male"
}

for(var data in person){
    console.log(data)          //only key names
    console.log(person[data]) //only values
}

// 5.for of loop:We can iterate throughout the array and we can access of all the elements in an array.
/**
 * for(variable name of array_name)
 */
var arr=[10,20,30,40,60,70,80]
for(var a of arr){
    console.log(a)
}