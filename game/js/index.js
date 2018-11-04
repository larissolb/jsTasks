let maze = new MazeImage();
maze.path = 'img/maze.png';
maze.coord = [0, 0];

let player = new MazeImage();
player.path = 'img/smile.gif';
player.coord = [448, 15];

let bonus = new MazeImage();
bonus.path = 'img/bonus.png';
bonus.coord =[490,15];
//        [getRandom(0,966), getRandom(0,966)]; 
//function getRandom(min, max) {
//    return Math.random() * (max-min) + min;
//    };

let game =  new Game(maze, player, bonus);
game.initStartPos('maze');
game.start();