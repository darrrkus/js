"use strict";


function learnJS(lang, callback){
    console.log(`I'm learning ${lang}`);
    callback();
}

function show(){
    console.log("I'm smart");
}

learnJS('JavaScript', show);


const test = getTestVariable();
console.log(test); //Test passed
function getTestVariable(){
    return "Test passed"
}