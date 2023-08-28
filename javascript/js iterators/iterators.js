
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

pizzas.forEach(
    function(pizza,i){
    alert(`${i}- ${pizza}`);
    }
);

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

