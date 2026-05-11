let move=document.querySelector(".move")
let li=document.createElement('li');
console.log(li);

//uske innerText Change kia 
li.innerText="Dark";
console.log(li);
//Class add kiya 
li.classList.add(".move");
setTimeout(()=>{
move.appendChild(li);

},1000)