const changeColor = document.getElementById('box');
// const clickMe = document.getElementById('btn');

let checked = true;

const clickChangeColor = () => {
  checked = !checked;
  changeColor.style.backgroundColor = checked ? "red" : "green";
}