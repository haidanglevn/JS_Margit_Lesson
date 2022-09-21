const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const circles = document.querySelectorAll(".circle");
let score = 0;

const startGame = () => {
  console.log("game started");
  setTimeout(randomNumber(), 20000);
};
const randomNumber = () => {
  let x = Math.floor(Math.random() * 4 + 1);
  console.log("random number is ", x);
};

const endGame = () => {
  openModal();
  console.log("game ended");
  score = 0;
  document.getElementById("score").innerHTML = score;
};

/* find which circle was clicked */
circles.forEach((circle, i) => {
  circle.addEventListener("click", () => clickCircle(i));
});

const clickCircle = (i) => {
  score += 1;
  console.log("score =", score);
  document.getElementById("score").innerHTML = score;
  console.log("circle clicked was: ", i + 1);
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
};
