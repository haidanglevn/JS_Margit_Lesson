const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const circle = document.querySelectorAll(".circle");

console.log(circle);

const startGame = () => {
  console.log("game started");
};
const endGame = () => {
  console.log("game ended");
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
