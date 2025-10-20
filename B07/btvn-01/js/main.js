// Bai Tap 1
const inputMin = document.getElementById("input_min");
const inputTMax = document.getElementById("input_max");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

submit.onclick = () => {
    min = +inputMin.value;
    max = +inputTMax.value;
    if (typeof min !== "number" || typeof max !== "number") return;
    const rndInt = Math.floor(Math.random() * (max - min + 1)) + min;
    result.innerText = rndInt + "";
};
