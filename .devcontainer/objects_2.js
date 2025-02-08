//singleton
//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id ="123abc"
tinderUser.name
tinderUser.isLoggedIn = false //example of singletonobjects

//console.log(tinderUser)
const regularUser ={
email :"hey@gmail.com",
fullname:{
    userfullname:{
        firstname:"nisha",
        lastname:"singh"

    }

}
}//object inside objects
console.log(regularUser.fullname);
const obj1 ={1: "a", 2:"b"}
const obj2 ={3:"c",4:"d"}
const obj3 = Object.assign({},obj1,obj2)
const obj4 = {...obj1, ...obj2}//same result more better by spreading
console.log(obj3);//like arrays combining both objs
 console.log(obj4);
   

 const users =[
    {
        id:1,
        email:"n@gmail.com"
    },
    {

    },
  {

}
 ]
 users[1].email
 console.log(tinderUser);
 console.log(Object.keys(tinderUser));//we created keys and put array in it, the datatype is array 