//для окружности
class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get radius() {
        return this._radius;
    }
    
    square(){
        return Math.PI * Math.pow(this._radius, 2); //π * R²
    }
    
    perimeter(){
        return 2 * Math.PI * this._radius;//2 * π * R
    }
}



