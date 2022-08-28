const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = form.elements;

  if (email.value === "" || password.value === "") {
    alert("все поля должны быть заполнены");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);

    event.currentTarget.reset();
  }
});
