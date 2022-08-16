function checkAge() {
  let age = prompt("Please give us your age: ", "your age");

  if (age < 18) {
    return console.log("too young");
  } else if (age < 27) {
    return console.log("nice age");
  } else {
    return console.log("too old");
  }
}

console.log(age);
checkAge();
