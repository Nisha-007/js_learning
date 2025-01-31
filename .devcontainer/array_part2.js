const marvel_heros = ["Thor","Ironman","spiderman"]
const dc_heros =["Superman","Flash","Batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros); //array comes inside array


const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros); //prints all the names in 1 array 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


const another_array =[1,2,3,4,[5,6,7],[8,9,[2,3],6]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Nisha"))//false
console.log(Array.from("Nisha"))//['N','i','s','h','a']
console.log(Array.from({name:"Nisha"})) // [] cant decide change key or value, have to specify it first
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // [100,200,300]