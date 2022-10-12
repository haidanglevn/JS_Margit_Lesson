class Car {
  constructor(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}
let car1 = new Car("ABC123", "Toyota", "Corolla", "Dang", 10000, "black");
let car2 = new Car("TRA423", "Nissan", "Quasqai", "John", 7500, "red");
let car3 = new Car("IOO982", "Mercedes-Benz", "Vito", "Ashley", 15000, "white");

let carList = [];
carList.push(car1, car2, car3);
console.table(carList);

const searchIndex = carList.findIndex(
  (car) => car.model.toLowerCase() == "corolla"
);

console.log("searchIndex: ", searchIndex);

carList.splice(searchIndex, 1);
console.table(carList);
