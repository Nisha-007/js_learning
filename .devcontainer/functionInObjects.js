//function calculateCartPrice(val1, val2, ...num1) {
    //rest operator or spread operator
   // return num1
//}

//console.log(calculateCartPrice(200, 400, 500));//prints 500 200 and 400 goes in value rest in array 
   

const user = {
     username: "Nisha",
     price: 199
}
function handleObjects(anyObject){
 console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `)
 
}
//handleObjects(user)
handleObjects({
     username:"sam",
     price:399
})
const myNewArray = [200,300,400,1000]
function returnSecondValue(getArray){
     return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,1000]));