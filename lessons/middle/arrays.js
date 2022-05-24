"use strict";

let arr = [1, 2, 3, 4, 5];
/*
console.log(arr.pop()); //5
console.log(arr); //1,2,3,4
console.log(arr.length); //4
console.log(arr.push(6));//returns new array length


for(let value of arr){
    console.log(value);
}
*/

// arr[99] = 0;
// console.log(arr.length); //100
// console.log(arr);


//forEach can't use break and cotinue
arr.forEach((item, index, anArray) => {
    console.log(anArray[index] = item * 2);
});
console.log(arr);
arr.sort((a, b) => b - a); //changes arr
arr.reverse();              //changes arr
// arr.splice(2,3,8,8); //remove and insert
let concatedArr = arr.concat([12, 14, 16]);
console.log(arr);
console.log(concatedArr);

let filteredArr = concatedArr.filter(a => a > 4);
console.log(filteredArr);

let mappedArr = filteredArr.map(item => item / 2);
console.log(mappedArr);

let reducedValue = mappedArr.reduce((a, b) =>  a + b, 0);
console.log(reducedValue);

console.log(mappedArr.some(a => a ===5));
console.log(mappedArr.every(a => a > 5));

const str = "Have a nice day";
console.log(str);
const arrFromStr = str.split(" ");
console.log(arrFromStr);
console.log(arrFromStr.join(","));
