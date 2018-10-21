/* 
 Home Tasks 
Lesson 3
Lesson 4

Author: Larisa Fasolya
 */

//Lesson 3
/*Задача 1
Напишите функцию (), которая в зависимости от переданных
в нее целочисленных аргументов "количество дней", будет выводить
слово "день" в нужно форме ("если передали - 1, то 1 день",
"если передали - 3, то 3 дня" и т.д).*/

function printDay(d) {
    if ((d % 10) === 1) {
        console.log ('Task 1:', d, 'день');
    } else if ((d % 10) === 2) {
        console.log ('Task 1:', d, 'дня');
    } else {
         console.log ('Task 1:', d, 'дней');
    }
}
printDay(prompt('Укажите количество дней'));

/*Задача 3
Написать функцию клонирующую (создающую копию) массива.*/
let arrFirst = [5, 24.5, 'any text'];
function cloneArray (arrEnd) {
    let anyArr = [];
    for (i = 0; i < arrEnd.length; i++) {
        anyArr[i] = arrEnd[i];
    }
    return anyArr;
}
console.log("Task 3:" +"исходный", arrFirst, "копия", cloneArray(arrFirst));

/*Задача 4
Написать функцию подсчета суммы от n до m (рекурсия)*/

let n = 2;
let m = 2;
let sum = 0;
function sumNM(n, m) {
if(n <= m) {
    sum += n;
    sum = sumNM(n + 1, m);
}
    return sum;
}
console.log('Task4: sumfinal', sumNM(n, m));
 
/*Задача 5
Написать функцию, которая возвращает новую функцию,
которая увеличивает/уменьшает переданное число на указанный при карировании шаг (замыкание).*/

let changeNum = function(num) {
    return function (step) {
    return num + step;
    };
};
newNum = changeNum(2);
console.log('Task 5:', newNum(1));

//=====================================================================
//Lesson 4
/*Задание 1
1.1. создать 2 объекта sity1 и sity2 со следующими свойствами:
name, population, mayor
двумя разными способами (первый объект одним способом, второй другим)*/

//1 способ создания
let city1 = {
    name: 'SimCity',
    population: 500,
    mayor: 'Sims'
};

//2 способ создания
let city2 = new Object();
city2.name = 'FoxLife';
city2.population = 200;
city2.mayor = 'Fox';

//1.2. sity1 добавить метод, который позволяет забирать какую-то часть населения sity2 
//(и соответственно добавлять к своему)

city1.grab = function(howMuch) {
        city2.population -= howMuch;
        this.population += howMuch;
  };

//1.3. Написать функцию (вне этих объектов), которая показывает мэра города (в зависимости от объекта, 
//переданного ей в качестве аргумента)
function whoIsMayor(anycity) {
        if(anycity === city1) {
            mayor = city1.mayor;
        } else {
            mayor = city2.mayor;
        };
    };
 
//1.4. Создать объект president c методом changeCountryMayor(), благодаря которому 
//он сможет менять мэра города (в зависимости от объекта, переданного в качестве аргумента)
let president = {
    name: 'Cat',
    changeCountryMayor: function(city) {
        if (city === city1) {
            city1.mayor = president.name;
        } else if (city === city2) {
            city2.mayor = president.name;
        };
    }
};
president.changeCountryMayor(city2);
console.log('Новый мэр города', city2.name, city2.mayor);

//Задание 2
//Написать функцию, которая на вход принимает строку и подстроку и ищет ВСЕ вхождения подстроки в строку
let string = 'some sentences';
let underString = 'sentences';

function search(str, underStr) {
    for (let i = 0; i < str.length; ) {
        if (str.indexOf(underStr, i) !== -1){
            let num = str.indexOf(underStr, i);
            i = num + 1;
        } else {
            break;
        }
    }
}

//Задание 3
//Написать функцию - конвертер строки. Возможности: перевод всех символов в верхний регистр,
//перевод всех символов в нижний регистр;

function ConvertSymb(anyText, register) {
   if(register === 'нижний') {
       anyText.toLowerCase();
       console.log((anyText.toLowerCase())); 
   } else if (register === 'верхний') {
        anyText.toUpperCase();
        console.log(anyText.toUpperCase()); 
   } else {
       ConvertSymb(prompt('Нужно указать только слово "верхний" либо "нижний"'));
   }
}
ConvertSymb(prompt('Напишите текст, который нужно конвертировать'),prompt('Укажите регистр символов: нижний/верхний'));