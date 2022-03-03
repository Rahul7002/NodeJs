const ps = require("prompt-sync");
const input = ps();

const takeInput = input("Enter the Alphabet:  ");

const result = (takeInput) => {
    const i=takeInput;
  if(i=='a' || i=='e' || i=='e' ||i=='o' ||i=='u' ||i=='s'){
      console.log(`${i} is a Vowel IF`)
  }
  else
  console.log(`${i} is not a Vowel`)
};

const result1=(takeInput)=>{

    const i = takeInput;
    switch(i){

        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
        return console.log(`${i} is a Vowel SWITCH`)

        default: return console.log(`${i} is not a Vowel`)
    }
}

result1(takeInput);
result(takeInput);