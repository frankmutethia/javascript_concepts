// JAVASCRIPT: DESTRUCTURING ASSIGNMENT
//Destructuring assignment-  expression used to unpack values from an array or properties from an object, into distict variables.

const game34 ={
    title: 'Fifa',
    platform: 'Frostbite',
    year: 1993,
}

console.log(game34);



const game35 ={
    title: 'Fifa',
    platform: 'Frostbite',
    year: 1993,
}

// let title= game35.title;
// let platform= game35.platform;
// let year= game34.year;

//Object Destructuring
// let{title,platform,year}= game35;

// console.log(title, platform, year);


//Object Destructuring changing to custom names
// let{title,platform,year: release}= game35;

// console.log(release);


//Array Destructuring- extracting multiple data arrays and objects. Allows writing of more concise and readable code.

const book =["Harry Potter","J.K Rowling", "1997",["Phoenix","Sorcerer","Hallows"]];

// let title =[0];
// let author =[1];
// let year =[2];

//array destructuring

let[title, author, year, [a, b, c]]= book;

console.log(a,b,c);
// console.log(title);
// console.log(author);
// console.log(year);