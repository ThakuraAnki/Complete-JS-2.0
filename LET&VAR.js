//:- Var Function-scoped A accessbile ony where within the function it's declared in 
//:-Hoisted to the top of its scope and initailized as undefined(Hoisting hum class mei krege but if you can revise then it's good)

var x=10;
if(1){
    var x=20;//same variable
}
console.log(x);

//:-*Block scoped only accessbile within the {} it's declared in
// Hoisted but not initialized accessing before declaration throws reference Error call the temporal dead zone
let s=10;
if(1){
     let s=20;//other variable
}
console.log(s);