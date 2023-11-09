

//JAVASCRIPT: HOW TO USE VAR, LET and CONST
//var keyword- can be reassigned, redeclared, has a functional scope and is subject to hoisting. 
//let keyword- can be reassigned, can not be redeclared, has a block scope and is not subject to hoisting. 
//const keyword- can not be reassigned, can not be redeclared, has a block scope and is not subject to hoisting. 
//Hoisting- process whereby the interpreter,appears to move the declaration of functions, variables or classes, to the top of the tier prior to execution of the code.
//let and const are more secure and hence should be prioritized for usage.


var age45 = 14;
var firstname = "Danny Phantom";

console.log(`${firstname} changed to a ghost at ${age45}`);

//date daily update

const currentYear78 = new Date().getFullYear();
console.log(currentYear78);

let username300 = "Saul";
console.log(username300);

username300= "Paul";//value is reassigned not redeclared.
console.log(username300);



//JAVASCRIPT: SCOPING
//Hoisting- Javascripts default behaviour where variables and function declarations are moved to the top of their scope,just before execution.
//We can therefore call/invoke functions before even writing/creating them.
//Hoisting only moves declarations, initializations or assignments are left in place.

hello();

function hello(){
    console.log("hello")
}
///declaration
let game100;
console.log(game100);
//initialisation
game100= "SpiderMan";
console.log(game);




