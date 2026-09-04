console.log("hello world.");
console.log("from script.js file.");

const myName = "REY";
let age = 60;
age = 21;
number = 98765432; 
const address = "brgy 1 pob, manapla";
console.log(`Name: ${myName}`);
console.log(`age: ${age}`);
console.log(`address: ${address}`);
console.log(67); 


function greet (greetings, names = []) {
    if (Array.isArray (names)) {
    names = names, join(", ");
}
return `${greetings} sa enyu ${names}`;
}
console.log (greet("mayung aga", ["REY",  "Bai", "Soy", "Tol", "Erp",]));

