let leaderboard = document.querySelector(".leaderboard");
let order = 0;
let playerName = "Player";
let score;

const scores = [];

const addScore = () => {
  order += 1;
  score = Math.floor(Math.random() * 100);
  scores.push(score);
  console.log(scores);
  push();
};

const push = () => {
  newOrder = scores.reverse();
  console.log("Sort: ", newOrder);
  leaderboard.innerHTML += `<div class="attempt">${order}/${playerName}: ${score}</div>`;
  console.log("Push done");
};
array.forEach(functionA());
const array = [1, 3, 2, 5, 4];
const arrayNew = [];
console.log(array);
console.log(array[1]);
console.log(array.length);

const functionA = () => {
  for (i = 1; (i = array.length); i++) {
    if (array[i] < array[i + 1]) {
      arrayNew.push(array[i]);
    }
  }
  console.log(arrayNew);
};
