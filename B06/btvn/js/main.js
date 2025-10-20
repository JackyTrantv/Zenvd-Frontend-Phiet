// Bai Tap 1
const inputButton = document.getElementById("submit");
const inputText = document.getElementById("input_text");
const textBox = document.getElementById("text_box");

inputButton.onclick = () => {
    const text = inputText.value;
    if (text !== "") {
        textBox.innerHTML += `<p>${text}</p>`;
    }
    inputText.value = "";
    inputText.focus();
};

document.getElementById("reset").onclick = () => {
    textBox.innerHTML = "";
    inputText.value = "";
    inputText.focus();
};

//Bai tap 2

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const numberDisplay = document.getElementById("number_display");
let number = 0;
increaseBtn.onclick = () => {
    numberDisplay.innerText = ++number + "";
};

decreaseBtn.onclick = () => {
    numberDisplay.innerText = --number + "";
};
