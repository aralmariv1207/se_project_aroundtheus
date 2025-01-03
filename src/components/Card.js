export default class Card {
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    handleImageClick,
    handleConfirmModal,
    handleCardLike
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._isLiked = isLiked;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleConfirmModal = handleConfirmModal;
    this._handleCardLike = handleCardLike;

    this._element = this._getTemplate();

    this._setEventListeners();
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true);
    return cardTemplate.querySelector(".card");
  }

  _setEventListeners() {
    this.likeButton = this._element.querySelector(".card__like-button");

    this.likeButton.addEventListener("click", () => {
      this._handleCardLike(this, this._id, !this._isLiked);
    });

    this.deleteButton = this._element.querySelector(".card__delete-button");

    this.deleteButton.addEventListener("click", () => {
      this._handleConfirmModal(this);
    });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick({ name: this._name, link: this._link });
      });
  }

  setIsLiked(isLiked) {
    this._isLiked = isLiked;
    this.renderLike();
  }

  renderLike() {
    if (this._isLiked) {
      this.likeButton.classList.add("card__like-button_active");
    } else {
      this.likeButton.classList.remove("card__like-button_active");
    }
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleLikeIcon() {
    this.likeButton.classList.toggle("card__like-button_active");
  }

  getView() {
    this._imageElement = this._element.querySelector(".card__image");
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;

    this._titleElement = this._element.querySelector(".card__title");
    this._titleElement.textContent = this._name;

    this.renderLike();
    return this._element;
  }

  removeCard() {
    this._element.remove();
  }
}
