
//JAVASCRIPT WHILE AND DO WHILE LOOPS
//While loop repeats a given block of code as long as the statement remains true.
//Arrays are zero indexed.
//For loops are used when you know a head of time. Knowing the amount of loops and iterations ahead.
//Do while loops are used when we do not know a head of time.


//while loop
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
    console.log(`This number is ${m}`);
    m++;
}while(m <=10);


let y = 0;

while( y<=100){
  console.log('This car is ' +y+' MPH' +'top speed.');
  y+=10;
}

let j = 0;
let k = 10;

do{
    console.log(j);
    j++;
}while(j<=k);

