//JAVASCRIPT: HIGHER ORDER FUNCTIONS
//Functions are first class citizens or objects in JavaScript.
//Higher Order Functions- these are functions that accept functions as parameters or/and return function.
//or functions that receive functions as an argument or return a function as an output.

const double = n => n*2;

let nums = [1,2,3,4,5];

let results = nums.map(double);//map is an example of a HOF

console.log(results);

//HOF used in a button

const pTag = document.getElementById('p');
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    pTag.innerText = 'Heardem Say by Kanye West'
})
