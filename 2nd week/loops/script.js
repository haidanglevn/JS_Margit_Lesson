/* 5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers. */

let result = " ";
let number, i;
function askNumber() {
  number = parseInt(prompt("Give me a number?"));
  console.log("Your ", i, " number is ", number);
}
for (i = 1; i < 5; i++) {
  askNumber();
  if (number % 2 == 0) {
    result += number + " ";
  }
}
console.log("All the even numbers are ", result);
