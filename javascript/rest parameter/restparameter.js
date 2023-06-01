//JAVASCRIPT: REST PARAMETER
//Has the same syntax as that of the spread operator.
//It allows a function to take in an indefinite amount of arguments as an array. It practically bundles arguments together into an array.
//Arguments can not be used with an arrow function.


function sum(a,b,c){ //functions can be called with as many arguments
    return a+b+c;
}

console.log(sum(1,2,3));


//taking a list of values and putting them into an array
function restParameter(...z){
    console.log(z);//array created by the above rest parameter
}

restParameter("lion","eagle","cheetah","elephant","rhino");//the output will be an array

//using a spread and rest parameter at the same time
function restParameter(...z){
    console.log(...z);//spread parameter
}

restParameter("lion","eagle","cheetah","elephant","rhino");//the output will be a list outside an array


function restParameter(x,y, ...z){
    console.log(...z);
    console.log(`The value of x is ${x}`);
    console.log(`The value of y is ${y}`);
}

restParameter("lion","eagle","cheetah","elephant","rhino");//output will be the individual values of x and y


//function colors; show the second color in the array
const colors = function (...colors){
    console.log(colors);
    console.log(colors[1]);
    
}

colors("blue","red","orange","purple");

//fetching values within the rest parameter
function heroes(a,b, ...c){
    console.log(c);
    console.log(c[1]);
}

heroes("superman", "batman", "the flash", "wonderwoman", "hawkgrirl", "greenlantern");//output will be wonderwoman