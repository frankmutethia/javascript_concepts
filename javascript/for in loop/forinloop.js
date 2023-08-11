
//JAVASCRIPT FOR IN LOOPS
//It is used to iterate different innumerable properties of an object.
//After creating an object you are allowed to change its properties.

let superhero = {
    name : 'Green Lantern',
    origin: 'Earth',
    power: 10000,
}

for(let x in superhero){
  console.log(`${x}: ${superhero[x]}`)

}


let salaries = {
    Peter : 24000,
    Paul: 48000,
    Pitbull: 58000,
}
for (let e in salaries){
 let salary = `${salaries[e]}`;
 console.log(`${e} earns ${salary} per month.`);
}


let superhero1 ={
    name :'Superman',
    strength: 'Sun',
    weakness:'Kryptonite',
}

superhero1.name= 'Superman';
delete superhero1.weakness;
superhero1.alignment= 'Superstrength';
console.log(superhero1);

// for...in loop iterating over the properties
let house = {
    type: 'Detached',
    build: 'brick',
    year: 2019,
    price: 250000,
    driveway: true,
}

for(let property in house){
console.log(`${property}: ${hosuse[proprty]} `);
}