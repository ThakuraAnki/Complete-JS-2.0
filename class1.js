//Create Array- the most common way
const name =["Kartik","Mathur","Delhi"];
console.log(name);

// Array constructor - rarely used 
const scores =new Array(3); // create empty Array
console.log(scores);

//Array.from()-useful for the converting iterables
const letters= Array.from("Ankit")//["A","n","k","i","t"]
console.log(letters);
//Array.of()- create an array from arguments
const age =Array.of(19,25,16);//[19,25,16]
console.log(age);
//Empty array , filled later 
const cart=[];
console.log(cart);
