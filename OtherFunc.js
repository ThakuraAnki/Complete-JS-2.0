//Join -convert to string with separator

["Ankit","Thakur"].join(" ");//"Ankit Thakur"

//Revers
[1,2,3].reverse();//[3,2,1]

//Sort -sorts in place(mutates), default is alphabetical
[3,1,10,2].sort();//[1,10,2,3];

//Ascending order
 console.log([3,1,10,2].sort((a,b)=>a-b));//[1,2,3,10];
 //decending order
 console.log([3,1,10,2].sort((a,b)=>b-a));//[1,2,3,10];

 //flat -flattens nested arrays
 console.log([1,[2,[3,[4]]]]);

 //concat-merge arrays(non destructive)
const a=[1,2];
const b=[3,4];
a.concat(b);//1,2,3




