// How to retrieve only keys from the objects.

// object.key(object_name)

var person={
    name:"virat",
    age:36,
    gender:"male",
    play:function(){
        console.log(this.name +" is playing the cricket")
    },
    city:"mumbai"
}
console.log(person)
var keys=Object.keys(person)
console.log(keys)

// How to retrieve only values from the objects.

// object.values(object_name)
var value=Object.values(person)
console.log(value) 