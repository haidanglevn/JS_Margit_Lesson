// age
let age, score;
let score1, score2;
let score3 = 0;
let conditionScore;

// upper age
const age18 = (val) => {
  console.log(val);
  switch (val) {
    case "under18":
      age = 17;
      score = 500;
      break;
    case "18-25":
      age = 25;
      score = 550;
      break;
    case "26-35":
      age = 35;
      score = 650;
      break;
    case "36-45":
      age = 45;
      score = 800;
      break;
    case "46-55":
      age = 55;
      score = 1000;
      break;
    case "56-65":
      age = 65;
      score = 1250;
      break;
    case "66+":
      age = 66;
      score = 1550;
      break;
  }
  console.log(age, score);
};

document.getElementById("alert").innerHTML = " ";
// Conditions
let conditionCounter = Number(
  document.querySelectorAll('input[name="condition"]:checked').length
);
// good habits
let goodHabitCounter = Number(
  document.querySelectorAll('input[name="goodhabit"]:checked').length
);
//bad habits
let badHabitCounter = Number(
  document.querySelectorAll('input[name="badhabit"]:checked').length
);

// calculate score

const calculate = () => {
  if (score === undefined) {
    document.getElementById("alert").innerHTML = "Please choose an age type";
  } else {
    // Get customer name
    let customerName = document.getElementById("customerName").value;
    console.log(customerName);
    score1 = Math.round(score + (score * conditionCounter * 1) / 100);
    score2 = Math.round(score1 - (score1 * goodHabitCounter * 5) / 100);
    score3 = Math.round(score2 + (score2 * badHabitCounter * 5) / 100);
    document.getElementById("result").innerHTML =
      "Hello " + customerName + ", your insurance score is " + score3;
  }
};
