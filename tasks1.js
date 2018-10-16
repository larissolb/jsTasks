//Задача 1*
/*Есть три вершины X, Y, Z.
Их координаты (x1, x2), (y1, y2), (z1, z2) заданы как целые числа.
Нужно определить - является ли треугольник с заданными координатами прямоугольным.*/
//с^2=a^2+b^2
let x1 = 2, x2 = 2, y1 = 2, y2 = 4, z1 = 2, z2 = 4;
let lengthVector = Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2);
let lengthXY = Math.pow((y1 - x1),2) + Math.pow((y2 - x2),2); 
let lengthYZ = Math.pow((z1 - y1),2) + Math.pow((z2 - y2),2); 
let lengthXZ = Math.pow((z1 - x1),2) + Math.pow((z2 - x2),2);

if (lengthVector === (lengthXY + lengthXZ)) { 
     console.log('треугольник прямоугольный');
} else if (lengthVector === (lengthXY + lengthYZ)) {
     console.log('треугольник прямоугольный');
 } else if (lengthVector === (lengthYZ + lengthXZ)) {
    console.log('треугольник прямоугольный');
 }
else {
    console.log('треугольник не прямоугольный')    
 }
////Задача 2*. Вывести в консоль название времени года в зав-ти от тек.месяца
let monthNum = new Date().getMonth();
if (monthNum <= 2) {
  console.log('Winter');
} else if (monthNum <= 5) {
    console.log('Spring');
} else if (monthNum <= 8) {
  console.log('Summer');
} else if (monthNum <= 11) {
  console.log('Autumn');
} else {
    console.log("Error");
}

////Задача 6*. Про тарелки и средство моющее.
///*Задать количество тарелок и количество моющего средства.
//Моющее средство расходуется из расчета 0,5 на одну тарелку.
//В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
//В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.*/
let dishes = 25;
let fairy = 40;
let spend = 0.5;
for (let i = 1; i <= dishes; i++) {
while (fairy > 0 ) {
  fairy = fairy - spend; 
  console.log('осталось fairy после мытья тарелки:' + fairy);
  dishes = --dishes;
  if (dishes < 1) break
} 
}
 console.log('осталось fairy:' + fairy);
 console.log('осталось грязных тарелок:' + dishes);

//// Задача 8*
//// Создайте программу, выводящую на экран все неотрицательные элементы последовательности 90 85 80 75 70 65 60.
let a;
for (a = 90; a > 0; a-= 5) {
  if (a === 55) break;
  console.log(a);
}

//// Задача 9*
//// Создайте программу, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128.
let b = 2;
for (i = 1; b >= 2; i++) {
  console.log(b);
  b = b * 2;
  if (i === 20) break;
}
