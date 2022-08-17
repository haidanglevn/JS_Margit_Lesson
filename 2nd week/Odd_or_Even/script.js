function OddOrEven() {
  const num = prompt("Enter your number pls");
  let numCheck;
  if (num >= 0) {
    let numCheck = num % 2;
    if ((numCheck = 0)) {
      return console.log("Your number is positive and even");
    } else {
      return console.log("Your number is positive and odd");
    }
  } else {
    return console.log("You entered a negative number");
  }
}

OddOrEven();
