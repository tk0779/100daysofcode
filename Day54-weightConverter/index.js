const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
let errorTime;
let resultTime;
function updateResults() {
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = "Please enter a valid number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      inputEl.value = "";
    }, 2000);
  } else {
    resultEl.innerText = (+inputEl.value / 2.2).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultEl.innerText = "";
      inputEl.value = "";
    }, 10000);
  }
}

inputEl.addEventListener("input", updateResults);


const inputEl1 = document.getElementById("input1");
const errorEl1 = document.getElementById("error1");
const resultEl1 = document.getElementById("result1");
let errorTime1;
let resultTime1;
function updateResults1() {
  if (inputEl1.value <= 0 || isNaN(inputEl1.value)) {
    errorEl1.innerText = "Please enter a valid number!";
    clearTimeout(errorTime1);
    errorTime1 = setTimeout(() => {
      errorEl1.innerText = "";
      inputEl1.value = "";
    }, 2000);
  } else {
    resultEl1.innerText = (+inputEl1.value * 2.2).toFixed(2);
    clearTimeout(resultTime1);
    resultTime1 = setTimeout(() => {
      resultEl1.innerText = "";
      inputEl1.value = "";
    }, 10000);
  }
}

inputEl1.addEventListener("input", updateResults1);