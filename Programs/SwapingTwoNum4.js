const ps = require("prompt-sync");
const input = ps();

const a = parseInt(input("Enter the num1:  "));
const b = parseInt(input("Enter the num2:  "));


const reverse =(a,b)=>{
    a=a+b;
    console.log('1',typeof(a))
    b=a-b;
    console.log('2',b)
    a=a-b;
    console.log('3',a)
    console.log(`Value of num1 ${a} and num2 ${b}`)
}

reverse(a,b);