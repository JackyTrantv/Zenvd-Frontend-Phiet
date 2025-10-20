const elements = document.querySelectorAll(".text");
// console.log(elements);

let maxHeight = 0;
elements.forEach(element => {
  const currentHeight = element.offsetHeight;
  if (currentHeight > maxHeight) {
    maxHeight = currentHeight;
  }
});

console.log(maxHeight);


for (let i = 0; i <= elements.length - 1; i++) {
  // elements[i].style.height = maxHeight + "px";
  if (i % 2 === 0) {
    elements[i].style.backgroundColor = "green";
  }
}

// Bai 2
const slide = document.getElementById("slide");
// console.log(slide);
const arrSlide = ["PHP", "Javascript", "CSS", "HTML", "C#"];

// arrSlide[x]


//
// setInterval(() => {

// }, interval);
number = 0
const interval = setInterval(() => {
  const randomNumber = Math.floor(Math.random() * arrSlide.length - 1) + 1;
  slide.innerText = arrSlide[randomNumber];
  number++;
}, 1000);

// Set Close
const slideBox = document.getElementById("slide_box");
const close = document.getElementById("close");

close.onclick = () => {
  slideBox.style.display = "none";
  setTimeout(() => {
    slideBox.style.display = "flex";
  }, 5000);
}

// const intervalAMinute = setInterval(() => {
//   slideBox.style.display = "flex";
// }, 5000);

// const showBanner = () => {
//   slideBox.style.display = "flex";
// }








