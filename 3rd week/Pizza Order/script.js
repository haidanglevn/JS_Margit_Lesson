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
  if ((document.getElementById("topping").checked = true)) {
    toppingText += " " + val;
  }
  console.log("topping =", val);
  toppingCounter = document.querySelectorAll(
    'input[name="topping"]:checked'
  ).length;
  console.log("counter =", toppingCounter);
  if (toppingCounter <= 4) {
    document.getElementById("sumToppingPrice").innerHTML =
      "The first four topping is FREE";
    toppingPrice = 0;
    document.getElementById("showToppingPrice").innerHTML =
      "First 4 toppings is free, maybe some more?";
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
let delivery;
const addDelivery = (val) => {
  document.getElementById("sumDelivery").innerHTML = val;
  delivery = val;
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
  // get customer details //
  customername = document.getElementById("customerName").value;
  deliveryAddress = document.getElementById("homeAddress").value;
  document.getElementById("sumCustomerName").innerHTML = customername;
  document.getElementById("sumAddress").innerHTML = deliveryAddress;
  // calculate total price //
  totalPrice = pizzaPrice + toppingPrice + deliveryPrice;
  console.log(pizzaPrice, toppingPrice, deliveryPrice, totalPrice);
  console.log("delivery form: ", delivery);
  console.log("customer name: ", customername);
  console.log("delivery address: ", deliveryAddress);
  // validate
  if (pizzaPrice === undefined) {
    document.getElementById("alertStep1").innerHTML =
      "Please choose a pizza type in step 1";
  } else if (toppingCounter < 4) {
    document.getElementById("alertStep2").innerHTML =
      "Please choose at least 4 toppings";
  } else if (delivery == "Home Delivery" && deliveryAddress == "") {
    document.getElementById("alertStep3").innerHTML =
      "Please give us your address";
  } else if (customername == "") {
    document.getElementById("alertStep3").innerHTML =
      "Please enter your name and phone number above";
  } else {
    // remove alert message //
    document.getElementById("alertStep1").innerHTML = " ";
    document.getElementById("alertStep2").innerHTML = " ";
    document.getElementById("alertStep3").innerHTML = " ";
    // add all the details //
    document.getElementById("sumTopping").innerHTML = toppingText;
    document.getElementById("totalPrice").innerHTML = totalPrice + "€";
  }
};
