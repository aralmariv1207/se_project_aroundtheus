// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(formEl, inputEl, {inputErrorClass, errorClass});
const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
inputEl.classList.add(inputErrorClass);
errorMessageEl.textContent = inputEl.validationMessage;
errorMessageEl.classList.add(errorClass);
}

function hideInputError(formEl, inputEl, {inputErrorClass, errorClass});
const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
inputEl.classList.remove(inputErrorClass);
errorMessageEl.textContent = '';
errorMessageEl.classList.remove(errorClass);
}

function checkInputValidity(formEl, inputEl, options) {
    if (!inputEl.validity.valid) {
        return showInputError(formEl, inputEl, options);
    }

    hideInputError(formEl, inputEl, options);
}

function hasInvalidInput(inputList) {
    return !inputList.every(inputEl) => inputEl.validity.valid);
}

// disableButton

// enableButton

function setEventListeners(formEl, options) {
const {inputSelector} = options;
const inputEls = [...formEl.querySelectorAll(inputSelector)]
}

function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

setEventListeners(formEl, options) {

}


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
