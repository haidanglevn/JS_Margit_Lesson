let leaderboard = document.querySelector(".leaderboard");
let order = 0;
let playerName;
let score, i;
let scoreList = [];
class Score {
  constructor(playerName, point) {
    this.playerName = playerName;
    this.point = point;
  }
}

const addScore = () => {
  playerName = document.getElementById("playerName").value;
  point = document.getElementById("point").value;
  let newScore = new Score(playerName, point);
  scoreList.unshift(newScore);
  console.table(scoreList);
  console.log(scoreList[0].playerName);
  const updateScore = () => {
    let scoreBoard = document.querySelector(".leaderboard-content");
    let list;
    if (scoreList.length <= 5) {
      list = `<div class="attempt">${scoreList[0].playerName}: ${scoreList[0].point} </div>`;
      scoreBoard.innerHTML += list;
    } else {
      list = `<div class="attempt">${scoreList[4].playerName}: ${scoreList[4].point} </div>
        <div class="attempt">${scoreList[3].playerName}: ${scoreList[3].point} </div>
        <div class="attempt">${scoreList[2].playerName}: ${scoreList[2].point} </div>
        <div class="attempt">${scoreList[1].playerName}: ${scoreList[1].point} </div>
        <div class="attempt">${scoreList[0].playerName}: ${scoreList[0].point} </div>`;
      scoreBoard.innerHTML = list;
    }
  };
  updateScore();
};
