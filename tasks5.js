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
