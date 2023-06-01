//JAVASCRIPT: ARROW FUNCTIONS
//Arrow functions provide a new shorter way of writing anonymous function expressions.

const sum = function(a, b) {
    return console.log(a+b);
}
sum(6,9);

///Arrow function
const sum1 = (a, b)=> {
    return console.log(a+b);
}
sum1(6,9);


//Arrows have concise body syntax.
const person = firstname=> {//if it is a single parameter then there is no need of a parentheses
    return console.log(`hey there my name is ${firstname}`);
}
person("James");


//function body is a single-line expression
//functions use an implicit return
const game= ()=>{
    return "Sonic";
}

console.log(game());

//or

const game1= ()=> "Sonic";

console.log(game1());

//function body syntax
//we should not use arrow functions as direct methods,if we want to access properties within an object using this.
const game7= (title)=> {
    let favGame= title;
    return favGame;
    
}

console.log(game7("The Spiderman"));

//we should not use the arrow functions as direct methods
let game10 ={
    title: "Spiderman",
    year: 2018,
    platform: "Marvel",
    console: "Playstation 4",

    //rep the object that calls the function
regularFunction(){
    console.log(`This game is called ${this.title}`);
},
 //rep the owner of the function i.e the window 
arrowFunction:() => {
    console.log(`This game is called ${this.title}`);
},
};

game10.regularFunction();
game10.arrowFunction();
