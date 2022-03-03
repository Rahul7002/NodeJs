// npm install prompt-sync
// METHOD :1 
 const ps =require('prompt-sync')
 const input =ps({sigint:true});

 let name= input('enter your name : ');
 console.log(`Entered name is: ${name}`)


 let lastname= input('enter your last name : ');
 console.log(`Entered name is: ${lastname}`)
 console.log(`Complete Entered name is: ${name} ${lastname}`)
