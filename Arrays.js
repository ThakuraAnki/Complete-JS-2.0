//Q:= Part-1 Array
//What is an Array?
// Ans- An array is an ordered list of value .Each value site at a number position called an index starting rom()


//Array Constructor -rarely used
const scores=new Array(3);

//Arrayfrom()-useful for converting iterables
const letters=Array.from("Ankit");
console.log(letters);

//Array. of()-vreate an array from arguments
const age=Array.of(19,25,36);
console.log(age);

//Accessing Array Element 
//* Array are zero-indexed-the first Element is at index 0.

const user=["Ankit","Thakur",19,"Delhi"];
console.log(user[0]); 
console.log(user[1]); 
console.log(user[2]); 
console.log(user[3]); 

//Accessing last Element
console.log(user[user.length-1]);

//Mutating Arrays
// Array declared with const can still be mutated 
const profile =["Kartik",19];
profile[1]=25;
console.log(profile[1]);