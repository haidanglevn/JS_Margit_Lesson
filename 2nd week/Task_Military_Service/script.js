let age = prompt("Please give us your age: ", "your age");

switch (age) {
  case age < 27:
    alert("right age for military");
    break;
  case age < 41:
    alert("You are in reserve");
    break;
  case age < 55:
    alert("You are in backup reserve");
    break;
  case age >= 55:
    alert("too aged");
    break;
  default:
    alert("too young");
    break;
}
