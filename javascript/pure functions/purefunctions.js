//JAVASCRIPT: PURE FUNCTIONS
//Pure function - function that for some given arguments produces the same outcome, without side effects.


const sum = (f1, f2) =>{
console.log(f1+ f2);
}
sum(20, 4);

//impure function

const randomNum =(num) =>{
    console.log(num + Math.random());
}
randomNum(14)

//Pure functions- return the same output if we use the same input parameter.
//Impure functions- return different outputs when we pass the same arguments multiple times.

//impure function

let initResult = 0;

console.log(`before function = ${initResult}`);

const addNums =(n1,n2) => {

    const sum= n1+n2;

    initResult =sum;
    
    return sum;
    
}

console.log(addNums(5,5));
console.log(`after function = ${initResult}`);