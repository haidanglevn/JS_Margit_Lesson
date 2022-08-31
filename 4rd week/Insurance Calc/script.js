// age
let age, score;
let badHabitCounter;
let score1, score2;
let score3 = 0;
let goodHabitCounter;
let conditionScore;
let conditionCounter;
const underAge = (val) => {
  if (val == "yes") {
    age = "under18";
    score = 500;
  } else {
    age = 18;
    score = 0;
  }
  console.log(age, score);
};
// upper age
const age18 = (val) => {
  console.log(val);
  switch (val) {
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

// calculate score

const calculate = () => {
  if (score === undefined) {
    document.getElementById("alert").innerHTML = "Please choose an age type";
  } else {
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
    score1 = score + (score * conditionCounter * 1) / 100;
    score2 = score1 - (score1 * goodHabitCounter * 5) / 100;
    score3 = score2 + (score2 * badHabitCounter * 5) / 100;
    console.log("initial score = ", score);
    console.log("Condition counter: ", conditionCounter);
    console.log("Good habits counter: ", goodHabitCounter);
    console.log("Bad habits counter: ", badHabitCounter);
    console.log("Score1 : ", Math.round(score1));
    console.log("Score2 : ", Math.round(score2));
    console.log("Score3 : ", Math.round(score3));
  }
};
