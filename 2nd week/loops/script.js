let i = 1;
let speed = 1;
function askSpeed() {
  let distance = parseInt(prompt("What the distance in km?"));
  let time = parseInt(prompt("What the time in hour?"));
  speed = parseInt(distance / time);
  console.log("This is test number", i);
  console.log("Distance is ", distance, " km and time is ", time, "hour");
  console.log("Your speed is ", speed, " km/h");
}

for (i = 1; i < 100; i++) {
  askSpeed();
  if (speed <= 0) {
    i += 1000;
    console.log("TEST END WHEN SPEED IS ZERO");
  }
}
