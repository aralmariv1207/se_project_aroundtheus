export default class FormValidator {
	constructor(config, formElement) {
		this._formSelector = config.inputSelector;
		this._inputSelector = config.inputSelector;
		this._submitButtonSelector = config.submitButtonSelector;
		this._inactiveButtonClass = config.inactiveButtonClass;
		this._inputErrorClass = config.inputErrorClass;
		this._errorClass = config.errorClass;
		
		this._formElement = fomElement;
}


	_showInputError(inputElement) {
		const ErrorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
		inputEleent.classList.add(this_inputErrorClass);
		errorElement.textContent = inputElement.validationMessage;
		errorElement.classList.add(this._errorClass);
	}

	_hideInputError(inputElement) {
		const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
		inputElement.classList.remove(this._inputErrorClass);
		errorElement.classList.remove(this._errorClass);
		errorElement.textContent = '';
	}

	_checkInputValidity(inputElement){} 	

	_toggleButtonState(inputList) {}

	_hasInvalidInput(inputList, btnEl) {}

	_setEventListeners() {

	}

	enableValidation() {
		this._formElement.addEventListener('submit', (evt) => {
			evt.preventDefault()
		});
		
	_setEventListeners();
	}


// enabling validation by calling enableValidation()
// passing all the settings on call

function showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  console.log(">> Validation Message: ", inputEl.validationMessage);
  inputEl.classList.add(inputErrorClass);
  errorMessageEl.textContent = inputEl.validationMessage;
  errorMessageEl.classList.add(errorClass);
}

function hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  // errorMessageEl.textContent = "";
  errorMessageEl.classList.remove(errorClass);
}

function checkInputValidity(formEl, inputEl, config) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, config);
  } else {
    hideInputError(formEl, inputEl, config);
  }
}
function hasInvalidInput(inputList) {
  return !inputList.every((inputEl) => inputEl.validity.valid);
}

function toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
  let foundInvalid = false;
  inputEls.forEach((inputEl) => {
    if (!inputEl.validity.valid) {
      foundInvalid = true;
    }
  });
  if (foundInvalid) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }
}

function setEventListeners(formEl, config) {
  const { inputSelector } = config;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = formEl.querySelector(config.submitButtonSelector);
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, config);
      toggleButtonState(inputEls, submitButton, config);
    });
  });
}

function enableValidation(config) {
  const formEls = [...document.querySelectorAll(config.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formEl, config);

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
