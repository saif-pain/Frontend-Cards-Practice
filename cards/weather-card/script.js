const tempDisplay = document.getElementById("temp");
const toggleBtn = document.getElementById("toggle-btn");

let isCelsius = true;
let celsiusTemp = 30;

function updateTemperature() {
  if (isCelsius) {
    let fahrenheit = (celsiusTemp * 9) / 5 + 32;
    tempDisplay.textContent = `${fahrenheit.toFixed(1)}°F`;
    toggleBtn.textContent = "Switch to °C";
  } else {
    tempDisplay.textContent = `${celsiusTemp}°C`;
    toggleBtn.textContent = "Switch to °F";
  }
}

toggleBtn.addEventListener("click", () => {
  isCelsius = !isCelsius;
  updateTemperature();
});
