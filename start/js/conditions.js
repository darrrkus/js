"use strict";

//if, if else, else
let a = +prompt()
if (a > 3) {
    console.log("a greater then 3")
} else if (a < 0) {
    console.log("a less then 0");
} else {
    console.log("a >=0 and a<=3");
}

//ternary operator
let b = 3;
(b > 3) ? console.log("b>3") : console.log("b<=3");

//switch
b = '3';
switch (b) {
    case 3:
        console.log("b = 3");
    // break;
    case 5:
        console.log("b=5");
        break;
    default:
        console.log("smthng strng");
}

// true/false
// null, undefined, NaN
// "", 0 is always false
if (null || "" || 0 || undefined || NaN) {

    console.log("this is unreachable code");
}

// lazy logical operations
if (1 || console.log("1")) {
    console.log("right side of expression is unreachable");
}

// logical operators return last counted expression
// и запинается на лжи
// или запинается на правде
console.log(3&&2&&0); // result is 0, not false!!!
console.log(2&&undefined&&'fsdgdfgdfgdf');//undefined
console.log(false||10); //10


//task 
console.log(NaN || 2 || undefined); //2
console.log(NaN && 2 && undefined); //NaN
console.log(1 && 2 && 3); //3
console.log(!1 && 2 || !3); //false
console.log(!1 && 2 || !0); //true
console.log(25 || null && !3); //25
console.log(NaN || null || !3 || undefined || 5); //5
console.log(NaN || null && !3 && undefined || 5); //5
console.log(5 === 5 && 3<1 && 5); // false
