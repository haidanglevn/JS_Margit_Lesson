// age
let age, score;
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
