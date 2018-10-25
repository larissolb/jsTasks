//Задача 1

'use strict';

let div = document.getElementById('info'); //получен див
let show = document.getElementById('show'); //получено поле с радиокнопкой "showBtn"
let hide = document.getElementById('hide'); //получено поле с радиокнопкой "hideBtn"

let hideBtn = document.getElementById('hideBtn'); //получена радиокнопка "showBtn"
let showBtn = document.getElementById('showBtn');// получена радиокнопка "hideBtn" 

        showBtn.addEventListener('click', showInfo); // Добавлено событие по клику мышки на радиокнопку "showBtn" 
        function showInfo(){ //Запущено действие при клике на радиокнопку "showBtn" 
           if (showBtn.checked) {  //Если радиокнопка showBtn выбрана, то ...
          console.log(showBtn, "checked"); //проверка в консоли, что радиокнопка showBtn выбрана
          div.style.display = 'block'; // .. открывается див с информацией
          hide.style.display = 'block'; //..открывается поле с радиокнопкой "hideBtn"
          show.style.display = 'none'; //..скрывается поле с радиокнопкой "showBtn"
          console.log('div is opened'); //..проверка в консоли, что див открылся
          }
      hideBtn.addEventListener('click', hideInfo); // Добавлено событие по клику мышки на радиокнопку "hideBtn"
          function hideInfo(){ //Запущено действие при клике на радиокнопку "hideBtn"
          if (hideBtn.checked) { //Если радиокнопка hideBtn выбрана, то...
          console.log(showBtn, "no checked"); // проверка в консоли, что радиокнопка showBtn не выбрана
          console.log(hideBtn, "checked");// проверка в консоли, что радиокнопка hideBtn выбрана
          div.style.display = 'none';  //..скрывается див
          hide.style.display = 'none'; //..скрывается поле с радиокнопкой hideBtn
          show.style.display = 'block';//...открывается поле с радикнопкой showBtn
          hideBtn.checked = false; // скрытие выделения внутри радиокнопки hideBtn
          showBtn.checked = false; // скрытие выделения внутри радиокнопки showBtn
          console.log('div is closed'); //проверка в консоли, что див закрылся
          }
          }
        }
        
      
      

