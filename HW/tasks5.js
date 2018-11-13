//Задача 1

function buildField(N) {
      'use strict';
let rowDiv = document.createElement('div');
    rowDiv.id = 'row';
    let script = document.getElementsByTagName('script')[0];
    document.body.insertBefore(rowDiv, script);
for (let i = 0; i < N; i++) {
    let colDiv = document.createElement('div');
    colDiv.id = 'col';
    rowDiv.appendChild(colDiv);
    for (let i = 0; i < N; i++) {   
      let cellDiv = document.createElement('div');
      cellDiv.id = 'cell';
      colDiv.appendChild(cellDiv);
  }
}
  }
buildField(prompt('задайте кол-во ячеек'));

//Задача 2 про текущее время.

function clock() {
     'use strict';
let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

currentTime = "Текущее время - "+ hours + ":" + minutes + ":" + seconds;
if (document.layers) {
 document.layers.current-time.document.write(currentTime);
 document.layers.current-time.document.close();
}
else document.getElementById("currentTime").innerHTML = currentTime;
 setInterval("clock()", 1000);
}
 clock();
 
 //Задача 3 про вывод массива данных в таблицу
 let users = createUserArr(1, 'Milk', 'fdhjfg@fhr.ru', '79558835', 'book');//  данные для вывода в таблицу
function createUserArr(id, name, email, phone, position) {
   let arr = [];
   for (let i = 0; i < 100; i++){
       arr.push(
           {
               id: i,
               name: name,
               email: email,
               phone: phone,
               position: position
           }
       )
   }
 
   return arr;
}
 let table = '<table>';
table = table + '<thead>';
table += '<tr>';
table += '<td class="head">' + '№' + '</td>';
table += '<td class="head">' + 'Имя' + '</td>';
table += '<td class="head">' + 'email' + '</td>';
table += '<td class="head">' + 'Телефон' + '</td>';
table += '<td class="head">' + 'Должность' + '</td>';
table += '</thead>';
for(let i=0; i < users.length; i++ ) {
    table += '<tbody>';
    table += '<tr>';
    table += '<td>' + users[i].id + '</td>';
    table += '<td>' + users[i].name + '</td>';
    table += '<td>' + users[i].email + '</td>';
    table += '<td>' + users[i].phone + '</td>';
    table += '<td>' + users[i].position + '</td>';
    table += '</tr>';
    table += '</tbody>';
}
    window.onload = function() {
        document.getElementById('table').innerHTML = table + '</table>';
    };