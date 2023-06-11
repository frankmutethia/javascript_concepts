//JAVASCRIPT CLOSURE
//Closure - a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function.
//Functions that are bundled together with the lexical environment, within which that function was declared.
const outer = () =>{
    //each function has its own lexical environment

    //lexical environment
    let outerVar = "outer";
    console.log(outerVar);

    //lexical environment
    function inner(){
        let innerVar = 'inner'
        console.log(outerVar);
    }
    inner();
}

outer();


let crust = 'Crust';

const earth = () => {
   let mantle = 'Mantle';

   const message = () =>{
    let core = 'Core';
    console.log(`The Earth is made up of the ${crust}, the ${mantle} and the ${core}`);
   
}
return message;
   
}

let msg = earth();
msg();