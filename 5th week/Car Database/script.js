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
let license, maker, model, owner, price, color;
let i = 0;
const addCar = () => {
  license = document.getElementById("license").value.toUpperCase();
  maker =
    document.getElementById("maker").value[0].toUpperCase() +
    document.getElementById("maker").value.substring(1).toLowerCase();
  model =
    document.getElementById("model").value[0].toUpperCase() +
    document.getElementById("model").value.substring(1).toLowerCase();
  owner =
    document.getElementById("owner").value[0].toUpperCase() +
    document.getElementById("owner").value.substring(1).toLowerCase();
  price = document.getElementById("price").value + "€";
  color = document.getElementById("color").value;

  console.log("License plate is: ", license);
  console.log("Maker is: ", maker);
  console.log("Model is: ", model);
  console.log("Owner is: ", owner);
  console.log("price is: ", price);
  console.log("color is: ", color);

  let table = document.getElementById("table");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  cell1.innerHTML = license;
  cell2.innerHTML = maker;
  cell3.innerHTML = model;
  cell4.innerHTML = owner;
  cell5.innerHTML = price;
  cell6.innerHTML = color;
};

const reset = () => {
  document.getElementById("license").value = "";
  document.getElementById("maker").value = "";
  document.getElementById("model").value = "";
  document.getElementById("owner").value = "";
  document.getElementById("price").value = "";
  document.getElementById("color").value = "";
};

const delRow = () => {
  document.getElementById("table").deleteRow(-1);
};
