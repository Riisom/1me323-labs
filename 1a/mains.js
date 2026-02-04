import divide, { add, subtract, multiply, PI, SECRET_SAUCE } from './math.js';

console.log(SECRET_SAUCE);
console.log(`PI är ungefär ${PI}`);

console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(multiply(3, 7));
console.log(divide(20, 4));

// Testlogg för diff-vyn
console.log("Hej från main.js!");
import { rectangleArea, rectanglePerimeter } from './rectangles.js';

console.log(`Area of 5x10 rectangle: ${rectangleArea(5, 10)}`);
console.log(`Perimeter of 5x10 rectangle: ${rectanglePerimeter(5, 10)}`);