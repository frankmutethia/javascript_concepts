
//JAVASCRIPT: FUNCTION PARAMETERS AND ARGUMENTS
//Parameters - a special of variable used to pass information btwn functions or procedures.
//Argument - value passed btwn functions and subroutines.
//Parameters make our functions dynamic.
//NB: JS functions do not check the number of arguments received.
//When you have more arguments than there are parameters,the undefined parameters are not executed.

function favGame12(game){//game is the parameter
    console.log(`My favourite game is ${game}`);
}

//we are using this as a sub for the arguments
favGame12("Spiderman");//Spiderman is the argument
favGame12("The Witcher");
favGame12("Formula 1");
favGame12("The Matrix");

function ninjaTurtle(name, weapon){
         console.log(`${name} uses the ${weapon}`);
}
ninjaTurtle('Donatelo','Bow Staff');//these are the arguments,if missing the execution will be undefined.

//While using integers
function addNums(num1,num2){
         console.log(num1 + num2);
}
addNums(5,2);//if one of the arguments is missing the output will be NaN.

//Arguments
function addNums1(num1, num2){
    console.log(arguments);
}
addNums1(1,2,3,4,5,6,7);

function favGame10(game){
    if(game === undefined){
        console.log('Please provide your favourite game! i.e favGame10("Super Mario")');
    }
    else{
        console.log(`My favourite game is ${game}`);
    }
}
favGame10("Contra");



//JAVASCRIPT: RETURN KEY WORD
//Return statement is used to return a particular value from the function to the function caller.


function test(){
    return "hello";
}
console.log(test());

//Return statement can be only used multiple times when the code is expressed as a block.Otherwise the next return key word,after the initial key word will not be executed.

let login = function(password){
    if(password === 'Jarvis'){
        return 'Welcome Home Mr.Stark'
    }
    else{
        return 'Intruder Alert! Defence systems on';
    }
}

let result30 = login('Jarvis');
console.log(result30);

//or
// console.log(login("The New Genesis Chambers"));

function favNum(num){
    return num;
}

let myfavNum = favNum(7);

console.log(`My favourite number is ${myfavNum}`);



//password checker
function password34(a){
    if(a.length>8){
        return console.log(`You chose ${a} as a password`);
    }else{
        return console.log("Not enough letters.");
    }
}

password34("Ye");
password34("ZeusYouHaveBetrayedMe");



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




