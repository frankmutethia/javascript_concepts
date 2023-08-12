
//JAVASCRIPT FOR OF LOOP

//New loop gotten from the ES6 update.
let avengers=['Tony', 'Thor','Natasha','Pepper'] ;

for(x of avengers){//variable of iterable (value that can be looped over)
console.log(x);
}

//looping through a string letter by letter

let Bruce= 'The Dark Knight';// iterate the value data structure

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

//for in - when looping over properties of an object.
//for of- when looping over variable of an iterable data structure.
//They both enable control flow.


//iterate over array and break at the value green
let colors90 = ['Red','Orange', 'Blue','Green','White'];

for(x of colors90){
    if(x === 'Green'){
        break;
    }else{
    console.log(x);
    }
}

