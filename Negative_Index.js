const nums=[1,2,3,4,5];
//starting 2 from the end removed 1
nums.splice(-3,1);

console.log(nums);

//splice -copy a portion (Non -destructive)
// splice dose not modify the original array.it return a new array with the selected portion.

const scores=[85,49,36,85,49,67];
console.log(scores);

console.log(scores.slice(1,4));

//Shallow copy
const cpy=scores.slice();
console.log(cpy);
