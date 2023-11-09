
//JAVASCRIPT: FUNCTION PARAMETERS AND ARGUMENTS
//Parameters - a special kind of variable used to pass information btwn functions or procedures.
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

