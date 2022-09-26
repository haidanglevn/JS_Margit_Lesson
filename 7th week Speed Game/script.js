const resetButton = document.getElementById("setting-logo");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const circles = document.querySelectorAll(".circle");
const result = document.getElementById("result");
const hearts = document.querySelectorAll(".heart");
let score = 0;
let random = 0;
let lives = 4;
let dedCount = 0;
let gameRunning, chosen, i, random1;
let scored = false;
let firstRound = true;
let round = 0;
let pace = 900;

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
    console.log(pace);
  } else if (value == "medium") {
    pace = 900;
    document.getElementById("difficulty").innerHTML = "Medium";
    console.log(pace);
  } else {
    pace = 700;
    document.getElementById("difficulty").innerHTML = "Hard";
    console.log(pace);
  }
};

/* start the game */
const startGame = () => {
  document.getElementById("title").innerHTML = "CATCH THE EVIL PUMPKIN !!!";
  console.log("game started");
  console.log("pace = ", pace);
  gameRunning = setInterval(newRound, pace);
};

const newRound = () => {
  round += 1;
  console.log(`-----------ROUND ${round}------------`);

  /* get random number */
  random1 = Math.floor(Math.random() * 4);
  console.log("random number is ", random1);
  /* make sure the next number is different then the last */
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
  /* if (lives <= 0) {
    endGame();
  } */
};

/* find which circle was clicked and check if right circle was clicked */
circles.forEach((circle, i) => {
  circle.addEventListener("click", () => clickCircle(i));
});

const clickCircle = (i) => {
  console.log(i);
  if (random == i) {
    score += 1;
    console.log("Right circle clicked, score =", score);
    scored = true;
    chosen.classList.add("glow");
    /* add clicked pumpkin asset */
  } else {
    console.log("Wrong circle clicked, (-1)");
    minusLife();
  }
  document.getElementById("score").innerHTML = score;
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
};

/* end the game */
const endGame = () => {
  openModal();
  chosen.classList.remove("active");
  result.textContent = `You get ${score}! Great job !!!!`;
  console.log("game ended");
  clearInterval(gameRunning);
};

const reset = () => {
  window.location.reload();
};

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", endGame);
resetButton.addEventListener("click", settingToggle);

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
  reset();
};
