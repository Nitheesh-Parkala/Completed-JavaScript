/* Fetch: This method which works internally as a promise. 
* Fetch method is used to make a network request or to call a API in js.
* Fetch will return a promise in js.
*/

//Example: 

fetch("https://api.github.com/users/Nitheesh-Parkala") //Make a api call

.then((result)=>{
    console.log(result)
    return result.json()
}) //converting result into json data
.then((jsondata)=>{
    console.log(jsondata)
    console.log(jsondata.name)
}) //fullfill result
.catch((error)=>{
    console.log(error+"Promise Failed")
}) //rejected result
