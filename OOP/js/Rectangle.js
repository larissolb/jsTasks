//для прямоугольника
class Rectangle {
    constructor(length, width) {
        this._length = length;
        this._width = width;
    }

    set length(value) {
        this._length = value;
    }

    get length() {
        return this._length;
    }
    
    set width(value) {
        this._width = value;
    }

    get width() {
        return this._width;
    }
    
    square(){
        return this._length * this._width;  //a*b
    }
    
    perimeter(){
        return 2 * (this._length + this._width); //2 * (a + b)
    }
}



