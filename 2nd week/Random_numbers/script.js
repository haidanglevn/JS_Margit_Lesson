function randomNumber() {
  const num1 = prompt("First number?");
  const num2 = prompt("Second number?");
  const num3 = prompt("Third number?");
  // console.log("First number is ", num1);
  // console.log("Second number is ", num2);
  // console.log("Third number is ", num3);

  let sumOfNumber = parseInt(num1) + parseInt(num2) + parseInt(num3);
  let mulOfNumber = num1 * num2 * num3;

  if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    return (
      console.log("Sum of all is " + sumOfNumber),
      console.log("Multiplication of all is ", mulOfNumber)
    );
  } else if (num1 >= 0 || num2 >= 0 || num3 >= 0) {
    return console.log("Sum of all is ", sumOfNumber);
  } else {
    return console.log("All negative numbers");
  }
}
randomNumber();
