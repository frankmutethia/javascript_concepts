//JAVASCRIPT STRING METHODS:
//The String class has a set of built-in methods that you can use on strings.

//length- shows the lenght of the string
//trim- reduces the extra-space within the string.
//to.UpperCase() - marks the characters to uppercase.
//to.LowerCase() - marks the characters to lowercase.
// console.log(newName.indexOf("k")) - shows the position of the element in that particular string.
//last.IndexOf- show the last position of that particular character.
//charAt() - the opposite of indexOf. Returns the character at a specified index.
//slice(0,5) - reduces the string to the range of elements described.

//Example 1: Length method
let newName ='Frank';
console.log(newName.length);

//Example 2: Slice Method
let course = "JavaScript is cool.";
console.log(course.slice(0, 10));

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits.slice(-3, -1);
console.log(myBest);

//Example 3: Replace Method
let favScene = "When Thor used mjolnir to fight Thanos." ;
console.log(favScene.replace("Thor", "Captain America"));