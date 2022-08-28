const inp = document.querySelector('#validation-input');

inp.addEventListener('blur', event => {
    if (inp.value.length == inp.dataset.length) {
        if (inp.classList.contains("invalid")) {
            inp.classList.remove("invalid");
        }
        inp.classList.add("valid");
    }
    else {
        inp.classList.add("invalid");
    }
});
