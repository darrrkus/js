// Numbers
let anyNumber = - 4.6;
let inf = anyNumber / 0.0;
console.log(inf);

let aNan = anyNumber + " " - " " / "  ";
console.log(aNan);

//Strings
let userName = "Alex";
let strNum = '-4.6';
console.log(userName);
console.log(anyNumber == strNum); //true
console.log(anyNumber === strNum); //false

//Boolean
let isSixteen = true;
let isNotSixteen = false;

//null
// console.log(something); //null?

//undefined
let box;
console.log(box); //undefined

// objects
const user = {
    name: 'Oleg',
    lastname: 'Ivanov',
    age: 44,
    sex: 'male',
    isMarried: false
};
user.lastname = 'Ryazanov';
console.log(user['lastname']);

//arrays 
let colors = ['RED', 'GREEN', 4, user];
for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}
