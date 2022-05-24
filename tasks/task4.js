// => 
function calculateVolumeAndArea(sideLength) {
    if (typeof sideLength != 'number' || !Number.isInteger(sideLength) || sideLength < 0){
        return "При вычислении произошла ошибка";
    } else {
        let volume = sideLength*sideLength*sideLength;
        let fullVolume = 6*sideLength*sideLength;
        return `Объем куба: ${volume}, площадь всей поверхности: ${fullVolume}`;
    }
}


function getCoupeNumber(placeNumber) {
    if(typeof placeNumber != 'number' || !Number.isInteger(placeNumber) || placeNumber <0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (placeNumber == 0 || placeNumber>36){
        return  "Таких мест в вагоне не существует";
    } else {
        return Math.floor(placeNumber/4)+1;
    }

}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));

// console.log(getCoupeNumber(33));
// console.log(getCoupeNumber(7));
// console.log(getCoupeNumber(300));
// console.log(getCoupeNumber(0));
// console.log(getCoupeNumber(7.7));
// console.log(getCoupeNumber(-10));
// console.log(getCoupeNumber('Hello'));
