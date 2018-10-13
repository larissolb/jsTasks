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
console.log(total * 100 - side1 * side2);//625 кв м

//задача 3. про овалы
let OvalBig = 15; //dm^2
let cut = 600; // cm^2
console.log('диаметр овала после обрезки:' + (OvalBig - (cut / 100))); //9dm^2

//задача 4. Поменять переменные, чтобы Х всегда был меньше Y
let x = 20;
let y = 11;

x < y ? true : (x = y, y = ++y);
console.log('x=' + x, 'y=' + y);

