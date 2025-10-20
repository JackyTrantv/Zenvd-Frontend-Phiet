const passCode = document.getElementById("password_code");
const lengthValue = document.getElementById("length_value");
const lengthRange = document.getElementById("length_range");
const checkNumber = document.getElementById("check-number");
const checkLetter = document.getElementById("check-letter");
const checkSymbol = document.getElementById("check-symbol");
const generate = document.getElementById("generate");

lengthRange.addEventListener("input", () => {
    lengthValue.innerText = lengthRange.value;
});

generate.onclick = () => {
    if (!checkNumber.checked && !checkLetter.checked && !checkSymbol.checked) {
        alert("Bạn phải chọn 1 trong 3 check-box");
        return;
    }

    let passwordString = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = "0123456789";
    let symbol = "!@#$%^&*+=";

    if (checkLetter.checked) passwordString += alphabet;
    if (checkNumber.checked) passwordString += number;
    if (checkSymbol.checked) passwordString += symbol;

    let result = "";
    for (let i = 0; i < lengthRange.value; i++) {
        let num = Math.floor(Math.random() * passwordString.length);
        result += passwordString[num];
    }
    passCode.innerText = result;
};
