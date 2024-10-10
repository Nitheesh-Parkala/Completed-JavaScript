//When ever we need to know about date we should use date object gives information regrading day,month,minutes,hours,seconds & timezone.
var date=new Date()
console.log(date)

//method of data object:
//1. getDate() method is used to get current date.
var currentdate=date.getDate()
console.log(currentdate)

//2. getMonth() method is used to get current month.
let month=date.getMonth()
console.log(month)

//3. getDay() method is used to get current Day.
let day=date.getDay()
console.log(day)

//4. getFullYear() method is used to get current year.
let year=date.getFullYear()
console.log(year)

//5. getHours() method is used to get current hours.
let hours=date.getHours()
console.log(hours)

//6. getTime() method is used to get current time.
let time=date.getTime()
console.log(time)

//7. getMinutes() method is used to get current minutes.
let minute=date.getMinutes()
console.log(minute)

//8. getSeconds() method is used to get current seconds.
let seconds=date.getSeconds()
console.log(seconds)

