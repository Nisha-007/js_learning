function one(){
    const username = "Nisha"
    console.log(username);

    function two(){
        const website ="youtube"
    
    console.log(website);
    }
    two() //prints youtube
}

one()//prints Nisha

//different scope are made declaring differnt functions
    
if (true){
    const username = "Nisha "
    if (username === "Nisha"){
        const website = "Youtube"
        console.log(username + website);
    }
    //console.log(website); error outside scope
}
//console.log(username) error outside scope 



add(5)
console.log(add(5))
function add(num){
return num +1 
}


const addTwo = function(num){//also called expression 
    return num + 2
}
addTwo(5)