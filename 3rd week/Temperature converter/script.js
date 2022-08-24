const convertFromCelsius = (id, val) => {
  console.log(id, val);
  val = parseFloat(val);
  const celsius = document.querySelector("#celsius");
  const farenheit = document.querySelector("#farenheit");
  const kelvin = document.querySelector("#kelvin");

  if (id == "celsius") {
    farenheit.value = (val * 1.8 + 32).toFixed(2);
    kelvin.value = (val + 273.15).toFixed(2);
  }
  if (id == "farenheit") {
    celsius.value = ((val - 32) / 1.8).toFixed(2);
    kelvin.value = ((val - 32) / 1.8 + 273.15).toFixed(2);
  }
  if (id == "kelvin") {
    farenheit.value = ((val - 273.15) * 1.8 + 32).toFixed(2);
    celsius.value = (val - 273.15).toFixed(2);
  }
};
