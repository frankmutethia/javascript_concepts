//JAVASCRIPT FOR LOOP
//Loops allow performing of more tasks with less code.
//Used to loop over a piece of code for several times. Composed of:
// -the initialiser
// -the condition 
// - final expression

for([initialiser];[condition];[finalExpression]){
console.log();
}

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
    console.log(`${colours70[colour70]} is my favourite colour`);
}
// document.getElementById("demo").innerHTML = text;
//we revisit for loop

