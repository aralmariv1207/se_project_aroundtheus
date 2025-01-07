import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".modal__form");
  }
  setSubmitFunction(submitFnc) {
    this._submitFunction = submitFnc;
  }

  setEventListeners() {
    super.setEventListeners();
    console.log(this._popup, this._form);
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitFunction();
    });
  }

  renderModalFormLoading(isLoading) {
    const submitButton = this._form.querySelector(".modal__button");
    if (isLoading) {
      submitButton.textContent = "Deleting...";
    } else {
      submitButton.textContent = "Yes";
    }
  }
}
