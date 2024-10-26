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
    


  //1

  const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort((a, b) => a.age - b.age));

 //2
 
 function isPositive(num) {
   return num > 0;
    }
    function isMale(people2) {
        return people2.gender === 'male';
 
    }
    function filter(array, ruleFunction) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
           if(ruleFunction(array[i])) {
            result.push(array[i]);
           }
           
        }
        return result;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people2 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people2, isMale));

    //3

    const interval = setInterval(() => {
        console.log('Hallo');
    }, 3000);

  setTimeout(() => {
    clearInterval(interval);
    console.log ('Время истекло');
  }, 30000);

  4 
  function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})


//5 
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}`);
}


delayForSecond(() => sayHi('Глеб'));

