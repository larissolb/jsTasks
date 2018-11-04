class MazeImage {
    constructor() {
        this._path = null;
        this._coord = null;
    }

    set path(value){
        this._path = value;
    }

    set coord(value) {
        this._coord = value;
    }

    get path(){
        return this._path;
    }

    get coord() {
        return this._coord;
    }
}