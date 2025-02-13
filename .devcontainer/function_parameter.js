function sayMyName(){
    console.log("N")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("A")
 
}

sayMyName()//prints the name


//function addTwoNumbers(number1, number2){//parameters
   // console.log(number1 +number2);
//
//}
  //addTwoNumbers(3,45)//arguments

 function addTwoNumbers(number1, number2){//parameters
    let result = number1 +number2
    return result
    console.log("Nisha");//nothing prints after result
    console.log(number1 +number2);

}
const result = addTwoNumbers(3,5)
console.log("Result:", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please Enter username");
        return //doesnt print after this
    }
    return `${username} just logged in`

}
    // loginUserMessage("Nisha")

    console.log(loginUserMessage());



