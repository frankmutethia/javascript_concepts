
//JAVASCRIPT: RETURN KEY WORD
//Return statement is used to return a particular value from the function to the function caller.


function test(){
    return "hello";
}
console.log(test());

//Return statement can be only used multiple times when the code is expressed as a block.Otherwise the next return key word,after the initial key word will not be executed.

let login = function(password){
    if(password === 'Jarvis'){
        return 'Welcome Home Mr.Stark'
    }
    else{
        return 'Intruder Alert! Defence systems on';
    }
}

let result30 = login('Jarvis');
console.log(result30);

//or
// console.log(login("The New Genesis Chambers"));

function favNum(num){
    return num;
}

let myfavNum = favNum(7);

console.log(`My favourite number is ${myfavNum}`);



//password checker
function password34(a){
    if(a.length>8){
        return console.log(`You chose ${a} as a password`);
    }else{
        return console.log("Not enough letters.");
    }
}

password34("Ye");
password34("ZeusYouHaveBetrayedMe");

