const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return "Семья пуста";
    }
    let str = "Семья состоит из: ";
    for (let name of arr) {
        str += name + " ";
    }
    return str;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let city of arr) {
        console.log(city.toLowerCase());
    }
}

function reverse(str) {
    if (typeof str != 'string') {
        return "Ошибка!";
    }
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return "Нет доступных валют";
    }
    let str = "Доступные валюты:\n";
    arr.forEach(currency => { 
        if(currency!=missingCurr) {
            str += currency + "\n";
        } 
     });
    return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));
// standardizeStrings(favoriteCities);
// console.log(reverse(125));