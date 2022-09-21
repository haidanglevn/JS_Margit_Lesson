const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const circles = document.querySelectorAll(".circle");
const result = document.getElementById("result");
let score = 0;
let gameRunning, random, chosen, i;

/* start the game */
const startGame = () => {
  document.getElementById("title").innerHTML = "CATCH THE EVIL PUMPKIN !!!";
  console.log("game started");
  gameRunning = setInterval(randomNumber, 1000);
};

/* get random number */
const randomNumber = () => {
  random = Math.floor(Math.random() * 3);
  console.log("random number is ", random);
  /* change background */
  console.log("click circle ", circles[`${random + 1}`], "now");
  chosen = circles[random];
  chosen.classList.add("active");
};

/* find which circle was clicked and check if right circle was clicked */
circles.forEach((circle, i) => {
  circle.addEventListener("click", () => clickCircle(i));
});

const clickCircle = (i) => {
  console.log("circle clicked was: ", i + 1);
  if (random == i) {
    score += 1;
    console.log("score =", score);
    chosen.classList.remove("active");
  } else {
    console.log("wrong");
    endGame();
  }
  document.getElementById("score").innerHTML = score;
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
