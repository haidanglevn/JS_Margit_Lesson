const settingButton = document.getElementById("setting-logo");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const circles = document.querySelectorAll(".circle");
const result = document.getElementById("result");
const hearts = document.querySelectorAll(".heart");
const clickRightSound = new Audio("assets/sound/clickright.wav");
const gameEndSound = new Audio("assets/sound/gameend.wav");
const minusLifeSound = new Audio("assets/sound/minuslife.wav");
let playerName = "Player";
let random = 0;
let pace = 900;
let gameRunning,
  chosen,
  i,
  random1,
  score,
  dedCount,
  scored,
  firstRound,
  round,
  lives;

const settingToggle = () => {
  let settingpage = document.getElementById("setting");
  let playground = document.getElementById("playground");
  if (settingpage.style.display === "none") {
    settingpage.style.display = "block";
    playground.style.display = "none";
  } else {
    settingpage.style.display = "none";
    playground.style.display = "block";
  }
};

const difficultyChange = (value) => {
  if (value == "easy") {
    pace = 1200;
    document.getElementById("difficulty").innerHTML = "Easy";
  } else if (value == "medium") {
    pace = 900;
    document.getElementById("difficulty").innerHTML = "Medium";
  } else {
    pace = 700;
    document.getElementById("difficulty").innerHTML = "Hard";
  }
};

circles.forEach((circle, i) => {
  circle.addEventListener("click", () => clickCorrect(i));
});
const clickCorrect = (i) => {
  if (random == i) {
    score += 1;
    scored = true;
    chosen.classList.add("glow");
    clickRightSound.play();
  } else {
    minusLife();
  }
  document.getElementById("score").innerHTML = score;
};

const nameChange = (value) => {
  document.getElementById("playerNameTop").innerHTML = value;
  playerName = value;
  console.log(playerName);
};
const resetGame = () => {
  score = 0;
  document.getElementById("score").innerHTML = score;
  dedCount = 0;
  scored = false;
  firstRound = true;
  round = 0;
  lives = 4;
  document.getElementById("lives").innerHTML = lives;
  hearts.forEach((heart) => {
    heart.classList.remove("ded");
  });
  document.querySelector(".result-img").style.backgroundImage =
    "url('assets/cat-judging.png')";
};
/* start the game */
const startGame = () => {
  resetGame();
  document.getElementById("title").innerHTML = "CATCH THE EVIL PUMPKIN !!!";
  console.log("------NEW GAME-------");
  console.log("pace = ", pace);
  gameRunning = setInterval(newRound, pace);
};

const newRound = () => {
  round += 1;
  console.log(`-----------ROUND ${round}------------`);
  /* get random number */
  random1 = Math.floor(Math.random() * 4);
  console.log("random number is ", random1);
  while (random1 == random) {
    random1 = Math.floor(Math.random() * 4);
  }
  random = random1;
  /* turn off classes after every round */
  circles.forEach((circle) => {
    if (
      circle.classList.contains("active") ||
      circle.classList.contains("glow")
    ) {
      circle.classList.remove("active");
      circle.classList.remove("glow");
    }
  });
  console.log("Is this first round? ", firstRound);
  console.log("Have user scored?", scored);
  /* change background */
  chosen = circles[random];
  chosen.classList.add("active");
  noClick();
  firstRound = false;
  scored = false;
  document.getElementById("lives").innerHTML = lives;
  console.log("Health: ", lives);
  if (lives <= 0) {
    endGame();
  }
};

/* losing condition: no click */
const noClick = () => {
  if (firstRound == false && scored == false) {
    minusLife();
    console.log("No click (-1).", lives, "health remaining");
  }
};

/* when minus one life */
const minusLife = () => {
  lives -= 1;
  dedCount += 1;
  hearts[hearts.length - dedCount].classList.add("ded");
  console.log("health decreased");
  minusLifeSound.play();
};

/* end the game */
const endGame = () => {
  clearInterval(gameRunning);
  gameEndSound.play();
  openModal();
  chosen.classList.remove("active");
  console.log("game ended");
  if (score <= 10) {
    result.textContent = `Wait, how can you only get ${score}? Come on, try harder!!!`;
  } else if (score <= 30) {
    result.textContent = `That's not bad, ${score} points. I bet you can do better!!!`;
    document.querySelector(".result-img").style.backgroundImage =
      "url('assets/mummy-surprise.png')";
  } else {
    result.textContent = `${score} points? Okay you're too good for this. Dial up the difficulty, maybe?`;
    document.querySelector(".result-img").style.backgroundImage =
      "url('assets/zombie-wow.png')";
  }
  document.getElementById("title").innerHTML = "Game ended. Maybe another try?";
  addScore(playerName, score);
};

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", endGame);
settingButton.addEventListener("click", settingToggle);

/* Modal */
let modal = document.getElementById("modal");
let body = document.body;
const openModal = () => {
  modal.style.display = "block";
  body.style.overflow = "hidden"; /* block body scroll  */
  /* when user click outside of modal, close the modal  */
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      body.style.overflow = "auto";
    }
  };
};

const closeModal = () => {
  modal.style.display = "none";
  body.style.overflow = "auto";
};

/* add score to scoreboard */
class Score {
  constructor(playerName, score) {
    this.playerName = playerName;
    this.score = score;
  }
}
// add score to localStorage
if (localStorage.getItem("score") == null) {
  localStorage.setItem("score", "[]");
}

const addScore = (playerName, score) => {
  let scoreList = [];
  scoreList = JSON.parse(localStorage.getItem("score"));
  let newScore = new Score(playerName, score);
  scoreList.unshift(newScore);
  console.table(scoreList);
  let new_data = JSON.stringify(scoreList);
  localStorage.setItem("score", new_data);
  const updateScore = () => {
    let scoreBoard = document.querySelector(".scoreboard-content");
    let list;
    if (scoreList.length <= 5) {
      list = `<div class="attempt">${scoreList[0].playerName}: ${scoreList[0].score} </div>`;
      scoreBoard.innerHTML += list;
    } else {
      list = `<div class="attempt">${scoreList[4].playerName}: ${scoreList[4].score} </div>
        <div class="attempt">${scoreList[3].playerName}: ${scoreList[3].score} </div>
        <div class="attempt">${scoreList[2].playerName}: ${scoreList[2].score} </div>
        <div class="attempt">${scoreList[1].playerName}: ${scoreList[1].score} </div>
        <div class="attempt">${scoreList[0].playerName}: ${scoreList[0].score} </div>`;
      scoreBoard.innerHTML = list;
    }
  };
  updateScore();
};

// update score after reload page
const updateLastAttempts = () => {
  let scoreList = [];
  scoreList = JSON.parse(localStorage.getItem("score"));
  const updateScore = () => {
    let scoreBoard = document.querySelector(".scoreboard-content");
    let list;
    if (scoreList.length <= 5) {
      for (i = 0; i < 4; i++) {
        list = `<div class="attempt">${scoreList[i].playerName}: ${scoreList[i].score} </div>`;
        scoreBoard.innerHTML += list;
      }
    } else {
      list = `<div class="attempt">${scoreList[4].playerName}: ${scoreList[4].score} </div>
        <div class="attempt">${scoreList[3].playerName}: ${scoreList[3].score} </div>
        <div class="attempt">${scoreList[2].playerName}: ${scoreList[2].score} </div>
        <div class="attempt">${scoreList[1].playerName}: ${scoreList[1].score} </div>
        <div class="attempt">${scoreList[0].playerName}: ${scoreList[0].score} </div>`;
      scoreBoard.innerHTML = list;
    }
  };
  updateScore();
};
updateLastAttempts();
