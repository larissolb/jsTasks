let width = window.innerWidth; //ширина экрана
let height = window.innerHeight; // высота экрана
let field; //поле для игры
let gravity = 2; //чтобы коты двигались вниз
let figuresAmount = 0; //счетчик созданных котов
let figure = []; //массив хранящий котов

let model = { //модель игры
    createCanvas: function() {
        field = new PIXI.Application(width, height); //создаем поле для игры
        document.body.appendChild(field.view); //вывод на экран для пользователя
    },
    addCat: function(){ //добавление кота
        let Texture = PIXI.Texture.fromImage("cat.png"); 
        let cat = new PIXI.Sprite(Texture);
        let inAreaX = width - 100; //расположение кота, ниже, чтобы случайно по оси Х
        cat.position.x = Math.floor(Math.random() * inAreaX); 
        cat.position.y = height/2-150; //на середине экрана по вертикали
        cat.interactive = true; //кот стал интерактивным
        cat.buttonMode = true; //курсор меняется при наведении на кота
        cat.live = true; // для проверки условия, что кот пойман либо нет
        figuresAmount++; //размножение котов
        cat.num = figuresAmount; //порядковый номер кошака
        figure.push(cat); //отправка в массив
        field.stage.addChild(cat); //чтобы кот появился на экране, в игре
        cat.on('pointerdown', controller.clearFigure.bind(cat));  // удаление кота при клике
     },
    gameOver: function() {
        let style = new PIXI.TextStyle({ //стили текста
            fill: '0xffffff',
            fontSize: 36,
        }); 
       let gameOverText = new PIXI.Text('Game Over :-(', style);
        gameOverText.x = width / 2; //расположение на экране, чтобы по центру было 
        gameOverText.y = height / 2; 
        gameOverText.pivot.x = 50; 
        gameOverText.pivot.y = 50; 
        field.stage.addChild(gameOverText); //вывод для пользователя
    }
};

//console.log(model, figure);


let play = {
    loadGame: function(){
        model.createCanvas();
        model.addCat();
        
        setInterval(model.addCat, 1000); //кошаки постоянно появляются с заданной периодичностью
        
        field.ticker.add(function() { //здесь задается, чтобы двигались вертикально и падали вниз
            for (var i = 0; i < figuresAmount; i++) {
                figure[i].position.y += gravity; //прибавление к одному котейке по оси Y значение заданной переменной gravity, чтобы он падал на столько вниз
                if (figure[i].position.y > height && figure[i].live === true) { //проверка условия, если падает и не был пойман, то игра оканчивается
//                    console.log('game over');
                    model.gameOver();
                    break
                }  
            } 
           
        });

    }     
};

let controller = {
clearFigure: function() {
figure[this.num].live = false;
field.stage.removeChild(this);
}
};

play.loadGame();
