// задание про генерацию игрового поля
(function (global) {
"use strict";

//функция генерации поля  
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
      cellDiv.id = 'cell';
      colDiv.appendChild(cellDiv);    
  }
}
  }
// buildField(prompt('задайте кол-во ячеек'));
  buildField(4); //сгенерировано поле 4х4
  
  //Рандомное распределение призов
function generatePrize(cells, prizeCount) {
    for (let i = 0; i <  prizeCount; i++){
      cells[Math.round(getRandom(0, cells.length))].innerHTML= 'prize'; 
      }
}
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
generatePrize(cell, 3); // размещено 3 случайных приза

//Предоставление 3-х попыток пользователю
let field = document.getElementById('field');
// let attempts = 3; //кол-во попыток
// field.onclick = function() { //счетчик количества кликов
// if(attempts > 0) {
//     attempts--;
//     document.querySelector(".counter").innerHTML = ('Количество оставшихся попыток: ' + attempts); //вывод информации о кол-ве оставшихся попыток
// } else {
//   return alert('Game over'); //сообщение для пользователя о том, что игра окончена
// }
// }
 
 field.onclick = function (event) {
   
  if(event.target.innerHTML === ('prize')) {
     event.target.style.background = "blue";
     // alert("prize!");
    } else {
      event.target.style.background = "red";
   }
      
 }

}(window));
