"use strict";

const maxLength = 5;
for (let y = 1; y <= maxLength; y++) {
    let str = '';
    for (let x = 1; x <= y; x++) {
        str += "*";

    }
    console.log(str);

}

first: for (let i = 0; i < 3; i++) {
    console.log(`1st level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`2nd level ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) {
                continue first;
            }
            console.log(`3rd level ${k}`);
        }
    }
}

first: for (let i = 0; i < 3; i++) {
    console.log(`1st level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`2nd level ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) {
                break first;
            }
            console.log(`3rd level ${k}`);
        }
    }
}