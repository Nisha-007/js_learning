//time
let myDate = new Date()
console.log(myDate.toString());//Mon Jan 27 2025 15:52:50 (coordinated universal time )
console.log(myDate.toDateString());//Mon Jan 27 2025
console.log(myDate.toLocaleString());//1/27/2025, 3:52:50 PM 
console.log(typeof myDate);//object 

let myCreatedDate = new Date(2025,0,27)
console.log(myCreatedDate.toDateString());//Mon Jan 27 2025
console.log(myCreatedDate.toLocaleString()); //1/27/2025, 12:00:00


let myTimeStamp =Date.now()//172436378
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
 let newDate = new Date()

console.log(newDate.getMonth());//0
console.log(newDate.getMonth() +1);//1
newDate.toLocaleString('default',{
    weekday:"long",
})
  console.log(newDate);
