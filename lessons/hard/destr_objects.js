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

let {border, bg} = options.colors; //names must match object properties
border = 'yellow'; //object property value doesn't change
console.log(options.colors["border"] + " " + bg);