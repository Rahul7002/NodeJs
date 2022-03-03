const ps = require("prompt-sync");
const input = ps();

const takeInput = input("Enter the String which you want to reverse:  ");

let a=takeInput;

const reverse =(a)=>{
    let str=''
for (let i=a.length-1; i>=0; i--){
  str+=a[i];   
}
console.log(str)
}

reverse(a);