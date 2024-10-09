function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function starGame() {  
  const randomInt = getRandomInt(0,100);
  while(true) {
    const a = prompt('Введите число')
    if (isNaN(a)) {
      alert('Начните игру снова и введите число от 1 до 100 Спасибо');
      break;
    }
    if(a < randomInt) { 
        alert('У меня больше')
        continue
    }
    if(a > randomInt) {
        alert('У меня меньше')
        continue
    }
    alert('Угадал')
    break;
}
}

function min(a, b) {
if (a < b) {
  return a ;
} else {
return b;
 }

  }
  console.log(min(4, 7));



function evenOdd(number) {
  return number % 2 === 0;
  
}
console.log(evenOdd(5));


const result = 9 ** 2;
console.log(result);


function add(a, b) {
  return a ** b;
}
let squere = add(5, 3);
console.log(squere);


function age() {
  const value = Number(prompt('Сколько тебе лет?'));
  if (isNaN(value)) {
    alert("Вы ввели не число")
  } else if (value < 0) {
    alert('Вы ввели неправильное значение');
  } else if (value <= 12) {
    alert('Привет, друг!')
  } else {
    alert('Добро пожаловать!');
  }
}
 age();


function production() {
const a = Number(prompt('Введите 1 число'));
const b = Number(prompt('Введите 2 число'));
if (isNaN(a) || isNaN(b)) {
  return 'Одно или оба значения не являются числом';
  } else {
  return `Произведение чисел ${a * b}`;
  } 
}
console.log(production());

function transformation() {
 let n = prompt('Введите число');
 let m = (n * n);
 if (isNaN(n) || isNaN(m)) {
return `Переданный параметр не является числом`;
} else {
return `n в кубе равно ${Number(n) * Number(m)}`;
 }
}
 console.log(transformation());



 function getRectangleArea() {
  return this.p * (this.r * this.r);
}
function getRectanglePerimeter() {
  return 2 * (this.p * this.r);
}

const radius1 = {
  p: 9,
  r: 5,
  getArea: getRectangleArea,
   getPerimeter: getRectanglePerimeter,
};

const radius2 = {
 p: 7,
 r: 8,
 getArea: getRectangleArea,
 getPerimeter: getRectanglePerimeter,
};

console.log(radius1.getArea());
console.log(radius1.getPerimeter());
console.log(radius2.getArea());
console.log(radius2.getPerimeter());




 








