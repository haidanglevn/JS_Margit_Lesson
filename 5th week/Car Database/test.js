class Car {
  constructor(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
  getInfo() {
    console.log(
      "license late: ",
      this.license,
      "| maker: ",
      this.maker,
      "| model: ",
      this.model
    );
  }
}
let car1 = new Car("ABC-123", "Toyota", "Corolla", "Dang", 10000, "black");
let car2 = new Car("TRA-423", "Nissan", "Quasqai", "John", 7500, "red");
console.table([car1, car2]);
car1.getInfo();
