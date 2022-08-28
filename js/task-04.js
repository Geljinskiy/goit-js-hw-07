let counterValue = 0;
const value = document.querySelector("#value");
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener("click", (ev) => {
  counterValue -= 1;
  value.textContent = counterValue;
});
increment.addEventListener("click", (ev) => {
    counterValue += 1;
  value.textContent = counterValue;
});
