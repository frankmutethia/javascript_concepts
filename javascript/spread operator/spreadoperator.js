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
