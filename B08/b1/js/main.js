const text = document.getElementById("text");
const color = document.getElementById("color");
const backgroundColor = document.getElementById("bacground_color");
const textAlign = document.getElementById("text_align");
const lengthValue = document.getElementById("length_value");
const lengthRange = document.getElementById("length_range");

// let name = localStorage.getItem('name')
// console.log(name);
// // localStorage.setItem('name', "duy")
// localStorage.removeItem('name')
let objData = {
  size: 16,
  color: '#000',
  backgroundColor: '#fff',
  textAlign: 'left',
  lineHeight: 1
}

function saveLocalStorage(data) {
  localStorage.setItem(`readingBook`, JSON.stringify(data));
}

// saveLocalStorage(objData)


function ChangeSize(e) {
  let currentSize = parseFloat(window.getComputedStyle(text).fontSize);

  switch (e) {
    case '+':
      currentSize += 2;
      break;
    case '-':
      currentSize -= 2
      break;
  }
  text.style.fontSize = `${currentSize}px`;
  objData = {
    ...objData,
    size: currentSize
  }
  saveLocalStorage(objData);
}

color.onchange = () => {
  text.style.color = color.value
  objData = {
    ...objData,
    color: color.value
  }
  saveLocalStorage(objData);
}

backgroundColor.onchange = () => {
  text.style.backgroundColor = backgroundColor.value
  objData = {
    ...objData,
    backgroundColor: backgroundColor.value
  }
  saveLocalStorage(objData);
}

textAlign.onchange = () => {
  text.style.textAlign = textAlign.value
  objData = {
    ...objData,
    textAlign: textAlign.value
  }
  saveLocalStorage(objData);
}

lengthRange.onchange = () => {
  const value = lengthRange.value
  lengthValue.innerText = value + "";
  text.style.lineHeight = value;
  objData = {
    ...objData,
    lineHeight: value
  }
  saveLocalStorage(objData);
}

let init = () => {
  let objDataStr = localStorage.getItem(`readingBook`);
  objData = JSON.parse(objDataStr);
  text.style.fontSize = objData.size + 'px';
  text.style.color = objData.color;
  color.value = objData.color;
  text.style.backgroundColor = objData.backgroundColor;
  backgroundColor.value = objData.backgroundColor;
  text.style.textAlign = objData.textAlign;
  text.style.lineHeight = objData.lineHeight;
}


init()