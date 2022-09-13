let colorLeft, colorRight, gradientcode, direction;
const gradient = (val = "to top") => {
  colorLeft = document.getElementById("color1").value;
  colorRight = document.getElementById("color2").value;
  document.getElementById("color-wrapper1").style.backgroundColor = colorLeft;
  document.getElementById("color-wrapper2").style.backgroundColor = colorRight;
  direction = val;
  gradientcode = `linear-gradient(${direction}, ${colorLeft}, ${colorRight})`;
  document.getElementById("result").style.backgroundImage = gradientcode;
  document.getElementById("cssCode").innerHTML = gradientcode;
};
