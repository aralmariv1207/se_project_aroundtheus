export default class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.inputSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._formElement = formElement;
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState(inputList) {
    let foundInvalid = false;
    this._inputElement.forEach((inputElement) => {
      if (!inputElement.validity.valid) {
        foundInvalid = true;
      }
    });
    if (foundInvalid) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _hasInvalidInput(inputList, btnEl) {
    return !inputList.every((inputElement) => inputElement.validity.valid);
  }

  _setEventListeners(formElement, config) {
    const { inputSelector } = config;
    this._inputElement = [...formElement.querySelectorAll(this._inputSelector)];
    this._submitButton = formElement.querySelector(this._submitButtonSelector);
    this._inputElement.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(inputEl);
        this._toggleButtonState();
      });
    });
  }

  enableValidation(formElement) {
    // Call the _setEventListeners method and pass the form element and the input selector (Note To Self [NTS]: because these are the things you expect in your setEventListener method— check it out :) )
    this._setEventListeners(this._formElement, {
      inputSelector: this._inputSelector,
    });
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }
  atus;

  resetValidator() {
    //creates a variable to the input list
    // this variable will receive a list of inputs inside the form element. NTS: You already have a variable for formElement, so you can use this._formElement + querySelectorAll
    const inputList = this._formElement.querySelectorAll(this._inputSelector);

    //now that a list of inputs is set up, forEach one of them, hideInputError
    inputList.forEach((input) => this._hideInputError(input));

    // NTS: also, toggle the submit button (this._toggleButtonState())
    this._toggleButtonState();
  }
}
