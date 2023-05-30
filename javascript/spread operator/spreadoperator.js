//Spread Operator- allows objects and iterables to spread into individual values. Can be used with arrays, objects and functions.

let nums = [1,2,3];
let letters =["a","b","c"];
//the spread operator
let myArrays= [...nums,... letters, 4,5,6];


console.log(nums);
console.log(myArrays);


// const songs= [
//     {id1:1, name:"When the music stops"},
//     {id1:2, name:"The Plan"},
//     {id1:2, name:"I took a pill in Ibiza"},
// ];

// console.log(songs);

const songs= [
    {id1:1, name:"When the music stops"},
    {id1:2, name:"The Plan"},
    {id1:3, name:"I took a pill in Ibiza"},
];

const newsongs= {
    id:4,
    name:"Money trees",
    
};
songs.push(newsongs);

console.log(songs);

//without push
const songs1= [
    {id1:1, name:"When the music stops"},
    {id1:2, name:"The Plan"},
    {id1:3, name:"I took a pill in Ibiza"},
];

const newsongs1= {
    id:4,
    name:"Money trees",
    
};
const updatedsongs=[...songs,newsongs];
// songs.push(newsongs);

console.log(songs);
console.log(updatedsongs);

//another spread operator example
const hits= {
    title: "No Limit",
    artist: "G-Eazy",
    recordlabel: "Cash Money",
 };
 
 const newhit= {
     ...hits,
     otherartists:"Cardib,Rocky,French Montana",
     
 };
 
 console.log(hits);
 console.log(newhit);
 
 
//spread operator within a nested object 
const hits1= {
    title: "No Limit",
    artist: "G-Eazy",
    recordlabel: "Cash Money",
    relatedhits:{
        title1:"Like That",
        title2:"Sleepless",
        title3:"Be Friends",
        
    }
 };
 
 const newhit1= {
     ...hits1,
     otherartists:"Cardib, Rocky, French Montana",
       relatedhits:{
        ...hits1.realatedhits,
        title4:"Money Trees",
 }
 };
 
 console.log(newhit1);
 
 
 
 