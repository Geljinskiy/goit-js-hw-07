function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");

const btn = document.querySelector(".change-color");

const span = document.querySelector(".color");




btn.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
  console.log(color.slice(1,4))
});
