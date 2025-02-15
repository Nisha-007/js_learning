 //var c = 300
 let a = 300
 if (true){ //scope
    let a = 10
    const b = 20
    //var c = 30//dont use var it causes problem
    console.log(a);//inside scope 10
}

console.log(a); //outside the scope 300
//console.log(b);
//console.log(c); //even though we have put  300 it still prints 300 outside of scope 