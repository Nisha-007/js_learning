//primitive
//7types : String, Number, Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue =100.3

 const isLoggedIn = false
 const outsideTemp = null

 let userEmail;

 const id =Symbol('123')
 const anotherId = Symbol('123')
 console.log (id==anotherId);

 const bigNumber = 3333333n

//Reference(Non primitive)
//Array,Objects,Functions

const heros =["Dad","Mom","Brother"]

let myObj= {
    name:"Nisha",
    age: 22,
}
const myFunction=function(){
    console.log("Hello js");
}

console.log(typeof bigNumber);//bigint
console.log(typeof myFunction);//function
console.log(typeof outsideTemp);//object, null 
console.log(typeof heros);//object
console.log(typeof isLoggedIn);//boolean
console.log(typeof score);//number
console.log(typeof scoreValue);//number
console.log(typeof userEmail);//undefined
//output of non primitive give object 