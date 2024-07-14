let date = new Date();
console.log(date)

console.log(date.toString())
console.log(date.toLocaleString())
console.log(date.toJSON())
console.log(date.toDateString())
console.log(typeof date)

let date1 = Date.now()
console.log(date1)
console.log(typeof date1)

//1 sec = 1000 millisec
//1 min = 60 sec
//1 hr = 60 min
//1 day = 24 hr
//1 week = 7 days
//1 month = 30 days
//1 year = 365 days

let years = Math.floor(date1 / (1000*3600*24*365) )
let months = Math.floor(((date1 / (1000*3600*24*365))%1)*12)
console.log(`${years} years, ${months} months complete since Jan 1 1970`)

let date2 = new Date(2024,6,14,0,10,13)
console.log(date2.toLocaleString())

let timeStamp = Date.now()
console.log(timeStamp)

let newDate = new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDate())
console.log(newDate.getFullYear())
console.log(newDate.getDay())
console.log(newDate.toJSON());


newDate.toLocaleDateString('default',{
    day: '2-digit',
    weekday: 'long'
})

console.log(newDate)