//Задача 1

function buildField(N) {
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
buildField(prompt('задайте кол-во ячеек в поле'));

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
else document.getElementById("current-time").innerHTML = currentTime;
 setInterval("clock()", 1000);
}
 clock();
