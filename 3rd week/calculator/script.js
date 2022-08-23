let gas;

function calculate(price, money) {
  let price = document.getElementById("price").value;
  let money = document.getElementById("money").value;
  return (gas = price * money);
  (document.getElementById("result").textContent = "You have "),
    gas,
    " and you can go";
}
console.log(gas);
