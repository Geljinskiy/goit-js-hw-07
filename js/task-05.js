const input = document.querySelector("#name-input");
console.log("input :", input);

const output = document.querySelector("#name-output");
console.log("output :", output);

input.addEventListener("input", (event) => {
  if (output.textContent === "Anonymous") {
    output.textContent = "";
  }
  if (event.data) {
    output.textContent += event.data;
  }
});

input.addEventListener("keyup", (event) => {
  if (output.textContent === "") {
    output.textContent = "Anonymous";
  }
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Backspace" && output.textContent !== "Anonymous") {
    const ind = output.textContent.length;
    output.textContent = output.textContent.slice(0, ind - 1);
  }
});
