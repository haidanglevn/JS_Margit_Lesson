let i, number;
let smallest = Infinity;
let a;
function howManyNumber() {
  a = parseInt(prompt("How many number you want to give?"));
  console.log("You want to give ", a, " number(s)");
  if (isNaN(a) || a < 1) {
    console.log("You did not gave a correct number, try again");
    a = parseInt(
      prompt(
        "You did not gave a correct number, try again. How many number you want to give?"
      )
    );
  } else {
    for (i = 1; i < a + 1; i++) {
      askNumber();
    }
  }
}
// bug: cannot run if user give 2 consecutive wrong answer//
function askNumber() {
  number = parseInt(prompt("Give me the number?"));
  console.log("Your ", i, " number is ", number);
  if (number < smallest) {
    smallest = number;
  }
}

howManyNumber();
console.log("The smallest number is ", smallest);
