const name = "Nisha"
const repoCount = 1

console.log( `Hello my name is ${name} and my repo count is ${repoCount}`);

const sentence = new String('HelloIamNisha')
console.log(sentence[0]); // H
console.log(sentence.__proto__);//{}
console.log(sentence.length);//13
console.log(sentence.toUpperCase());

console.log(sentence.charAt(2));//l
console.log(sentence.indexOf('N'));//8
const newString = sentence.substring(-8,4)//Hell
console.log(newString);
 const anotherString = sentence.slice(-8,4)
 console.log(anotherString);//nisha
 const word = "   nisha   "
 console.log(word);
 console.log(word.trim());//git nisha