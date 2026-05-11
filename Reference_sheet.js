//Variable
const x=10;// block scoped, no reassign
let y=20;//block-scoped, can reassign
var z=10;//function-scoped

//function

function add1(a,b){
    return a+b;

}
const add=(a,b)=>a+b;//Arrow
console.log(add(5,8));

//Data Types

let num=42;//Number
let big=99999999999999;//Bigint
let bool=true;//true
let str="Hello";
let nothing=null;
let obj={a:1};//object

//Loop
for(let i=0;i<3;i++){};
for(const val of [1,2,3]){}
for(const key in {a:1,b:5});
