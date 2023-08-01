//JAVASCRIPT NULL COALESCING OPERATOR
//This is a logical operator that returns it's right hand side operand when the left hand side is null, and vice versa.
//The nullish operator returns the first argument as long as it is not undefined or null.
let game;
let game2 = null;
let game3 = 'Sonic';

console.log( game??game3);

let user;
console.log(user ?? 'Guest');

