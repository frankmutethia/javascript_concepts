
//JAVASCRIPT HOW TO USE ARRAY METHODS
//pop-removes last item from an array.
//shift- removes the first item in an array.
//unshift- adds a new item to the beginning of an array.
//push- adds item to an array, at the end.

let supers = ['Superman','Batman','Flash','GreenLantern','Wonder Woman','Aquaman'];

console.log(supers[supers.length-1]);


let supers1 = ['Superman','Batman','Flash','GreenLantern','Wonder Woman','Aquaman'];
supers1.unshift('Doctor Fate');
supers1.push('Blue Bettle');
console.log(supers1);
console.log(supers1.indexOf('GreenLantern'));
console.log(supers1.includes('Batman'));
console.log(supers1.pop());

let newsupers = supers1.concat(['Kid Flash', 'Aquaboy','Miss Martian']);
 console.log(supers1);
 console.log(newsupers);
 console.log(supers.join());
 //join- takes an array and converts it into a string. You can also join them using a bar(|).

 //Split method -converts a String into an array.
 let atom = "Protons, Neutrons, Electrons";
 let atomArray = atom.split(",");
 console.log(atomArray);

 //Slice - non-destructive method of an array.

let supers2 = ['Superman','Batman','Flash','GreenLantern','Wonder Woman','Aquaman','Red Tornado', 'Cyborg','Black Lightning','Zatana', 'Shazam','Hawkgirl','Black Canary'];

console.log(supers2);

let powerhouse = supers2.splice(2,6);

console.log(supers2);

//Splice- removes items from an array and replaces them with new ones. Destructive method because it alters our array.
let supers3 = ['Superman','Batman','Flash','GreenLantern','Wonder Woman','Aquaman','Red Tornado', 'Cyborg','Black Lightning','Zatana', 'Shazam','Hawkgirl','Black Canary'];

supers3.splice(6,1, "Starfire");//supers3.splice(6,1)- removes an item only without replacing it.

console.log(supers3);

//Sort
let supers4 = ['Superman','Batman','Flash','GreenLantern','Wonder Woman','Aquaman','Red Tornado', 'Cyborg','Black Lightning','Zatana', 'Shazam','Hawkgirl','Black Canary'];

supers4.sort();

console.log(supers4);
