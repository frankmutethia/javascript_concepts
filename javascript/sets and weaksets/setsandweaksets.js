
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

