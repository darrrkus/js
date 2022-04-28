"use strict";

const lines = 5;
let result = '';
let middle = Math.floor((lines * 2 + 1) / 2);
for (let i = 1; i <= lines + 1; i++) {
    for (let j = 0; j < lines * 2 + 1; j++) {

        if (j < middle + i && j > middle - i) {
            result += '*';

        }
        else if(j==middle+i){
            result += '\n';
            break;
        } 
        else {
            result += '-';
        }
    }

}
console.log(result);
console.log("-------------");
console.log('=======');