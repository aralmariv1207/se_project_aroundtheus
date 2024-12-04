import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputValues = {};

    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (event) => {
      event.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
