 //array 
   

 const myArr = [0,1,2,3,4,5]
 const myHeors = ["God", "Nature","Mother","Teacher"]
 const myArr2 = new Array(1,2,3,4,5)

console.log(myArr[1]); //1

//Array methods 
myArr.push(6)//add
console.log(myArr);// [0,1,2,3,4,5,6]
myArr.pop()//remove
myArr.unshift(9)//insert at first shifting all the values 
myArr.shift()//remove

console.log(myArr.includes(9));//false
console.log(myArr.indexOf(9));//-1
console.log(myArr.indexOf(3));//3

const newArr = myArr.join();

console.log(typeof newArr);//string
console.log(myArr);//[0,1,2,3,4,5]

//slice , splice

console.log("A",myArr);//A[0,1,2,3,4,5]
const myn1 = myArr.slice(1,3)//[1,2]
  
console.log(myn1);
console.log("B", myArr);//B[0,1,2,3,4,5]

const myn2 = myArr.splice(1,3)
console.log("C",myArr);//C[0,4,5]
console.log(myn2);//[1,2,3]