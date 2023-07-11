


// JAVASCRIPT VARIABLES
let channelName;// declaring a variable
channelName = "Let's eat it.";// initializing a variable
console.log(channelName);// we define the variable


let carName ="Mercedez Benz", driverName="George Russel"; driverAge= "24";
console.log(carName, driverName);


let favFood = "Pizza";
console.log(favFood);

const myBirthday= "29th November 1998";
console.log(myBirthday);


//JAVASCRIPT DATA TYPES
let myList=["Paprika", "Curry Powder", "Red Pepper"]
console.log(myList[2]);

// In JS:
// = used to assign value
// == used to show equals to

let powerCode =7.89;
console.log(typeof powerCode);


//JAVASCRIPT ARITHEMATIC OPERATORS
// Operator- this is a symbol used to perform operations on an operand.e.g. +
console.log(2+5);
//You can only increment or decrement value of an existing variable

let currentNum1= 10;
let currentNum2=20;

console.log(currentNum1 +currentNum2);
console.log(currentNum1 % currentNum2);

let total=10
total++
console.log(total);


let score = 99;

console.log(score);
console.log(score++);


//JAVASCRIPT ASSIGNMENT OPERATORS

let grade = 700;
grade = grade = grade + 77;
console.log(grade);

//+= operator
let price = 50000;
price += 500;
console.log(price);

//-= operator
let tagPrice = 50000;
tagPrice -= 500;
console.log(tagPrice);

//*= operator
let peaches = 500;
peaches *= 5;
console.log(peaches);

//  / operator
let pie = 70;
pie /= 4;
console.log(pie);

let cake = 77;
cake %= 3;
console.log(cake);


// JAVASCRIPT NUMBERS
let newNum =77.8;
console.log(typeof newNum);

let mill= 1e6;
console.log(mill);

let smallNum = 1e-6;
console.log(smallnum);

let newExpenditure = 1e5;
console.log(typeof newExpenditure);

//JAVASCRIPT NUMBER METHODS
//Declaration and initialization of Pie to the nearest 5, in precision.
// const PI= 3.141592653589793238;
// let num= PI.toFixed(3);
// num=PI.toPrecision(5);
// console.log(num);

//To exponential
let milli= 100000;
num = milli.toExponential();
console.log(milli);

let PIE= 3.141592653589793238;
let num1= PIE.toFixed(3);
num1= PIE.toPrecision(4);
console.log(num1);


//JAVASCRIPT STRINGS
//We normally use double quotation, single and backtick.
//Below is the usage of backslash.e.g.
let tip = "We are the future \\";


//JAVASCRIPT CONCATENATE
let day = "Good Morming Sir ";
let breakfast= "Would you like smokies to go with your coffee,sir?"
console.log(day +breakfast);

let string = "10";
let num2 = 5;
let result= string + num2;
console.log(result);

let hobbie = "I love watching F1 on ";
let day1 = "Sundays";
let result1= hobbie.concat(day1);
console.log(result1);


//JAVASCRIPT TEMPLATE LITERALS
//Better way to write strings. 
//Provide better ways to interpolate variables and expressions into strings.
// "/n" is added to break long sentences or paragraphs.

let title = "Sonic the Hedgehog";
let platform = 'SEGA';
let year = 1991;

// let info = title + "was released by " + platform + "in the year" + year;
// let info7 ='${title} was released by ${platform} in the year ${year} "."';
let info5 = "$ title";

console.log(info5);

let num11 = 19000;
let num12 = 27000;
let sum = 'The total sum is ${num11+num12}';

console.log(sum);


//JAVASCRIPT STRING METHODS
let newName ='Frank';
console.log(newName.length);
//length- shows the lenght of the string
//trim- reduces the extra-space within the string
//to.UpperCase - marks the characters to uppercase.
//to.LowerCase- marks the characters to lowercase.
// console.log(newName.indexOf("k")) - shows the position of the element in that particular string.
//last.IndexOf- show the last position of that particular character.
//slice(0,5) - reduces the string to the range of elements described.
console.log(newName.replace("Frank", "The Dark Knight"));
console.log(newName.charAt(3));


//JAVASCRIPT DATE OBJECT
//Helps in manipulation of time objects and properties.
let currentDate= new Date;
console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
//---Review this

//Unix time
let currentDate1 = newDate();
let milliseconds = newDate(0);
console.log(milliseconds);


//JAVASCRIPT MATH OBJECT
const PI = Math.PI;
console.log(PI.toFixed(2));

let min = Math.max(1,2,57,1400,2100,7000);
console.log(min);

let pow = Math.pow(5,3);
console.log(pow);

let random = Math.random().toFixed(1)*10;
console.log(random);

let num100= Math.random().toFixed(1)*10;
let num101= Math.random().toFixed(1)*10;
let num102= Math.random().toFixed(1)*10;

console.log(num100,num101,num102);
let max= Math.max(num100,num101,num102);
console.log(max);


//JAVASCRIPT COMPARISON OPERATORS
//Used to compare values and all comparison operators are usually boolean.
//Relational- compare values in relation to one another.
 //Abstract- check to see if the values are the same.
// Strict- check to see of the values are the same and same type.
//NB:  '=' assignment operator and '==' eaual to.

let x = "7";
console.log(x>10);

console.log('a'>'z');

let a = 10;
let b = 15;
console.log(a,b);
console.log(a==10);


//JAVASCRIPT LOGICAL OPERATORS
//False - an empty string.
//Undefined- Nan
//The null value is given to '0'.
// (?)- this is the Nullish Coalescing
//When we negate true we get false. Then, false we get true.
let h= 1;
h =!h;
console.log(typeof h,h);

let f = 0;
f = !f;
console.log(typeof f,f);

//true and false = false
//true or false = true


//JAVASCRIPT NULL COALESCING OPERATOR
//This is a logical operator that returns it's right hand side operand when the left hand side is null, and vice versa.
//The nullish operator returns the first argument as long as it is not undefined or null.
let game;
let game2 = null;
let game3 = 'Sonic';

console.log( game??game3);

let user;
console.log(user ?? 'Guest');


//JAVASCRIPT CONTROL FLOW
//Control flow is the order in which a PC executes statements in script.
//Conditional statements are used to check whether a certain condition is true or false.
//- if statements
//- switch
//ternary
//Loops used to perform repetitive tasks  with less lines of code.
// -for loops
// - do/while loops
//- for in
//for of


//JAVASCRIPT IF STATEMENTS
if(condition){
    //if the condition is true then it can be executed
}else{
//code to run if condition is false
}

let game7 = 'God of War';
if(game7 =='God of War'){
console.log('The condition is true');
}else{
    console.log('The condition is false');
}


let roll= 2;
if(roll === 4){
console.log('You have rolled a four');
}else if(roll ===5 ){
    console.log('You have rolled a five');
}
else if(roll=== 6){
    console.log('You have rolled a six');
}else{
    console.log('You have rolled less than a four.')
}


let user10 = 'Employee';
if( user10 === 'Guest'){
    console.log('Login Denied');
}else(user10 === 'Employee');{
console.log('Successful Login');
}


let myName1 = 'Frank';
let nameLength = myName1.length;
if(nameLength > 5){
alert('More than 5 letters');
}else if(nameLength ===5){
    alert('Exactly 5 letters');
}else{
    alert('Less than 5 letters');
}


//JAVASCRIPT SWITCH CASE STATEMENT
let roll10 = 24;
switch( roll10){
    case 1:
         console.log('Your rolled a 1');
         break;// stops more execution after the specif case has been executed
    case 2:
         console.log('Your rolled a 2');
         break;
    case 3:
        console.log('Your rolled a 3');
        break;
    case 4:
    console.log('Your rolled a 4');
        break;
    case 5:
        console.log('Your rolled a 5');
        break;
    case 6:
        console.log('Your rolled a 6');
        break;
    case 7:
        console.log('Your rolled a 7'); 
        break;
        default:
        console.log('The number ${roll10} is not possible.')   
}


let today24 = new Date(). toLocaleString( 'default',{weekday:'short'});

switch(today24){
    case 20=== 'Mon':
    console.log('Today is ${today}');
    break;
    case 21=== 'Tue':
    console.log('Today is ${today}');
    break;
    case 22=== 'Wed':
    console.log('Today is ${today}');
    break;
    case 23=== 'Thu':
    console.log('Today is ${today}');
    break;
    case 24=== 'Friday':
    console.log('Today is ${today}');
    break;
    case 25=== 'Sat':
    console.log('Today is ${today}');
    break;
    case 26=== 'Sun':
    console.log('Today is ${today}');
    break;
    default:
        console.log('No idea!');
}


const favFood10 = 'Beef Pilau';

switch(favFood10){
      case  'Rice Beans':
      console.log("${favFood10} is my favourite food.");
      break;
      case   'Chapati Beans':
      console.log("${favFood10} is my favourite food.");
      break;
      case   'Rice beef':
      console.log("${favFood10} is my favourite food.");
      break;
      case   'Chapati Beef':
      console.log("${favFood10} is my favourite food.");
      break;
      case    'Beef Pilau':
      console.log("${favFood10}is my favourite food.");
      break;
      default:
     console.log('No Chef Ramsey did not cook ${favFood10}, sir.');
}


//JAVASCRIPT TERNARY OPERATOR
//Ternary meaning- composed of 3 parts.
//Provides us with an easier way to write a if else statement.

let age = 18;
if(age>=18){
console.log('You are old enough to take shots.');
}
else{
    console.log('Unafanya nini na mtoto?');

}

let age70 = 24;
let message = age70 >=18  ? "You are old enough to take shots" : "Unafanya nini na mtoto?";
console.log(message);


let password20 = 'The Matrix';
let message20 = (password20 === 'The Matrix') ? "Success":"Fail";
console.log(message20);


//JAVASCRIPT FOR LOOP
//Loops allow performing of more tasks with less code.
//Used to loop over a piece of code for several times. Composed of:
// -the initialiser
// -the condition 
// - final expression

for(let i=0; i<=10; i++) {//the initializer is initialized once b4 the code block
    console.log(i)
}


const characters = ['Sonic', 'Mario','Luigi', 'Ben'];

let para = document.querySelector('p');
let info90 = 'The characters are';

for( let i =0; i < characters.length; i++){
if (i === characters.length -1 ){
    info90 += 'and ${characters[i]}.' ;
}
else{
    info90 += '${characters[i]},' ; 
}
}

para.innerText = info90;


let colours70 =['Blue', 'Red','Green', 'Yellow', 'Black'];
for( let colour70 =0; colour70 < colours70.length; colour70 ++ ){
    console.log('${colour70[colors70]} is my favourite colour');
}
document.getElementById("demo").innerHTML = text;

//we revisit for loop


//JAVASCRIPT WHILE AND DO WHILE LOOPS
//While loop repeats a given block of code as long as the statement remains true.
//Arrays are zero indexed.
//For loops are used when you know a head of time. Knowing the amount of loops and iterations ahead.
//Do while loops are used when we do not know a head of time.

let i = 0;
while([i<=10]){
      console.log(i);
      i++;
}

const colours100= ['Purple', 'Gold', 'Silver','White'];

let colour100 = 0;

while(colour100 < colours100.length){
     console.log(colours100[colour100]);
     colour100 ++;
}


let m = 0;

do{
    console.log('This number is ${m}');
    m++;
}while(m <=10);


let y = 0;

while( y<=100){
  console.log('This car is' +y+'MPH' +'top speed.');
  y+=10;
}

let j = 0;
let k = 10;

do{
    console.log(j);
    j++;
}while(j<=k);


//JAVASCRIPT FOR IN LOOPS
//It is used to iterate different innumerable properties of an object.
//After creating an object you are allowed to change its properties.

let superhero = {
    name : 'Green Lantern',
    origin: 'Earth',
    power: 10000,
}
for(let s in character){
  console.log(s)

}


let salaries = {
    Peter : 24000,
    Paul: 48000,
    Pitbull: 58000,
}
for (let e in salaries){
 let salary = '${salaries[e]}';
 console.log('${e} earns ${salary} per month.');
}

let superhero1 ={
    name :'Superman',
    strength: 'Sun',
    weakness:'Kryptonite',
}

superhero.name= 'Superman';
delete superhero.weakness;
superhero1.alignment= 'Superstrength';
console.log(superhero1);


//JAVASCRIPT FOR OF LOOP

let avengers=['Tony', 'Thor','Natasha','Pepper'] ;

for(x of avengers){//variable of characters(avengers)
console.log(x);
}

//looping through a string letter by letter

let Bruce= 'The Dark Knight';

for(letters of Bruce){
console.log(letters);
}

//breaking through a loop
let avengers1=['Steve', 'Tony','Bruce','Thor' ];

for(x of avengers1){
   if(x == 'Bruce'){
    break;
   }else{
    console.log(x);
   }
}

//for in - when looping over properties of an object
//for of- when looping over variable of an iterable data structure.

let colors90 = ['Red','Orange', 'Green','White'];

for(x of colors90){
    if(x === 'Green'){
        break;
    }else{
    console.log(x);
    }
}



//JAVASCRIPT: HOW TO USE JS ARRAYS
//JS- data types are primitive and non-primitve.

let xmen=['Prof','Magneto','Gene','Scott','Quicksilver','Beast','Wolverine'];
console.log(xmen[3]);

//deleting elements in an array
let xmen1=['Prof','Magneto','Gene','Scott','Quicksilver','Beast','Wolverine'];

delete xmen1[5];

console.log(xmen1);

//Array-order of listed values
let randoms=['Prof','Magneto','Gene','Scott','Quicksilver','Beast','Wolverine',1,true,false,['good', 'antagonist','evil']];//multi-dimensional array with access to the initial and final array



console.log(randoms[10][2]);

let mutethias=['Frank','Shirley','Patience'];

mutethias[3]='Cole';

console.log(mutethias);




//JAVASCRIPT HOW TO USE ARRAY METHODS
//pop-removes last item from an array
//shift- removes the first item in an array.
//unshift- adds a new item to the beginning of an array.
//push- adds item to an array, at the end.

let supers = ['Superman','Batman','Flash','GreenLantern','Wonder Woman','Aquaman'];

console.log(supers[supers.length-1]);


let supers1 = ['Superman','Batman','Flash','GreenLantern','Wonder Woman','Aquaman'];
supers1.unshift('Doctor Fate');
supers1.push('Blue Bettle');
console.log(supers1);
console.log(supers1.indexOf('GreenLantern'));
console.log(supers1.includes('Batman'));
console.log(supers1.pop());

let newsupers = supers1.concat(['Kid Flash', 'Aquaboy','Miss Martian']);
 console.log(supers1);
 console.log(newsupers);
 console.log(supers.join());//join- takes an array and converts it into a string. You can also join them using a bar(|).

 //Split method -converts a String into an array.
 let atom = "Protons, Neutrons, Electrons";
 let atomArray = atom.split(",");
 console.log(atomArray);

 //Slice - non-destructive method of an array.

let supers2 = ['Superman','Batman','Flash','GreenLantern','Wonder Woman','Aquaman','Red Tornado', 'Cyborg','Black Lightning','Zatana', 'Shazam','Hawkgirl','Black Canary'];

console.log(supers2);

let powerhouse = supers2.splice(2,6);

console.log(supers2);

//Splice- removes items from an array and replaces them with new ones. Destructive method because it alters our array.
let supers3 = ['Superman','Batman','Flash','GreenLantern','Wonder Woman','Aquaman','Red Tornado', 'Cyborg','Black Lightning','Zatana', 'Shazam','Hawkgirl','Black Canary'];

supers3.splice(6,1, "Starfire");//supers3.splice(6,1)- removes an item only without replacing it.

console.log(supers3);

//Sort
let supers4 = ['Superman','Batman','Flash','GreenLantern','Wonder Woman','Aquaman','Red Tornado', 'Cyborg','Black Lightning','Zatana', 'Shazam','Hawkgirl','Black Canary'];

supers3.sort();

console.log(supers3);

//JAVASCRIPT ITERATOR METHODS
//Iterator method- method capable of performing the same action on different items within a collection.

let supers5 = ['Superman','Batman','Flash','GreenLantern','Wonder Woman','Aquaman','Red Tornado', 'Cyborg','Black Lightning','Zatana', 'Shazam','Hawkgirl','Black Canary'];

supers5.forEach(
    function(value, index){
     console.log('The index of'+ value +'is'+ index);//we can use template literals but we don't have to.
    }
);

//Map method- iterates over our values
let supers6 = ['Superman','Batman','Flash','GreenLantern','Wonder Woman','Aquaman','Red Tornado', 'Cyborg','Black Lightning','Zatana', 'Shazam','Hawkgirl','Black Canary'];

function UpperCase(value){
        return value.toUpperCase();
}

let supers6Cap = supers6.map(UpperCase);
console.log(supers6Cap);

//We can also do the same for numbers

let numbers = [1,2,3];
function double(x){
    return x * 2;
}
let numberDouble = numbers.map(double);
console.log(numberDouble);

//Filter Method is used to filter an array.

let numbers1 = [1, 2 , 13 , 34 , 44 , 55 , 66 , 77 , 88 , 99 ];

let evenNumbers = numbers1.filter(
    function(value, index, array){
return value % 2===0;

    }
);
console.log(evenNumbers);

//Reduce Method

let numbers2 = [1, 2 , 13 , 34 , 44 , 55 , 66 , 77 , 88 , 99 ];
function add (total, value, index, array){
         return total+value;
}

let sum1 = numbers2.reduce(add);
console.log(sum);

//Some method- used to check the value of each item in a collection individually.

let numbers3 = [1,3,7,9,12,17];

let higherThanTen = numbers3.some(
function(value){
    return value > 10;
}
);
console.log(higherThanTen);

//Every Method- executes a function for each array element.If one of the elements results in a false output the entire array, will result in a false output.
let numbers4 = [1,3,7,9,12,17];

let higherThanTen1 = numbers4.every(
function(value){
    return value > 10;
}
);
console.log(higherThanTen1);

//Find method- iterates over an array to find a certain value.
let supers7 = ['Superman','Batman','Flash','GreenLantern','Wonder Woman','Aquaman','Red Tornado', 'Cyborg','Black Lightning','Zatana', 'Shazam','Hawkgirl','Black Canary'];

let findSuper7 = supers7.find(
    function(value){
      return value === 'Shazam';
    }
);
console.log(findSuper7);

//find index
// if the value is not indicated the output will be -1.
let supers8 = ['Superman','Batman','Flash','GreenLantern','WonderWoman','Aquaman','Red Tornado', 'Cyborg','Black Lightning','Zatana', 'Shazam','Hawkgirl','Black Canary'];

let findSuper8 = supers8.findIndex(
    function(value){
      return value === 'Shazam';
    }
);
console.log(findSuper8);



const pizzas = ['Pepperoni', 'Hawai','Periperi','Boerer'];//finding individual index

// pizzas.forEach(
//     function(pizza,i){
//     alert('${i}- ${pizza}');
//     }
// );

//coverting to UpperCase
let pizzasCap =pizzas.map(
    function(v,i,a){
        return v.toUpperCase();
    }
);

console.log(pizzasCap);

//checking for values greater than 3
let pizzas3 =pizzas.every(
    function(value){
        return value.length >3;
    }
);

console.log(pizzas3);


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




