let colorLeft, colorRight;
const wrapperColor = (val) => {
  colorLeft = document.getElementById("color1").value;
  colorRight = document.getElementById("color2").value;
  document.getElementById("color-wrapper1").style.backgroundColor = colorLeft;
  document.getElementById("color-wrapper2").style.backgroundColor = colorRight;
};
