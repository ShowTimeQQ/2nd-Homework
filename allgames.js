//Game 1 
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

  //Game 2
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
   alert("верный ответ");
}else {
    alert("Ответ не верный")
}
}


//Game 3

function game3() {
    let str = prompt('Введите текст');
    return str.split('').reverse('').join('')
  
}

// Game 4 
function Victorina() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }

    ];


    let count = 0;
    for (let i = 0; i < quiz.length; i++) {
     let userUnswer = +prompt(`${quiz[i].question}\n ${quiz[i].options.join('\n')}`);
        if (userUnswer === quiz[i].correctAnswer) {
            alert('правильный ответ');
            count++;
        } else {
            alert('Не правильно!');
        }
    }
    alert('Кол-во правильгых ответов ' + count);
}

//Game 5
function computerPlay() {
    const options = ["камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
  }

function game5 () {
    const player = String(prompt("камень , ножницы или бумага"));
    const computer = computerPlay(); 
    alert(`Ответ компьютера: ${computer}`);

        const winner = {
          камень: "ножницы",
          бумага: "камень",
          ножницы: "бумага",
        };

        if (player === computer) {
         alert( "Ничья!");
        } else if (winner[player] === computer) {
         alert( "Вы победили!");
        } else {
          alert( "Компьютер победил!");
        }
    }
console.log(game5());
    // Game 6 

function game6() {
  const rgb = (`rgb(${getRandomInt(0, 255)} ${getRandomInt(0, 255)} ${getRandomInt(0, 255)})`);

  const block = document.querySelector('.gap-games');

  block.style.backgroundColor = rgb ;

  
}
