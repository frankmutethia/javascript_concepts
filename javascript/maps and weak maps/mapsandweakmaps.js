
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
