//определение фигур и их координат

let circle = new Circle(3);
console.log('площадь окружности:',circle.square());
console.log('длина окружности:', circle.perimeter());

let rectangle = new Rectangle(4, 10);
console.log('площадь прямоугольника:', rectangle.square());
console.log('периметр прямоугольника:',rectangle.perimeter());

let triangle = new Triangle(3, 3, 5, 10);
console.log('площадь треугольника:', triangle.square());
console.log('периметр треугольника:',triangle.perimeter());


