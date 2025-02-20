/*function chai(){
  let username = "Nisha"
    console.log(this.username);//prints undefined as this is only being as object form inside the function it doesnt print 
}
chai()
*/
/*
 const chai = function(){
    let username = "Nisha"
    console.log(this.username);//undefined
 }
    */
 

 const chai = () =>{
    let username = "Nisha"
    console.log(this);
 }
chai() 

//()=>{} syntax of arrow function 

const addTwo = (num1,num2) =>{
    return num1+num2
}
console.log(addTwo(3,4))


//implicit return 
//const add = (num1,num2) => (num1+num2)
const add = (num1,num2) =>({username:"Nisha"}) //to retur objects

console.log(add(3,4))  
//if rapped in curly braces write return , can use parenthesis  


