"use strict";

let str = 'teSt';
console.log(str.toUpperCase()); //str didn't change
console.log(str.toLowerCase()); // str didn't change

let someFruit = 'Some fruit';
console.log(someFruit.indexOf('r')); //6

// slice gets start and end indexes, some of them 
// can be negative
console.log(someFruit.slice(0,4)); //Some
console.log(someFruit.slice(-6,-1));//frui
console.log(someFruit.slice(-6));//fruit

// substring gets start and end indexes, 
// they can't be negative
console.log(someFruit.substring(0,4)); //some

//substr gets start index ang lenght of result substring
//@deprecated
console.log(someFruit.substr(0,10)); //Some fruit

// split returns array of strings
console.log(someFruit.split(' '));

console.log(typeof "Hllo");
console.log(typeof "Hllo".trim());
console.log(typeof new String("Hllo"));
