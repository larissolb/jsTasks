// задание про генерацию игрового поля
"use strict";
//функция генерации поля  
let prize;
function buildField(N) {

let field = document.createElement('div');
    field.id = 'field';
    let script = document.getElementsByTagName('script')[0];
    document.body.insertBefore(field, script);
    console.log(field);
for (let i = 0; i < N; i++) {
    let colDiv = document.createElement('div');
    colDiv.id = 'col';
    field.appendChild(colDiv);
    for (let i = 0; i < N; i++) {   
      let cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      colDiv.appendChild(cellDiv);    
}
}
//Рандомное распределение призов
prize = document.querySelectorAll(".cell");
function generatePrize(prize, prizeCount) {
    for (let i = 0; i <  prizeCount; i++){
      prize[Math.round(getRandom(0, prize.length))].classList.add("cell-prize");
      }
  function getRandom(min, max) {
    return Math.random() * (max - min) + min; //x * (9-0) + 0
}
 return;
}
generatePrize(prize, 3); // размещено 3 случайных приза
console.log(prize);
}

// buildField(prompt('задайте кол-во ячеек'));
   buildField(4); //сгенерировано поле 4х4

//Предоставление 3-х попыток пользователю
let field = document.getElementById('field');
let attempts = 3; //кол-во попыток
let win = 0; //счетчик, сколько угадано
field.onclick = function(event) {//счетчик количества кликов
if(attempts > 0) {
    attempts--;
    document.querySelector(".counter").innerHTML = ('Количество оставшихся попыток: ' + attempts); //вывод информации о кол-ве оставшихся попыток
 if(event.target.classList.contains("cell-prize")) { //если поле, на которое наведено содержит то же, что ячейка приза, то
    event.target.innerHTML = "prize!"; //написать слово приз 
    event.target.style.background = "blue"; //закрасить синим цветом
    win++;
    } else  {
      event.target.style.background = "red"; //если не совпадает - закрасить красным цветом
   }
   if(win === 3) {
        alert ('You win!!!');//сообщение для пользователя о том, что он выиграл
    } else if(attempts === 0) {
  return alert('Game over, try again! Press F5'); //сообщение для пользователя о том, что игра окончена 
} 
}
};

