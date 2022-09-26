const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const circles = document.querySelectorAll(".circle");
const result = document.getElementById("result");
const hearts = document.querySelectorAll(".heart");
let score = 0;
let random = 0;
let lives = 4;
let dedCount = 0;
let gameRunning, chosen, i;
let scored = false;
let firstRound = true;

/* start the game */
const startGame = () => {
  document.getElementById("title").innerHTML = "CATCH THE EVIL PUMPKIN !!!";
  console.log("game started");
  gameRunning = setInterval(newRound, 1000);
};

const newRound = () => {
  if (lives <= 0) {
    endGame();
  }
  /* get random number */
  random1 = Math.floor(Math.random() * 3);
  console.log("random number is ", random1);
  /* make sure the next number is different then the last */
  while (random1 == random) {
    random1 = Math.floor(Math.random() * 3);
  }
  random = random1;

  circles.forEach((circle) => {
    if (
      circle.classList.contains("active") ||
      circle.classList.contains("glow")
    ) {
      circle.classList.remove("active");
      circle.classList.remove("glow");
    }
  });

  /* change background */
  chosen = circles[random];
  chosen.classList.add("active");
  noClick();
  firstRound = false;
  document.getElementById("lives").innerHTML = lives;
  console.log("current lives are ", lives);
};

/* find which circle was clicked and check if right circle was clicked */
circles.forEach((circle, i) => {
  circle.addEventListener("click", () => clickCircle(i));
});

const clickCircle = (i) => {
  if (random == i) {
    score += 1;
    console.log("score =", score);
    scored = true;
    chosen.classList.add("glow");
    /* add clicked pumpkin asset */
  } else {
    console.log("wrong");
    minusLife();
  }
  document.getElementById("score").innerHTML = score;
};
/* losing condition: no click */
const noClick = () => {
  if (firstRound == false && scored == false) {
    minusLife();
    console.log("No click, minus 1 life.", lives, " remaining");
  }
};

/* when minus one life */
const minusLife = () => {
  lives -= 1;
  dedCount += 1;
  hearts[hearts.length - dedCount].classList.add("ded");
  console.log("current lives are ", lives);
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
