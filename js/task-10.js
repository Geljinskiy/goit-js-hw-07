function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input[type="number"]');
console.log(input);

const buttonCreate = document.querySelector("[data-create");
console.log("buttonCreate :", buttonCreate.type);

const buttonDestroy = document.querySelector("[data-destroy");
console.log("buttonDestroy :", buttonDestroy.type);


const boxes = document.querySelector('#boxes');
console.log('boxes :', boxes);



buttonCreate.addEventListener('click', event => {
  createBoxes(input.value);
})

buttonDestroy.addEventListener('click', event => {
  boxes.innerHTML = "";
})


function createBoxes(amount) {
  const arr = [];
  amount = amount * 10 + 30;
  for (let i = 30; i < amount; i+=10) {
    const el = document.createElement("div");
    el.style.width = `${i}px`;
    el.style.height = `${i}px`;
    el.style.backgroundColor = getRandomHexColor();
    arr.push(el);
  }
  boxes.append(...arr);
}
