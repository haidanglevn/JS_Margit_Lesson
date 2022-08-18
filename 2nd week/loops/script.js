let result = " ";
let number = 1,
  number1 = 99; /* leave this out so it doesnt reset all the time*/
for (number; number < 51; number++) {
  if (number % 2 == 0) {
    result += number + " ";
    for (number1; number1 > 50; number1--) {
      if (number1 % 2 == 0) {
        result += number1 + " ";
        number1 -= 1; /* important so it doesnt stay at first number */
        break;
      }
    }
  }
}

console.log(result);
