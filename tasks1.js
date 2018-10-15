//Задача 2. Вывести в консоль название времени года в зав-ти от тек.месяца
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

//Задача 6. Про тарелки и средство моющее.
/*Задать количество тарелок и количество моющего средства.
Моющее средство расходуется из расчета 0,5 на одну тарелку.
В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.*/
let dishes = 25;
let fairy = 40;
let spend = 0.5;
console.log('надо всего фейри:' + dishes * spend);
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
