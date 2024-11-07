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
    const ErrorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this_inputErrorClass);
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
    const checkInputValidity = new this._checkInputValidity(
      formEl,
      inputEl,
      config
    );
    if (!inputEl.validity.valid) {
      showInputError(formEl, inputEl, config);
    } else {
      hideInputError(formEl, inputEl, config);
    }
  }

  _toggleButtonState(inputList) {
    const toggleButtonState = this._toggleButtonState(inputEls, submitButton, {
      inactiveButtonClass,
    });
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

  _hasInvalidInput(inputList, btnEl) {
    const hasInvalidInput = this._hasInvalidInput(inputList);
    return !inputList.every((inputEl) => inputEl.validity.valid);
  }

  _setEventListeners(formEl, config) {
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

  enableValidation(formEl) {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }

  _setEventListeners() {}
}
