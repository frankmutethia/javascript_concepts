
// JAVASCRIPT: 'this' keyword.
// This keyword - keyword mainly associated with Option.
// 4 Ways in which this can be defined:
//1. Global object
//2. Method within an object.
//3. A constructor on top of a function or class.
//4. DOM event handler.

console.log(this);//output will be the display of the current window
//or
function thisKeyWord(){
    console.log(thisKeyWord);
}

thisKeyWord();

//method- name of function within an object.
let game = {
name: "The Matrix",
platform: "Playstation5",
year: 2022,
release:function(){
    console.log(`The Matrix game was released in ${this.year}`);
}
}

game.release();

//nested objects- objects within other objects.

let game1 = {
    name: "The Matrix",
    platform: "Playstation5",
    year: 2022,

    characters:{//nested object
    main:"Neo",
    side: "Morpheus",
    villain: "Agent Smith",
    list(){
        console.log(`${this.main}.${this.side}.${this.villain}`);
    },
    }
    };
    
    game1.characters.list();

    //this-object method is created in.