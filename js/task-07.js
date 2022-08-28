const inp = document.querySelector("#font-size-control");
const txt = document.querySelector('#text');

txt.style.fontSize = `${inp.value}px`;

inp.addEventListener("input", (event) => {
    txt.style.fontSize = `${inp.value}px`;
});
