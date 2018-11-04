//для треугольника
class Triangle {
    constructor(a, b, c, h) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._h = h;
    }

    set a(value) {
        this._a = value;
    }

    get a() {
        return this._a;
    }
    
    set b(value) {
        this._b = value;
    }

    get b() {
        return this._b;
    }
    
    set c(value) {
        this._c = value;
    }

    get c() {
        return this._c;
    }
    
    set h(value) {
        this._h = value;
    }

    get h() {
        return this._h;
    }
    
    square(){
        return (this._b * this._h)/2;  //½ * b * h
    }
    
    perimeter(){
        return this._a + this._b + this._c; //a+b+c
    }
}



