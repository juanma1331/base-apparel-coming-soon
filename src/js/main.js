const emailForm = document.querySelector("#subscribe-form");
const emailInput = document.querySelector("#email-input");
const errorMsg = document.querySelector("#email-error-msg");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = emailInput.value;
  if (!inputValue.includes("@") || !inputValue.includes(".")) {
    errorMsg.classList.toggle("invalid");
  }
});
