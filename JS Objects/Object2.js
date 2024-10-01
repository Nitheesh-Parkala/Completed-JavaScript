// I Have a Product and i want to store information of that product like product name price & category and rating,stock.

var product={
    productName:"Shoes",
    price:1000,
    category: "xyz",
    rating:4.5,
    stock:true
}

console.log(product)

// One Object can perform four operations.
/*
1.Read or access the data
2.insert or write the data
3.Update the data
4.delete the data
*/
// 1.How to access or read specific property from the object.
/*
syntax:
object_name.keyname or 
object_name['keyname']
*/

console.log(product.productName)
        //  Or
console.log(product['rating'])

// 2.how to modify or update the value of the property of the objects.
/*
syntax:
object_name.keyname to update= newvalue
*/ 

product.productName="samsung s24 ultra"
product.price=100000
product.category="electronic device"
product.rating=5
console.log(product)

// 3.how to  insert or write the data inside the object.

/*
object_name.keyname=newvalue
 or
object_name['keyname']=newvalue
*/
var product={
  productName: 'samsung s24 ultra',
  price: 100000,
  category: 'electronic device',
  rating: 5,
  stock: true
}
product.color="blue"
product['storage']="124 gb"
product.brand="Apple"

console.log(product)

// 4. how to delete the data from the product.
/**
 * delete object_name.keyname
 * delete is the special keyword in js
 */

delete product.price
delete product.brand
console.log(product)

/*
How to crate a Nested  object
*/
 var user={
    name:'Nitheesh',
    id:21,
    isplaced:true,
    address:{
        state:'karnataka',
        city:"udupi",
        pincode:576207,
        area:{
            area1:"first Main Roda",
            area2:"mg road"
        }
    }
 }

 console.log(user)

 console.log(user.id)

 console.log(user.address.city)
 console.log(user.address.area.area2)


user.address.area.area2="Parkala"
console.log(user.address.area.area2)

user.address.area.area3="manipal"
console.log(user)

delete user.address.area.area3
console.log(user)


// How to add functions inside the object 

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

person.play()