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


function greet (greetings, name = []){
    if (Array.isArray(name)) {
        name = name. join(", ");
return `${greetings} sa enyu ${name}`;
}
console.log (greet("mayung aga", ["REY",  "Bai", "Soy", "Tol", "Erp",]));
}
 const heading = document.querySelector("h1");
 console.log (heading);

 const contactHeading = document. querySelector ("#contact h2");
 console.log(contactHeading);

 const servicesHeading = document.querySelector ("#services h2");
 console.log(servicesHeading);   