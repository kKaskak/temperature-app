const celciusInput = document.querySelector("#celcius");
const fahrenheitInput = document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");
const tempInputs = document.querySelectorAll("input");

tempInputs.forEach((input) => {
  input.addEventListener("input", function (e) {
    let tempValue = parseInt(e.target.value); // converts to a num
    let inputName = e.target.name;
    if (e.target.value == "") {
      celciusInput.value = null;
      fahrenheitInput.value = null;
      kelvinInput.value = null;
      return;
    }
    if (inputName === "celcius") {
      let fahrenheitValue = tempValue * 1.8 - 32;
      fahrenheitInput.value - fahrenheitValue.toFixed(2);
      fahrenheitInput.value = tempValue * 1.8 + 32;
      kelvinInput.value = tempValue + 273.15;
    } else if (inputName === "fahrenheit") {
      let celciusValue = (tempValue - 32) / 1.8;
      celciusInput.value = celciusValue.toFixed(2);

      let kelvinValue = (tempValue - 32) / 1.8 + 273.15;
      kelvinInput.value = kelvinValue.toFixed(2);
    } else if (inputName === "kelvin") {
      // celcius to kelvin
      let celciusValue = tempValue - 273.15;
      celciusInput.value = celciusValue.toFixed(2);
      let fahrenheitValue = (tempValue - 273.15) * 1.8 + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
  });
});
