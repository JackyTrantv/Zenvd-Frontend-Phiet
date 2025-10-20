const colorBox = document.getElementById("color_box");
const colorCode = document.getElementById("color_code");
const calculate = document.getElementById("calculate");

calculate.onclick = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const codeString = `#${randomColor}`;
    colorBox.style.backgroundColor = codeString;
    colorCode.innerText = codeString;
};
