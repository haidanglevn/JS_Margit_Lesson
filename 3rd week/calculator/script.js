let gas, price, money;

function calculate() {
  let price = document.getElementById("price").value;
  let money = document.getElementById("money").value;
  gas = price / money;
  console.log(gas);
  if (gas>=10) {
    document.getElementById("result").innerHTML = "You have " +
    gas + " litres of gas and you can go, Hooray";
} else {
  document.getElementById("result").innerHTML = "You have " +
    gas + " litres of gas and oops, you have to stay here muahahahahaha";
}
  }
  
console.log(gas);




