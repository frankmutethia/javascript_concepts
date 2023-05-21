//JAVACRIPT: SCOPE
//Scope- where code is stored and can be accessed,or where a variable can be used by a program. There are global and local scopes.
//Variables can be assigned the same name if they are in different code blocks.

//GLOBAL SCOPE
//It is not advisable to use the global scope.Though it can be accessed from anywhere within a given program.

let movie = "Avengers Infinity War";//global variable

console.log(movie);

function title(){
    console.log(`${movie}`);
}
title;

if(true){
console.log(`${movie}`);
}

//LOCAL SCOPE
//It is only available in the locality of where it is being defined.
//Provides more security to the code compared to the global scope.

function a(){
   let movie = "Avengers Infinity War" ;
   console.log(movie)
}

a();

if(true){
   let movie = "Avengers Endgame";//variable can have the same name if it is in a different code block.
   console.log(movwie);
}

//var can only be locally scoped in a function
function hello(){
    var greetings = "Good evening";
}
console.log(greetings);

//here it is not locally scoped
if(true){
    var greetings1 ="Good Morning";
}
console.log(greetings);

//overriding incident
var w= 10;
console.log(w);

if(true){
    w=2;
console.log(w);
}

console.log(w);
//we can use let to avoid an overriding incident
let w= 10;
console.log(w);

if(true){
   let w=2;
console.log(w);
}

console.log(w);