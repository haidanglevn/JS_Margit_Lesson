// pizza size
let pizzaPrice;
const pizzaSize = (val) => {
  if (val == "for 2") {
    pizzaPrice = 7.5;
    document.getElementById("sumPizzaSize").innerHTML = "pizza for 2";
    document.getElementById("sumPizzaSizePrice").innerHTML = "7,50€";
  }
  if (val == "for 4") {
    pizzaPrice = 10.5;
    document.getElementById("sumPizzaSize").innerHTML = "pizza for 4";
    document.getElementById("sumPizzaSizePrice").innerHTML = "10,50€";
  }
  if (val == "for 6") {
    pizzaPrice = 12.5;
    document.getElementById("sumPizzaSize").innerHTML = "pizza for 6";
    document.getElementById("sumPizzaSizePrice").innerHTML = "12,50€";
  }
  if (val == "for 8") {
    pizzaPrice = 15.5;
    document.getElementById("sumPizzaSize").innerHTML = "pizza for 8";
    document.getElementById("sumPizzaSizePrice").innerHTML = "15,50€";
  }
  console.log("pizza size =", val);
  console.log("pizza price= ", pizzaPrice);
  document.getElementById("showPizzaPrice").innerHTML =
    "Total: " + pizzaPrice + "€";
};

// topping
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
    toppingPrice = 0;
    document.getElementById("showToppingPrice").innerHTML =
      "First 4 toppings is free";
  } else {
    toppingPrice = 0.5 * (toppingCounter - 4);
    console.log("Topping price =", toppingPrice);
    document.getElementById("sumToppingPrice").innerHTML =
      toppingPrice + " € for " + (toppingCounter - 4) + " additional toppings";
    document.getElementById("showToppingPrice").innerHTML =
      "Total: " +
      toppingPrice +
      " € for " +
      (toppingCounter - 4) +
      " additional toppings";
  }
};

// delivery
let deliveryPrice = 0;
const addDelivery = (val) => {
  document.getElementById("sumDelivery").innerHTML = val;
  if (val == "Home Delivery") {
    deliveryPrice += 5;
    document.getElementById("sumDelivery").innerHTML = val + " (+5€)";
    // toggle for Home delivery //
    document.getElementById("deliveryHome").style.visibility = "visible";
    document.getElementById("sumDeliveryAdd").style.visibility = "visible";
  } else {
    document.getElementById("deliveryHome").style.visibility = "hidden";
    document.getElementById("sumDeliveryAdd").style.visibility = "hidden";
  }
  console.log(val);
  console.log("Delivery price= ", deliveryPrice);
};

// Summary
let totalPrice, customername, deliveryAddress;
const summary = () => {
  // calculate total price //
  totalPrice = pizzaPrice + toppingPrice + deliveryPrice;
  console.log(pizzaPrice, toppingPrice, deliveryPrice, totalPrice);

  // validate
  if (pizzaPrice === undefined) {
    document.getElementById("alert").innerHTML =
      "Please choose a pizza type in step 1";
  } else if (toppingCounter < 4) {
    document.getElementById("alert").innerHTML =
      "Please choose at least 4 toppings";
  } else if ((document.getElementById("delivery").selected = false)) {
    document.getElementById("alert").innerHTML =
      "Please choose a form of delivery";
    console.log(true);
  } else {
    document.getElementById("alert").innerHTML = "";
    document.getElementById("totalPrice").innerHTML = totalPrice + "€";

    // get customer details //
    customername = document.getElementById("customerName").value;
    deliveryAddress = document.getElementById("homeAddress").value;
    console.log(customername);
    console.log(deliveryAddress);
    document.getElementById("sumCustomerName").innerHTML = customername;
    document.getElementById("sumAddress").innerHTML = deliveryAddress;
  }
};
