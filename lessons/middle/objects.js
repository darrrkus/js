"use strict";

// const obj = new Object(); bad wat to define object

const options = {
    name: 'test',
    width: 1920,
    height: 1080,
    colors: {
        border: 'red',
        bg: 'blue' 
    },
    makeTest: function(){
        console.log("I'm doing test");
    }
};

// console.log(options);
// delete (options.height);
// console.log(options);

/*
for (let key in options){
    if (typeof options[key] === 'object'){
        for (let item in options[key]){
            console.log(options[key][item]);
        }
    } else {
        console.log(`${options[key]}`);

    }
    // console.log(options[key]);
    // if (key == 'height') break;
}
*/
// console.log(Object.keys(options).length);
// options.makeTest();


console.dir([1,2,3]);

const soldier = {
    health: 400,
    armour: 100
};

const john = {
    health: 100
};

// __proto__ is deprecated
john.__proto__ = soldier;
console.log(john); //{ health: 100 }
console.log(john.armour);//100;