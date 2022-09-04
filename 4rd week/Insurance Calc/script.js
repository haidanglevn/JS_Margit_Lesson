// age
let age, score;
let score1, score2, score3;

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

// calculate score

const calculate = () => {
  // Get customer name
  let customername = document.getElementById("customerName").value;
  console.log("Customer name: ", customername);
  if (score === undefined) {
    document.getElementById("alert").innerHTML = "Please choose an age type";
  } else if (customername == undefined) {
    document.getElementById("alert").innerHTML = "Please give us your name";
  } else {
    document.getElementById("alert").innerHTML = "";
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
    score1 = Math.round(score + (score * conditionCounter * 1) / 100);
    score2 = Math.round(score1 - (score1 * goodHabitCounter * 5) / 100);
    score3 = Math.round(score2 + (score2 * badHabitCounter * 5) / 100);
    console.log(score1, score2, score3);
  }
};

const showResult = () => {
  // Get customer name
  let customername = document.getElementById("customerName").value;
  console.log("Customer name: ", customername);
  if (customername == "") {
    document.getElementById("alert").innerHTML = "Please give us your name";
  } else if (score === undefined) {
    document.getElementById("alert").innerHTML = "Please choose an age type";
  } else {
    document.getElementById("confirm").style.visibility = "visible";

    document.getElementById("result").innerHTML =
      "Hello " +
      customername +
      ", your insurance score is " +
      score3 +
      ". Press the button below to get a quote for you life insurance from us!";
    document.getElementById("thankName").innerHTML = customername;
    document.getElementById("thankEmail").innerHTML = customerEmail;
  }
};
