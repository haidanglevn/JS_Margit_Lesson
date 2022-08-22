let i, number;
let num1 = (num2 = 0);

function askNumber() {
  number = parseInt(prompt("Give me a number?"));
  console.log("Your number is ", number);
}
for (i = 1; i < 11; i++) {
  askNumber();
  if (number > num1 && number > num2) {
    num1 = num2;
    num2 = number;
    console.log("num1 =", num1, " and num2 =", num2);
  } else if (number > num1 && number < num2) {
    num1 = number;
    console.log("num1 =", num1, " and num2 =", num2);
  } else {
    console.log("Nothing changes, num1 =", num1, " and num2 =", num2);
  }
}

console.log("The two biggest numbers are ", num1, " and ", num2);
