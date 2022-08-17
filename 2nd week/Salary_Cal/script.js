// Salary calculator
function salary() {
  const hourlySalary = prompt("How much do you make per hour?");
  const hourDone = prompt("How many hour did you do today?");
  console.log(
    "You have done ",
    hourDone,
    " hour(s) and make ",
    hourlySalary,
    "($) per hour."
  );
  let daySalary;

  if (hourDone <= 7 && hourDone > 0) {
    daySalary = hourlySalary * hourDone;
    return console.log("Your day salary is ", daySalary);
  } else if (hourDone <= 9) {
    daySalary = hourlySalary * 7 + (hourDone - 7) * 1.5 * hourlySalary;
    return console.log("Your day salary is ", daySalary);
  } else {
    daySalary =
      hourlySalary * 7 +
      2 * 1.5 * hourlySalary +
      (hourDone - 9) * hourlySalary * 2;
    return console.log("Your day salary is ", daySalary);
  }
}

salary();
