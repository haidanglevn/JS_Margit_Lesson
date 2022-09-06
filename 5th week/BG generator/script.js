let colorLeft, colorRight;
let gradientcode;
let direction;

const gradient = (val = "to top") => {
  colorLeft = document.getElementById("color1").value;
  colorRight = document.getElementById("color2").value;
  document.getElementById("color-wrapper1").style.backgroundColor = colorLeft;
  document.getElementById("color-wrapper2").style.backgroundColor = colorRight;
  console.log(colorLeft, colorRight);
  direction = val;
  console.log(direction);
  gradientcode = `linear-gradient(${direction}, ${colorLeft}, ${colorRight})`;
  console.log(gradientcode);
  document.getElementById("result").style.backgroundImage = gradientcode;
  document.getElementById("cssCode").innerHTML = gradientcode;
};
