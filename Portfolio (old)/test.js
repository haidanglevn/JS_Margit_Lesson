window.onscroll = function () {
  stickyHeader();
};

const stickyHeader = () => {
  let header = document.getElementById("header");
  let backToTop = document.getElementById("back_to_top");
  if (window.pageYOffset >= 80) {
    header.classList.add("sticky");
    backToTop.style.display = "block";
  } else {
    header.classList.remove("sticky");
    backToTop.style.display = "none";
  }
};

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

const mobMenu = () => {
  let navbar = document.getElementById("navbar-links");
  console.log("button pressed");
  console.log("display: ", navbar.classList.contains("responsive"));
  navbar.classList.toggle("responsive");
};

document.getElementById("mob_button").addEventListener("click", mobMenu());
