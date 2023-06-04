//JAVASCRIPT: TIMING EVENTS METHOD- setTimeout() and timeInterval():
//setTimeout- allows running of a function once after an interval of time.
//setInterval- allows running of a function regulary with the interval between the runs.

setTimeout(function sub(channel){
    console.log(`Subscribe to ${channel}`)
    
},  
3000, 'The Wzrd');//the method will runafter 3secs


//writing a reference to the function
function sub(channel) {
    console.log(`Subscribe to ${channel}`)
    
}
setTimeout(sub, 3000, 'The Wzrd');//the method will runafter 3secs


//clear timeout method
//writing a reference to the function
function sub(channel) {
    console.log(`Subscribe to ${channel}`)
    
}

let timer = setTimeout(sub, 3000, 'The Wzrd');//when the timeout method is assigned to a varible 

clearTimeout(timer);//there will be no output beacuse it will be cleared.

//adding a clearing button
const clear = () => {
    clearTimeout (timer);
    console.log(`clearTimeout() stopped the timer`);
}

const btn = document.getElementById('btn').addEventListener('click', clear);


//setInterval

function sub(channel) {
    console.log(`Subscribe to ${channel}`)
    
}

let timer1 = setInterval(sub, 3000, 'The Wzrd');


//display of name after 3 seconds
setTimeout ( function(firstName){
    console.log(`My name is ${firstName}`);
    
},
3000, 'The Wizard King');

//display name after 1s then repeat
function myName(firstName){
    console.log(`My name is ${firstName}`);
    
}
(myName, 1000, 'The Wizard King');

//log of numbers from 0 to 10, with 1s gap
function count(start,end){
    let timer = setInterval(() =>{
       console.log(start);
       if(start>= end){
          clearInterval(timer) 
       }
       else{
           start++
       }
    },1000);
}
count(0,10);




