//singleton
//object literals
const my_symbol= Symbol("key1")

const jsUser ={
    name: "Nisha",
    "full_name":"Nisha Singh Thakuri",
    [my_symbol]:"key1",//prints symbol
    location: "Nepal",
    email:"nisha@123",
    isloggedin: "False",
    lastLogged_day: ["Sunday","Monday"]
}
console.log(jsUser.name);
console.log(jsUser["name"]);//used for string datatypes
console.log(jsUser[my_symbol]);

jsUser.email="nisha@gmail.com"//we can override
Object.freeze(jsUser)//no changes
jsUser.email="singh@gmail.com"//wont change after freeze
console.log(jsUser.email);
