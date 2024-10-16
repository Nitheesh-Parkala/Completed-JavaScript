let colors=['white','red','yellow','pink','blue','orange']
let len=colors.length-1

let btnControl=document.getElementById('btn')
let spanControl=document.querySelector('.color')

btnControl.addEventListener('click',()=>{
  var index=generateRandomIndex()
//   alert(index)
 document.body.style.backgroundColor=colors[index]
 spanControl.textContent=colors[index]
})


function generateRandomIndex(){
    return Math.round(Math.random()*len)
}