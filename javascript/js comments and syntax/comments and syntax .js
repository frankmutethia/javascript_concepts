// JS: Syntax and Comments:

// There are many statements such as alert
//e.g. alert("Morning Mr.Stark");
// for double alert statements
// ["Good Morning Avengers." ,"Hulk ate all the bacon, more has been ordered."].forEach(alert);

//Comments:
//- single-line comments
/* - double-line comments
*/

// Functions:
//A block of code or statements that perform a specific task.

//Even and Odd Number definition:

function num(value){
    if(value%2 == 0){
        console.log("Even number");
    }
    else{
        console.log("Odd number");
    }
}

num(2);

or

function isEven(value){
    if(value%2 ==0){
        console.log("Even Number");
    }
    else{
        console.log("Odd Number");
    }
}

isEven(5);


//power function

function power(num1,num2){
    return Math.pow(num1, num2);
}
console.log(power(5,2));