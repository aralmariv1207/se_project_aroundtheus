import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ name, link }) {
    this._popup.classList.add("modal_opened");
    this._imageElement.src = link;
    this.imageElement.alt = name;

    this._captionElement.textContent = name;
    super.open();
  }
}

