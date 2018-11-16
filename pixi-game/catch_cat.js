//import * as PIXI from 'pixi.js'
'use strict';

let width = window.innerWidth; //ширина экрана
let height = window.innerHeight; // высота экрана
let field; //поле для игры
let cat;
let gravity = 2; //чтобы коты двигались вниз
let catAmount = 0; //счетчик созданных котов
let cats = []; //массив хранящий котов
let counter = 0; //счетчик спасенных котов

let model = { //модель игры
    createCanvas: function() {
        field = new PIXI.Application(width, height); //создаем поле для игры
        document.body.appendChild(field.view); //вывод на экран для пользователя
        var background = PIXI.Sprite.fromImage("fire.png");
        background.width = field.screen.width;
        background.height = field.screen.height;
        field.stage.defaultCursor = "url(cursor.png)";
        field.stage.addChild(background);
     },
    preloadGame: function () {
        let style = new PIXI.TextStyle({ //стили текста
       fontWeight: 'bold',
        fontSize: 60,
        fontFamily: 'Arial',
        fill: '#A52A2A',
        align: 'center',
        stroke: '#FFFFFF',
        strokeThickness: 6
        }); 
    let start = new PIXI.Text('Спасти котиков', style);
        start.x = field.screen.width / 2;
        start.y = field.screen.height / 2;
        start.interactive = true;
        start.buttonMode = true;
        start.anchor.set(0.5);
    
        field.stage.addChild(start); 
        field.ticker.add(function() {
        start.rotation += 0.005;
        });
        start.on('pointerdown', controllerStart.clearSign.bind(start)); 
    },
    
    addCat: function(){ //добавление кота
        let Texture = PIXI.Texture.fromImage("cat.png"); 
        cat = new PIXI.Sprite(Texture);
        let inAreaX = width - 100; //расположение кота, ниже, чтобы случайно по оси Х
        cat.position.x = Math.floor(Math.random() * inAreaX); 
        cat.position.y = height/2-300; //на середине экрана по вертикали
        cat.interactive = true; //кот стал интерактивным
        cat.buttonMode = true; //курсор меняется при наведении на кота
        cat.live = true; // для проверки условия, что кот пойман либо нет
        catAmount++; //размножение котов
        cat.num = catAmount; //порядковый номер кошака
        cats.push(cat); //отправка в массив
        field.stage.addChild(cat); //чтобы кот появился на экране, в игре
        cat.on('pointerdown', controller.clearFigure.bind(cat));  // удаление кота при клике
                  },
    gameOver: function() {
        let style = new PIXI.TextStyle({ //стили текста
            fill: '0xffffff',
            fontSize: 36,
        }); 
       let gameOverText = new PIXI.Text('Спасенных котов: '+ counter, style);
        gameOverText.x = width/2; //расположение на экране, чтобы по центру было 
        gameOverText.y = height/2; 
        gameOverText.pivot.x = 50; 
        gameOverText.pivot.y = 50; 
        
        field.ticker.stop();
        field.stage.addChild(gameOverText); //вывод для пользователя
    },
    winGame: function() {
        let style = new PIXI.TextStyle({ 
            fill: '0xffffff',
            fontSize: 36,
        }); 
       let winText = new PIXI.Text('Ура! Все котики спасены! Личный рекорд: '+ counter, style);
        winText.x = width/2; //расположение на экране, чтобы по центру было 
        winText.y = height/2; 
        winText.pivot.x = 50; 
        winText.pivot.y = 50; 
        
        field.ticker.stop();
        field.stage.addChild(winText); //вывод для пользователя
    }
};

let play = {
    loadGame: function(){
        model.createCanvas();
        model.preloadGame();
    }     
};

let creat = {
    saveCats: function(){
        model.addCat();
        
        setInterval(model.addCat, 1000); //кошаки постоянно появляются с заданной периодичностью
        
        field.ticker.add(function() { //здесь задается, чтобы двигались вертикально и падали вниз
            for (var i = 0; i < catAmount; i++) {
                cats[i].position.y += gravity;//прибавление к одному котейке по оси Y значение заданной переменной gravity, чтобы он падал на столько вниз
                if (cats[i].position.y > height && cats[i+1].live === true) { 
                model.gameOver();
                }  else if (i < 10) {
                    gravity = 3;
                } else if (i >= 10 && i < 15){
                    gravity = 1;
                    field.ticker.add(function(delta) {
                    cat.rotation += 0.2 * delta;
                    });
                } else if (i >= 15 && i < 20) {
                    gravity = 2;
                } else if (i >= 20 && i < 30){
                     gravity = 3;
                } else {
                    model.winGame();
                }
            } 
           
        });

    }     
};


let controller = {
clearFigure: function() {
cats[this.num].live = false;
field.stage.removeChild(this);
counter++;
console.log(counter);
}
};

let controllerStart = {
clearSign: function() {
field.stage.removeChild(this);
creat.saveCats();
    }
};

play.loadGame();
