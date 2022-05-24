//=> "Это 2 часа и 30 минут"

function getTimeFromMinutes(minutes) {
    if(typeof minutes !='number' || !Number.isInteger(minutes)|| minutes<0){
        return "Ошибка, проверьте данные" ;
    }
    let hours = Math.floor(minutes/60);
    let mins = minutes%60;
    return `Это ${hours} часа и ${mins} минут`;
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));