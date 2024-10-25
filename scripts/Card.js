export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    //create the variable: ".card__like-button"
    this.likeButton = this._cardElement.querySelector(".card__like-button");

    //add the event listener
    this.likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    //create the variable: ".card__delete-button"
    this.deleteButton = this._cardElement.querySelector(".card__delete-button");

    //add the event listener
    this.deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });
  }

  _handleDeleteCard() {
    this._cardElement.removed();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_is-active");
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    // get the card view

    // set event listeners
    this._setEventListeners();

    // return the card
  }
}
