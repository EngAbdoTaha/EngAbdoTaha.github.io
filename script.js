function showHidePassword(bxShowHide) {
  bxShowHide.classList.toggle("bx-show");
  bxShowHide.classList.toggle("bx-hide");
  let passwordInput = document.querySelector("form .password input");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
