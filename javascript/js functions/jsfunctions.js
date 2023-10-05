
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

//global variable - variable that can be invoked outside the functions within a program, therefore can be accessed by any of the functions.
//local variable - can only be invoked inside a specific function, therefore can only be accessed by that function.


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

