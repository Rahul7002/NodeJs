const ps = require("prompt-sync");
const input = ps();

const takeInput = parseInt(input("Enter the string:  "));

let a=takeInput;
let i=0;
const whileLoop=(i)=>{
    
while(i<a){
    console.log(a)
    i++;
}
}

whileLoop(i);
