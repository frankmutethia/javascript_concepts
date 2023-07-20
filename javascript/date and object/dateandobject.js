//JAVASCRIPT DATE OBJECT
//Helps in manipulation of time objects and properties.
let currentDate= new Date;
console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
//---Review this

//Unix time- this is a date and time representation, widely used in computing.
let currentDate1 = new Date();
let milliseconds = new Date(0);
console.log(milliseconds);

//the starting point of the unix time
let milliseconds1 = new Date(0);
console.log(milliseconds1);

//Example:
//Instantiate a new date object assigning it to the variable date, the type of date we are looking for is the current date.
//Use the console to log out today's date.
//Create two new variables called hour and min, and assign the relevant values to these.
//Console log the name of the current day, you can use the long or shorthand.
let date = new Date();
console.log(date.getDate());

let hour = date.getHours();
let min = date.getMinutes();
console.log(`${hour}:${min}`);

let day = date.toLocaleString('default', {weekday: 'long'});
console.log(day);