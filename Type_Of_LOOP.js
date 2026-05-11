for(let i=0;i<5;i++){
    console.log(i);
}

//loop over array indexes

const fruits=["Apple","Mango","Grapes","Banana"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

//For. in loop(for objects)

//Iterates over the enumerable keys (Property names of object)

const person={name:"Ankit",age:"21",city:"Delhi"};
for(const key in person){
    console.log(key,person[key]);
}

//Avoid for ...in on arrays -it iterate over keys (indices as string) and also inherited properties,which can cause bugs
//use for .. of or a classic for loop on array
const arr=[10,20,30];
for(const key in arr){
    console.log(key);
}