class Game {
    constructor(maze, player, bonus) {
        this._maze = maze;
        this._player = player;
        this._bonus = bonus;
        this._canvasController = new CanvasController();
    }

    initStartPos(elemId){
        console.log(this.maze);
        this.canvasController.createCanvas(elemId);
        this.canvasController.generateImage(this.maze);
        this.canvasController.generateImage(this.player);

        // метод generateImage - метод canvasController ,
        // this.canvasController и передаем как контекст
        setInterval(this.canvasController
                .generateImage.bind(this.canvasController, this.bonus, "bonus"), 2000); //появление через 2 секунды
        }

    set bonus(value) {
        this._bonus = value;
    }

    get bonus() {
        return this._bonus;
    }

    start(){
        document.body.addEventListener('keypress',
            this._initGameProc.bind(this));
    }

    _initGameProc(evt){
        let keyCode = evt.code;
        let stop, up, left, down, right;
        console.log(this);
        // this.checkCoord(up),
        // this.checkCoord(rigth),
        // this.checkCoord(down),
        // this.checkCoord(left)
        if (keyCode === "KeyW") { // w
            stop = this.canvasController.getCollision(this.player);
            up = stop[0];
            if (up === 255 || up === 128){
                this.canvasController.clearImage(this.player);
                this.player.coord[1] -= 3;
                this.canvasController.generateImage(this.player);
            }
        } else if (keyCode === "KeyA") { // a
            stop = this.canvasController.getCollision(this.player);
            left = stop[3];
            if (left === 255 || left === 128){
                this.canvasController.clearImage(this.player);
                this.player.coord[0] -= 3;
                this.canvasController.generateImage(this.player);
            }
        } else if (keyCode === "KeyD") { // d
            stop = this.canvasController.getCollision(this.player);
            right = stop[1];
            if (right === 255 || right === 128){
                this.canvasController.clearImage(this.player);
                this.player.coord[0] += 3;
                this.canvasController.generateImage(this.player);
            }
        } else if (keyCode === "KeyS") { // s
            stop = this.canvasController.getCollision(this.player);
            down = stop[2];
            if (down === 255 || down === 128){
                this.canvasController.clearImage(this.player);
                this.player.coord[1] += 3;
                this.canvasController.generateImage(this.player);
            }
        } else {
            console.log(evt);
        }
    }

    get maze() {
        return this._maze;
    }

    set maze(value) {
        this._maze = value;
    }

    get player() {
        return this._player;
    }

    set player(value) {
        this._player = value;
    }

    get canvasController() {
        return this._canvasController;
    }

    set canvasController(value) {
        this._canvasController = value;
    }
}