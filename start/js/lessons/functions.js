"use strict";
// global vs local variable (case 1)
let joinedText = 'Some text!';
function saySomeText(text, arg1) {
    joinedText = text + arg1;
    console.log(joinedText); //Hello, Oleg! 
    // global variable value changed
}

saySomeText("Hello,", " Oleg!");
console.log(joinedText); //Hello, Oleg!

console.log("=========================");

// global vs local variable (case 2)
let someText = 'Some text!';
function sayAnotherText(text, arg1) {
    let someText = text + arg1;
    // local variable 
    // doesn't change global variable value
    console.log(someText);      // Hello, Alex!
}

sayAnotherText("Hello,", " Alex!");
console.log(someText); //Some text!

//=========return from function
function calc(a, b, sign) {
    switch (sign) {
        case '+':
            return a + b;
            console.log("unreachable code");
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
            default:
                console.log("unknown function!");
                return;
    }

}

console.log(calc(2,3,"-"));

//=========================
let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // "John" 

//=======================
function makeWorker() {
    let anotherName = "Pete";

    return function () {
        console.log(anotherName);
    };
}

let anotherName = "John";

// create a function
let work = makeWorker();

// call it
work(); // Pete