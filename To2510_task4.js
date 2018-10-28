// задание про генерацию игрового поля
(function (global) {
"use strict";
function buildField(N) {
 
let field = document.createElement('div');
    field.id = 'field';
    let script = document.getElementsByTagName('script')[0];
    document.body.insertBefore(field, script);
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
buildField(prompt('задайте кол-во ячеек'));

let col = document.getElementById('col'); // 
console.log(col);
let cells = col.children; // 
console.log(cells);

function generatePrize(col, prizeCount) {
    for (let i = 0; i <  prizeCount; i++){
        col.children[Math.round(getRandom(0, col.children.length))]
                  .classList.add("classname");
            

    }
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

generatePrize(col, 4);

let field = document.getElementById('field');
field.addEventListener('click', findPrize);

function findPrize (event) {
    if(cells.classList.contains("classname")) {
        console.log('win!');
    } else {
        console.log('no');
    }
}

}(window));
