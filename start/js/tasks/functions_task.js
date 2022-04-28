"use strict";

function getMathResult(base, count) {
    let resultString = '';
    if (count <= 1 || typeof count != 'number') {
        return base;
    } else { //count>=2
        let tempValue = base;
        for (let i = 0; i < count; i++) {
            resultString += tempValue;
            if (i != count-1) {
                resultString += '---';
                tempValue += base;
            }
        }
    }
return resultString;

}

let res = getMathResult(5, 7);
console.log(res);


function sayHello(name) {
    return`Привет,${name}!`;
}
console.log(sayHello('Oleg'));