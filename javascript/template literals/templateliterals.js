//JAVASCRIPT TEMPLATE LITERALS
//Template literals are literals delimited with backtick characters, allowing for multi-line strings, string interpolation with embedded expressions and tagged templates.

//Advantages of Template Literals:
//Allow writing of multiline strings.
//Provide an easy way to interpolate variables and expressions into strings.
//Allows expressions in strings. 
//Allows variables in strings.
// "/n" is added to break long sentences or paragraphs.

let title = "Sonic the Hedgehog ";
let platform = 'SEGA ';
let year = 1991 ;

let info = title + "was released by " + platform + "in the year " + year;
let info7 = `${title} was released by ${platform} in the year ${year} `;
let info5 = `${title}`;

console.log(info);

let num11 = 19000;
let num12 = 27000;
let sum = `The total sum is ${num11+num12}`;

console.log(sum);
