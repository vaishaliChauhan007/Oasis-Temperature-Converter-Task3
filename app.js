const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertbtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
});

convertbtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    convertbtn.innerHTML = "<span><i class ='fa-solid fa-spinner fa-spin'><i/>Converting..</span>"
});

function convertToCelsius() {
    let inputValue = (degree.value);
    if (!isNaN(inputValue)) {
        if (tempType.value === "fahrenheit") {
            const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;C`;
        } else if (tempType.value === "kelvin") {
            const kelvinToCelsius = inputValue - 273.15;
            celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;C`;
        } else {
            celsiusField.innerHTML = "Please select a valid temperature type.";
        }
    } else {
        celsiusField.innerHTML = "Please enter a valid number.";
    }
}