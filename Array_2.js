//Q- what is an object?
//Ans- An object is a collection of key-value pairs. keys are string (or Symbol),values can be anything -a number string arrays function or another object
const user={
    name:"Ankit Thakur",
    age:19,
    city:"Delhi"

};
//object contructive 
const empty=new Object();

//object.create()-for prototype- based inheritance 
const base={greet(){return "hello";}}
const child =Object.create(base);