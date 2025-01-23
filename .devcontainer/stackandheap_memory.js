// Primitive(Stack) Non-Primitive(Heap)

let name = "Nisha Singh Thakuri"
let anothername = name
anothername = "Nisha Thakuri"

console.log(name);
console.log(anothername);  //gives copy 

let userone = {
    email:"user1@gmail.com",

}
let usertwo = userone
 usertwo.email= "nisha@gmail.com"

 console.log(userone.email);
 console.log(usertwo.email); //gives reference not copy 
