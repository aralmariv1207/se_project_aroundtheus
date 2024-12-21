import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleConfirmModal) {
    super(popupSelector);
    this._handleConfirmModal = handleConfirmModal;
    this._form = this._popup.querySelector(".modal__form");
    this._inputList = this._form.querySelectorAll(".modal__input");
  }
  setSubmitFunction(submitFnc){
    this._submitFunction = submitFnc
  }
  
  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (event) => {
      event.preventDefault();

      this._handleConfirmModal(this._getInputValues());
    });
  }
}
