//2
function filter(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}
console.log(filter(['Javascript','Java','Phiton'], 'ja'));
//3
y = Math.floor(32.58884);
z = Math.ceil(32.58884);
x = Math.round(32.58884);
console.log(y);
console.log(z);
console.log(x);

//4 
let numbers = [52, 53, 49, 77, 21, 32];
let min = Math.min(...numbers);
let max = Math.max(...numbers);
console.log(min);
console.log(max);

//5
function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomInt());
//6
function getRandomNumber(num) {
return Array.from({length : Math.floor(num / 2) }, () => Math.floor(Math.random() * num));
}
console.log(getRandomNumber(10));

//7
function getRandomNumber1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
console.log(getRandomNumber1(15, 20));

//8 
console.log(new Date());

//9
const currenDate = new Date();
currenDate.setDate(currenDate.getDate() + 73);
console.log(currenDate);

//10

function formatDate(date) {
    const days = ['Воскресение', 'Понедельник' , 'Вторник' , 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август',
         'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ];
         const year = date.getFullYear();
         const day = date.getDate();
         const month = date.getMonth();
         const dayOfWeek = days[date.getDay()];
         const hours = String(date.getHours()).padStart(2, 0);
         const minutes = date.getMinutes();
         const seconds = date.getSeconds();

         return `
         Дата : ${day} ${months[month]} ${year} - это ${dayOfWeek}.
         Время : ${hours}:${minutes}:${seconds}`;

    }
    console.log(formatDate(new Date()));