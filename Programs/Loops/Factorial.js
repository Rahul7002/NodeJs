const ps = require("prompt-sync");
const input = ps();

const takeInput = parseInt(input("Enter the Num to find its factorial:  "));

const factorial=(takeInput)=>{
    let fact=1;
    for(let i=takeInput; i>0; i--){
        fact=fact*i;
    }
    console.log(fact)
}
factorial(takeInput);