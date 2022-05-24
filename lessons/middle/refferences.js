"use strict";

let a = 5;
let b = a;
b = 10;
console.log(a);

let o1 = {};
let o2 = o1;
o2.name = "Oleg";
console.log(o1);
o1.surname = "Ivanov";

function copy(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        console.log(`${key} - ${mainObj[key]}`);
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

let newObj = copy(o2);

console.log(newObj);
newObj.birthday = '26/01/1978';
console.log(newObj);
console.log(o2);


//

const add = {
    nationality: "Ukrainian"
};

const newLocal = Object.assign(newObj, add);
newLocal.mother = "Ivanova Klavdia";
console.log("New local:");
console.log(newLocal);//
console.log("New obj:");
console.log(newObj);
console.log('add');
console.log(add);


const newObject = {
    a: 1,
    b: 2,
    c: 3
};
console.log(Object.assign({}, newObject));


const oldArray = [1,3,5,7];
const newArray = oldArray.slice();
newArray.push(8);
console.log(newArray);
console.log(oldArray);


//spread operator
const video = ['youtube', 'vimeo', 'netflix'];
const blogs = ['reddit', 'wordpress', 'blogger'];
const internet = [...video, ...blogs, 'facebook', 'instagram'];
console.log(internet);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const numbers = [2,5,7,9];
// log(...numbers);

const newNumbers = [...numbers]; //[2,5,7,9]
newNumbers[0] = 10;
console.log(newNumbers); //10,5,7,9
console.log(numbers); //2,5,7,9

const q = {
    one: 1,
    two : 2
};
const w = {...q};
w.three = 3;
console.log(w);
console.log(q);