const arr = [1, 2, 3];
const arrObj = {
    0: 1,
    1: 2,
    2: 3
};

arrObj[3] = 4;
arrObj[6] = 7;
arr[3] = 4;
arr[16] = 7;
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}
console.log("\n" + arr.length);
console.log(arr);
// console.log(arrObj);