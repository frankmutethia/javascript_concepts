
//JAVASCRIPT: SETS AND WEAKSETS
//Sets- collection of unique values. Can allow us to delete elements using specific values.
//Weak sets- collection of objects only. Can not contain any arbitrary value.
//Sets guard against duplicate values.
//Weak sets can not be iterated over.
//When objects are stored inside of a set,they will remain there as long as the set exists.
const fruits10 = new Set();

fruits10.add('apples');
fruits10.add('bananas');
fruits10.add('grapes');
fruits10.add('oranges').add('apricots').add('watermelons');
fruits10.delete('apricots');

let check = fruits10.has('papayas');


console.log(fruits10);
console.log(check);

console.log(fruits10.size);
fruits10.clear();
console.log(fruits10);


let arrayFruits = ['Apples','Bananas','Oranges','Pawpaws','Pineapples','Maangoes'];
//converting the array into a set
const fruits = new Set(arrayFruits);

console.log(fruits);

//WeakSets- contain only objects and symbols.They can only contain non-primitives.
let nums10= [1,2,3,4,,5,6,7];

let weakSet = new weakSet();

weakSet.add(nums);
nums =null;

console.log(nums);
console.log(weakSets);


const mk = new Set();

mk.add('Baraka').add('Luke Cage').add('Sonya').add('Scorpion').add('Katana');

for (character of mk){
    console.log(character);
}
//iterate

mk.forEach(
    function(value){
        console.log(value);
    }

)



//JAVASCRIPT: MAPS AND WEAK MAPS
//Map- in JS is a key to data items. It holds key-value pair where the keys can be any data type. Collection of keyed data items. Allows keys of any type.
//Maps allow keys of any type.
//Objects can convert keys into strings while maps can not.

let game24 = {
    name: "GTA5",
    platform: "Rockstar Games",
    year: "2013"
}

let gameMap = new Map();

gameMap.set('Name','GTA6');
gameMap.set(3,'The number three.');
gameMap.set(true, 'Boolean');

console.log(gameMap);

let getInfo= gameMap.get('Name');
let hasInfo =gameMap.has('Name');
let deleteInfo =gameMap.delete(true);

console.log(getInfo);
console.log(hasInfo);
console.log(gameMap.size);

//Maps
let game25 = {
    name: "GTA5",
    platform: "Rockstar Games",
    year: "2013"
}

let gameMap1 = new Map();

gameMap1.set('Unity','Call of Duty');
gameMap1.set('Frost','Fifa23');
gameMap1.set('Marvel', 'Spiderman');

console.log(gameMap1);

//keys()

for(let key of gameMap1.keys()){
    console.log(key);

}


//values()

for(let value of gameMap1.values()){
console.log(value);
}

//entries()
for(let [k,v] of gameMap1.entries()){
    console.log('${k} has the value of ${v}');
    }
    
//WeakMaps - keys must be objects not primitive values.

let sf= new Map();
sf.set('Ryu','Japan').set('Ken','USA').set('Guile','USA').set('Blanka','Brazil');

for(let [character, country] of sf.entries()){
    console.log(`${character} is from ${country}`);
}

for(x of sf){
    console.log(x);
}



//JAVASCRIPT: FUNCTIONS
//Functions are first class objects. Block of code that can be called.
//Ways to create a function: through expressions and declarations. Through arrow functions.Through function constructors.Through generator functions.

//Created through literals -(objects) - let game = {} ; (functions) function games(){}
//Stored in variables-(objects) - let game= {} ; (functions) let game= function (){}
//Can include values-(objects) - let game= {title= 'Fifa23';}; (functions) let game= function(){title='Fifa23';};



function games(){
    console.log(Fifa2023);
    console.log(Mk11);
    console.log(Spiderman);
}

games();

//a function can also be used to call a local varibale.
//any local variable created inside a function,must be executed within that function.

let greetings = "Morning";//global variable
function name(){
    let title = 'The Wizard';//local variable 
    console.log(title, greetings);
}
name();
console.log(greetings);

//anonymous function
let btn = document.querySelector('#btn');//reference to a button created i.e. <button id= "#btn">Click me</button>

add.EventListener('click', function(){
console.log('Sonic');
});

//invoking a function to console log
function myName()  {
    console.log('Reed Richards');
}

myName();


//function expressions- functions created in a expression or a syntax construct.
//using variable name to invoke function
//function declarations can be invoked earlier than when created and the function must have a name.
//recursion - calling a function within itself.Recursive function- function that calls itself.
let games100 = function (){
    console.log('Kratos');
    console.log('Cristiano');
    console.log('Shao Khan');
};

// games100();
let anotherWayToCall = games100;
anotherWayToCall();

//function declaration b4 the actual function.
myFunc();

function myFunc(){
    console.log('My function declaration');
}

//creating of a function expression

let colours = function(){
    console.log('red, blue, green');
}
colours();

let myColours = colours;
myColours();


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




