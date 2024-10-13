
//создать функцию получения случайного числа 
//2. создать переменную со случайным числом "x"
//3.создать вторую переменную со случайным числом "y"
//4.создать массив со знаками 'sign' +-
//5 Создать переменную со случайным число от 0 до 3 RandomNumber
//6 eval(x sign[RandomNumber] y)
// sign [0] 
//Функция с 4 переменными 
// ctr z вернуть изминения на 1 клик
//редактировать код shift alt F
//Перемещении строки alt стрелки вверх вниз

//ИГРА 2
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function game2() {
let sign = [' ', '+','-','*','/'];
let i=Math.floor(Math.random() * 4) + 1
let x = getRandomInt(0, 10)
const result = `${getRandomInt(0, 10)} ${sign[i]} ${getRandomInt(0, 10)}`
alert(result);
const j = eval(result);
const userAnswer = +prompt("посчитай и ввведи ответ");
if (!isNaN(userAnswer) && userAnswer === j) {
   alert("верный ответ")
}else {
    alert("Ответ не верный")
}
}
alert(game2());


//1
const arrNumbers1 =[1, 5, 4, 10, 0, 3];
for (let i = 0; i < arrNumbers1.length; i++) {
    console.log(arrNumbers1[i])
    if (arrNumbers1[i] === 10) {
        break;
    }
}
//2
const arr2 = [1, 5, 4, 10, 0, 3]
console.log(arr2.indexOf(4));



//3
let greating = [1, 3, 5, 10, 20];
greating = greating.join (' ');
console.log(greating);

//4
const work = [];

for (let i=0 ; i<3; i++){
    const work2 =[];
    for(let i=0 ; i<3; i++) {
        work2.push[1]
}
work.push(work2);
}
console.log(work);
//5
let arr3 = [1, 1, 1];
arr2.push (2 ,2 ,2);
console.log(arr3);

//6
let product = [9, 8, 7, 'a', 6, 5];
product.sort();
console.log(product);

//7 
const product2 = [9, 8, 7, 6, 5];
const userNumber = +prompt('Введите число');
if ( product2.includes(userNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//8
let str = 'abcdef' ;
str = str.split('');
console.log(str);
str.reverse();
str = str.join('');
console.log(str);

//9
const hard = [[1, 2, 3],[4, 5, 6]];
// const newHard= [];
// for (let i = 0; i< hard.length; i++) {
//    newHard.push(...hard[i]);
// }
// console.log(newHard);
console.log(hard.flat());

//10
const mass =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < mass.length; i++) {
    if (mass[i + 1]) {
        console.log(mass[i] + mass[i + 1]);
    }
    
}
//11
function squere(eleven) {
    return eleven.map(item => item ** 2);
}
console.log(squere([1, 2, 3]));

//12
function getLength(word) {
    return word.map(item =>item.length);
}
console.log(getLength(['helloy' , 'Mickey']));

//13

function negativeNumbers(Negative) {
    return Negative.filter(items => items < 0);
    
}
console.log(negativeNumbers([-1, 2, -3, 4, 5, -6, 7, 8, -9, 10]));

//14
function randomNumb() {
    return Math.floor(Math.random() * 10); 
}
const number = [];
for (let i = 0; i < 10; i++) {
    number.push(randomNumb());
    
}
const evanNumber = [];


for (let i = 0; i < number.length; i++) {
   if (number[i] % 2 === 0 ) {
    evanNumber.push(number[i]);
    
}
}
console.log (evanNumber);

//15

function randomNumb2() {
    return Math.floor(Math.random() * 10); 
}
const number2 = [];
for (let i = 0; i < 10; i++) {
    number2.push(randomNumb2());
    
}

console.log (number2);
console.log (number2.reduce((a, b) => a + b) / number2.length);