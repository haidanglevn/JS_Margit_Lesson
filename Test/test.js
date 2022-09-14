window.onscroll = function () {
  stickyHeader();
};

const stickyHeader = () => {
  let navbar = document.getElementById("navbar");
  let sticky = window.pageYOffset;
  console.log(sticky);
  if (window.pageYOffset >= 80) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

const openModal = () => {};
