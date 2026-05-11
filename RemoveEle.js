const langs=["HTML","CSS","JS","Python","JAVA"];

//Remove 2 Element Starting From index 3
const remove =langs.splice(3,1);
console.log(langs);

//remove Element by specific index
const items=["Ankit","age:19","Delhi","Unwanted"];

items.splice(3,2);//remove 1 Element at index 3
console.log(items);

//Inserting  Without Removing :-
const tools=["VsCode","Git","Chrome"];
//Inserting at index 1 delete 0

tools.splice(1,0,"Figma","Postman");
console.log(tools);

//Replacing Elements
const profile=["Ankit",18,"Mumbai"];
console.log(profile);
profile.splice(1,1,19);//replacing 18 with 19
console.log(profile);
profile.splice(2,1,"Delhi");//relplacing "Mumbai" with Delhi
console.log(profile);