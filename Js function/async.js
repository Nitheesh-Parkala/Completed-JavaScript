// Async Function: It is introduced in ES8 version of java script and then it is easier to work with promises.
// They are declared with async keyword and used the await keyword to pause the execution  until promise is resolved.


async function fetchData() {
    let response=await fetch('https://fakestoreapi.com/products/1')
    // console.log(response)
    let data=await response.json()
    console.log(data)   //here we will get the response in json format 
}
fetchData()
