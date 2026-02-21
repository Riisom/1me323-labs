const car = {
  brand: "Volvo",
  model: "V40", 
  year: 2018,

  getDescription() {
    return `${this.year} ${this.brand} ${this.model}`;
  },

  honk() {
    console.log("Tut tut!");
  }
};

console.log(car.getDescription()); // "2018 Volvo V40"
car.honk(); // "Tut tut!"

const counter = {
  value: 0,

  increase() {
    this.value++;
  },

  decrease() {
    this.value--;
  },

  reset() {
    this.value = 0;
  }
};

// Testa metoderna i konsolen
console.log("Värde initialt:", counter.value); // 0

counter.increase();
console.log("Värde efter en ökning:", counter.value); // 1

counter.increase();
console.log("Värde efter nästa ökning:", counter.value); // 2

counter.decrease();
console.log("Värde efter minskning:", counter.value); // 1

counter.reset();
console.log("Värde efter reset:", counter.value); // 0