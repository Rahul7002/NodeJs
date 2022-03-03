const ps=require('prompt-sync')
const input= ps();

let name=input('Hello World take some input :  ')
const ascii= name.charCodeAt()
console.log(ascii)