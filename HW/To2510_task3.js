let content,   firstCol = 1,
               secondCol = 1,
               thirdCol = 1;
               window.onload = function () {
               content = document.getElementById("content");
           };

           function sort_table(tbody, col, chooseCol) { //создание рядов
               let rows = tbody.rows, 
                   rlen = rows.length,
                   arr = new Array(),
                   i, j, cells, clen; //объявление переменных
               // заполнить массив значениями из таблицы
               for (i = 0; i < rlen; i++) { //создание ячеек
                   cells = rows[i].cells; 
                   clen = cells.length;
                   arr[i] = new Array();
                   for (j = 0; j < clen; j++) { //заполнение данных ячеек
                       arr[i][j] = cells[j].innerHTML;
                   }
               }
               
               // сортировать по указанному номеру столбца
               arr.sort(function (a, b) {
                   return (a[col] === b[col]) ? 0 : ((a[col] > b[col]) ? chooseCol : -1 * chooseCol); 
               });
               // заменить существующие строки новыми строками, созданными из отсортированного массива
               for (i = 0; i < rlen; i++) {
                   rows[i].innerHTML = "<td>" + arr[i].join("</td><td>") + "</td>";
               }
           }

let th1 = document.getElementById("th1");
th1.addEventListener('click', sort1);

function sort1 (event) {
    sort_table(content, 0, firstCol);
    firstCol *= -1; 
    secondCol = 1; 
    thirdCol = 1;
};

let th2 = document.getElementById("th2");
th2.addEventListener('click', sort2);

function sort2 (event) {
    sort_table(content, 1, secondCol);
    secondCol *= -1; 
    thirdCol = 1; 
    firstCol = 1;
};
let th3 = document.getElementById("th3");
th3.addEventListener('click', sort3);

function sort3 (event) {
    sort_table(content, 2, thirdCol);
    thirdCol *= -1; 
    firstCol = 1; 
    secondCol = 1;
};
