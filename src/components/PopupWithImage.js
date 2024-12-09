import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.classList.add(".image-preview-modal");
    this._captionElement = this._popup.querySelector(".modal__caption");
  }

  open({ name, link }) {
    this._imageElement.src = link;
    this.imageElement.alt = name;
    this._captionElement.textContent = name;
    super.open();
  }
}
