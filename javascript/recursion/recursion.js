//JAVASCRIPT RECURSION
//Recursion- a function which calls itself within the body of a function.

const greeting = () =>{
    console.log('Morning Mr.Stark');
}

//count down

const countDown = (num) =>{
    for (let i =num; i>=0; i--){
        console.log(i);
    }
}

countDown(7);

//recursion
const countDown1 = (num) =>{
//log the number
console.log(num);

//minus num by 1
  const updatedNum = num -1;
// the base case
if(updatedNum >=0){

countDown1(updatedNum)
}
}

countDown1(7);

//recursion function counting from 0 to 10, with base case

const counter = (num)=> {
    console.log(num);

    const updatedNum = num + 1;

    if(updatedNum <=10){
      counter(updatedNum)
    }

}

counter(1);