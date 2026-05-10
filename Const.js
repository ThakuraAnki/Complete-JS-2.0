// const 
// -block scoped like let
// -cannot be reassigned or redeclared.be
// -object/array declared with const are still mutable (their content can change)

const PI=3.14;
const user={name:"Kartik"}
user.name="Kartik Mathur";//allowed hai

// user={};//TypeError constant ko kuch aur assign nhi kr skte