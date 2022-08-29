let pizzaPrice = 0;
const pizzaSize = (val) => {
  if (val == "for 2") {
    pizzaPrice += 7.5;
    document.getElementById("sumPizzaSize").innerHTML = "pizza for 2";
    document.getElementById("sumPizzaSizePrice").innerHTML = "7,50€";
  }
  if (val == "for 4") {
    pizzaPrice += 10.5;
    document.getElementById("sumPizzaSize").innerHTML = "pizza for 4";
    document.getElementById("sumPizzaSizePrice").innerHTML = "10,50€";
  }
  if (val == "for 6") {
    pizzaPrice += 12.5;
    document.getElementById("sumPizzaSize").innerHTML = "pizza for 6";
    document.getElementById("sumPizzaSizePrice").innerHTML = "12,50€";
  }
  if (val == "for 8") {
    pizzaPrice += 15.5;
    document.getElementById("sumPizzaSize").innerHTML = "pizza for 8";
    document.getElementById("sumPizzaSizePrice").innerHTML = "15,50€";
  }
  console.log("pizza size =", val);
  console.log("pizza price= ", pizzaPrice);
};

let toppingPrice = 0;
let toppingCounter = 0;
let toppingText = " ";
const addTopping = (val) => {
  console.log("topping =", val);
  if ((document.getElementById("topping").checked = true)) {
    toppingText += " " + val;
    document.getElementById("sumTopping").innerHTML = toppingText;
    toppingCounter += 1;
    console.log("counter =", toppingCounter);
  }
  if (toppingCounter <= 4) {
    document.getElementById("sumToppingPrice").innerHTML =
      "The first four topping is FREE";
  } else {
    toppingPrice = 0.5 * (toppingCounter - 4);
    console.log("Topping price =", toppingPrice);
    document.getElementById("sumToppingPrice").innerHTML =
      toppingPrice + "€ for " + (toppingCounter - 4) + " additional toppings";
  }
};
let deliveryPrice = 0;
const addDelivery = (val) => {
  document.getElementById("sumDelivery").innerHTML = val;
  if (val == "Home Delivery") {
    deliveryPrice += 5;
    document.getElementById("sumDelivery").innerHTML = val + " (+5€)";
  }
  console.log(val);
  console.log("Delivery price= ", deliveryPrice);
};

let totalPrice, customername;
const summary = () => {
  document.getElementById("summary").style.visibility = "visible";
  // calculate total price //
  totalPrice = pizzaPrice + toppingPrice + deliveryPrice;
  console.log(pizzaPrice, toppingPrice, deliveryPrice, totalPrice);
  document.getElementById("totalPrice").innerHTML = totalPrice + "€";
  // get customer name //
  customername = document.getElementById("customerName").value;
  console.log(customername);
  document.getElementById("sumCustomerName").innerHTML = customername;
};
