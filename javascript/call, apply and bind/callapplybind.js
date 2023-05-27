
// JAVASCRIPT: Using Call, Apply and Bind
//Call Method - method that can be used in different objects and can be used to link methods and functions.
//Call and apply are one time uses only.


const game9 = {
    title: "Super Mario",
    year: 1983,
};

function info(){
    console.log(`${this.title} game was released in the year ${this.year}`);
}

info.call(game9);

//Apply- we pass additional arguments as an array.

const game19 = {
    title: "Super Mario",
    year: 1983,
};

function info(platform,character){//added as further parameters
    console.log(`${this.title} game was released in the year ${this.year},on the platform ${platform} and has the character ${character}` );
    // console.log(this);
}

info.apply(game19, ["SEGA","Luigi"]);//the arguments are added as an array


//Bind offers a more permanent solution as compared to Apply and Call methods.

const game29 = {
    title: "Super Mario",
    year: 1983,
};

function info(platform,character){//added as further parameters
    console.log(`${this.title} game was released in the year ${this.year},on the platform ${platform} and has the character ${character}` );
    // console.log(this);
}

info.apply(game29, ["SEGA","Luigi"]);//the arguments are added as an array
info();

//bind method
const gameInfo = info.bind(game29, "SEGA","Luigi");
gameInfo();

const game39={
    title:"Super Mario",
    year:1983,
}

gameInfo.bind(game39);
gameInfo();