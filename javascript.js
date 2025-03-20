//Задание 1
//задача 1
console.log('Задача 1');
console.log('Пример 1');
console.log(2 + 2 * 2);

//задача 2
console.log('Пример 2');
const a = Math.sin(54);
const b = Math.cos(16);
const result = (a * b)**2;
console.log(Math.round(result));

//задача 3
console.log('Пример 3');
const x = 13.2 * 71.90;
const y = 2.4 / 7 ** 4;
const z = 16 * Math.sqrt(x) / y;
const result2 = (z + 3 ** Math.sqrt(49)) * 2 ** 7;
console.log(Math.round(result2));


//Задание 2
console.log('Задача 2');
const num1 = 1;
const num2 = 3;
const num3 = 6;
console.log(`Число ${num1} чётное?---`, num1 % 2 === 0);
console.log(`Число ${num2} чётное?---`, num2 % 2 === 0);
console.log(`Число ${num3} чётное?---`, num3 % 2 === 0);

//Задание 3
console.log('Задача 3');
let name = 'Elizaveta';
if (!name) {
    console.log('Hello, Guest!');
}
else {
    console.log(`Hello, ${name}!`);
}

//другой вариант
let name1;
console.log(`Hello, ${name1 ?? 'Guest'}!`); //т.к name1 = undefined, то возвращается значение справа

let name2 = 'Alex';
console.log(`Hello, ${name2 ?? 'Guest'}!`); //name2 != null || undefined