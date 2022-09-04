const form = document.querySelector("#login");
const email = document.querySelector("#floatingInput");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#floatingPassword");
const passwordError = document.querySelector("#passwordError");

function verifyForm(event) {
  event.preventDefault();

  if (verifyEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (valueLength(password.value, 3) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }
}

form.addEventListener("submit", verifyForm);

function valueLength(value, span) {
  if (value.trim().length > span) {
    return true;
  } else {
    return false;
  }
}

function verifyEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const emailMatch = regEx.test(email);
  return emailMatch;
}
