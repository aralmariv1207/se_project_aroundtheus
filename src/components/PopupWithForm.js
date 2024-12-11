import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".modal__form");
    this._inputList = this._form.querySelectorAll(".modal__input");
  }

  _getInputValues() {
    const inputValues = {};

    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      if (data[input.name] !== undefined) {
        input.value = data[input.name];
      } else {
        console.log(`No data provided for input with name: ${input.name}`);
        input.value = "";
      }
    });
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (event) => {
      event.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });
  }

  getForm() {
    return this._form;
  }

  close() {
    super.close();
  }
}
