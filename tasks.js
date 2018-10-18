/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Задача 1
let a = 20; //ширина
let b = 30; //длина
let c = 50; //высота
console.log(2 * (a * b + b * c + a * c)); //6200
console.log(a > c ? "width more" : "height more"); //height more

// ЗАДАЧА 2
/*На садовом участке площадью 10 соток (1 сотка = 100 кв м), разбили грядки 15 на 25 метров. 
 * Сколько м2 осталось незанято? */
let total = 10;
let side1 = 15;
let side2 = 25;
console.log(total * 100 % side1 * side2);//250 кв м

//задача 3. про овалы
let OvalBig = 15; //dm^2
let cut = 600; // cm^2
console.log('диаметр овала после обрезки:' + (OvalBig - (cut / 100))); //9dm^2

//задача 4. Поменять переменные, чтобы Х всегда был меньше Y
let x = 20;
let y = 11;
let p = x;

x = x < y ? x : y;
y = y > p ? y : p;
console.log('x=' + x, 'y=' + y);

//задача 5. Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n.

let m = 10.45;
let n = 10.15;

console.log(Math.abs(10-m) === Math.abs(10-n) ? 'одинаково близки' : 
        Math.abs(10-m) < Math.abs(10-n) ? m : n);


//Задание 6
//Задать размер ипотечного кредита , процентную ставку , кол-во лет . 
//Найти переплату по кредиту, значение переплаты вывести в консоль.

SumCredit = 100000;
Prt = 15;
Year = 2;

console.log('Сумма переплаты за весь период: ' + (SumCredit * Prt/100 * Year));

 
