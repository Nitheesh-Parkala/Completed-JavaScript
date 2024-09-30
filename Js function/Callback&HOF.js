// Call Back Function: ANy function which are you passing as argument to another those functions are called call back function.
// The sutable functions for call back is anonymous function and arrow function.
function print(){
    console.log("Welcome to js")
}
function add(x,y){
    console.log(x+y)
}

function fn(f){
    console.log()
    f()
}

// fn(print())
// fn(add(21,26))

fn(function(){
    console.log("I'm Anonymous function")
})

fn(()=>{
    console.log("Arrow Function")
})


// HOF: Any function which is taking another function has argument that function is called HOF function.
// Functions are called higher order function only if it takes minimum one function as argument.
