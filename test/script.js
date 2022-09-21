let no1 = 0;
let no2;
const button = document.getElementById("button");

const getRandInt = () => {
  console.log("click");
  no2 = Math.floor(Math.random() * 4);
  console.log("no1 is ", no1, ", no2 is ", no2);
  if (no2 != no1) {
    no1 = no2;
    console.log("Active number is changed to ", no1);
  } else {
    console.log("Active number is not changed ");
    getRandInt();
  }
};

button.addEventListener("click", getRandInt);
