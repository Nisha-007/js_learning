const score = 400
console.log(score); //400

const balance = new Number(100)
console.log (balance); // Number : 100
 console.log(balance.toString().length); //3
 console.log(balance.toFixed(2));// 100.00
 const otherNumber = 123.8896
 console.log(otherNumber.toPrecision(4));//123.9
 const hundreds = 10000
 console.log(hundreds.toLocaleString()); //10,000

 //Maths library comes by default in js 
 console.log(Math);
 console.log(Math.abs(-4));
 console.log(Math.round(4.6));
 console.log(Math.ceil(4.2));
 console.log(Math.floor(4.9));
 console.log(Math.max(4,2,1,0,6,9));
 console.log(Math.min(4,3,2,1,8,9));
 console.log(Math.random());
  console.log((Math.random()*10)+1);
  console.log(Math.floor(Math.random()*10)+1);
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)
