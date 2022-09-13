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
  price = parseInt(document.getElementById("price").value);
  color = document.getElementById("color").value;
  let carNew = new Car(license, maker, model, owner, price, color);
  carList.push(carNew);
  console.table(carList);

  const builtTable = () => {
    let table = document.getElementById("carTable");
    let row = `<tr>
          <td>${carList[carList.length - 1].license}</td>
          <td>${carList[carList.length - 1].maker}</td>
          <td>${carList[carList.length - 1].model}</td>
          <td>${carList[carList.length - 1].owner}</td>
          <td>${carList[carList.length - 1].price + "€"}</td>
          <td>${carList[carList.length - 1].color}</td>
    </tr>`;
    table.innerHTML += row;
  };
  builtTable();
};

let checkCounter = 0;
const search = () => {
  let search = document.getElementById("searchLicense").value;
  console.log(`Searching for .... ${search} `);

  function check() {
    let checkCounter = 0;
    for (let i = 0; i < carList.length; i++) {
      if (carList[i].license == search) {
        checkCounter += 1;
        console.log(`Found at index ${i}`);
        document.getElementById(
          "searchResult"
        ).innerHTML = `This number belongs to a ${carList[i].maker} ${carList[i].model} owned by a person named ${carList[i].owner}`;
      }
    }
    if (checkCounter == 0) {
      document.getElementById("searchResult").innerHTML = "Nothing found";
    }
  }
  check();
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
  document.getElementById("carTable").deleteRow(-1);
};
