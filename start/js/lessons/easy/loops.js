"use strict";

let index = 50;
while (index > 0) {
    index -= 6;
}
console.log(index); // -4;
console.log("==================")
do {
    index += 3;
    if (index == -1) {
        continue;
    } else {
        (console.log("index is " + index));
    }
} while (index <= 8);
console.log(index);

for (let i = 1; i < 10; i += 2) {
    if (i==7) {
        continue;
    }
    console.log(i);

    if (i == 7) {
        break;
    }
}