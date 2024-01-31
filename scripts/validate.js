// enabling validation by calling enableValidation()
// pass all the settings on call

function enableValidation(options) {
  const formEls = [...document.querySelectorAll(".popup__form")];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    // look for all inputs inside of form
    // loop through all inputs to see if all are valid
    // if input is not valid
    // get validation message
    // add error class to input
    // display error message
    // disable button
    // if all inputs are valid
    // enable button
    // reset error messages
  });
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
