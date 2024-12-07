import "../pages/index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

import { initialCards } from "../utils/utils.js";
import { config } from "../utils/utils.js";

const cardSection = new Section(
  {
    items: [],
    renderer: (item) => {
      const card = new Card(item);
      cardSection.addItem(card);
    },
  },
  ".cards__list"
);

const profileEditButton = document.querySelector("#profile-edit-button");

const popupWithForm = new PopupWithForm("#profile-edit-modal", (data) => {
  userInfo.setUserInfo({
    name: data.title,
    job: data.description,
  });
  popupWithForm.close();
});

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  popupWithForm.open();
});

const popupWithFormAddCard = new PopupWithForm("#add-card-modal", (data) => {
  cardSection.addItem(
    createCard({
      name: data.title,
      link: data.url,
    })
  );
  popupWithFormAddCard.close();
});
popupWithFormAddCard.setEventListeners();

const popupWithImage = new PopupWithImage("#image-preview-modal");
popupWithImage.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

cardSection.renderItems();

popupWithForm.setEventListeners();
popupWithImage.setEventListeners();

function handleImageClick(data) {
  previewImageElement.src = data.link;
  previewImageElement.alt = data.name;

  previewModalCaption.textContent = data.name;
  popupWithImage.open({ name: data.name, link: data.link });
}

const cardSelector = "#card-template";

const createCard = (data) => {
  const card = new Card(data, cardSelector, handleImageClick);
  return card.getView();
};

// Elements //

const profileEditModal = document.querySelector("#profile-edit-modal");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const previewImageModal = document.querySelector("#image-preview-modal");
const previewImageElement = previewImageModal.querySelector(
  ".modal__preview-image"
);
const previewModalCaption = document.querySelector(".modal__caption");

const previewModalCloseButton =
  previewImageModal.querySelector(".modal__close");

previewModalCloseButton.addEventListener("click", () => {});

// define an object for storing validators
const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    // Here you get the name of the form (if you don’t have it then you need to add it into each form in `index.html` first)
    const formName = formElement.getAttribute("name");

    // Here you store the validator using the `name` of the form
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);

// or you can use a string – the name of the form (you know it from `index.html`)

// Wrappers //
const cardsWrap = document.querySelector(".cards__list");

const addCardModal = document.querySelector("#add-card-modal");
const addCardFormElement = addCardModal.querySelector(".modal__form");

// Buttons and other DOM Nodes //
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const addNewCardButton = document.querySelector(".profile__add-button");

const cardTitleInput = addCardFormElement.querySelector("#add-card-form");
const cardUrlInput = addCardFormElement.querySelector("#add-url");

const modals = [addCardModal, profileEditModal, previewImageModal];

function renderCard(cardData, wrapper) {
  const cardElement = createCard(cardData);
  wrapper.prepend(cardElement);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  console.log(cardTitleInput);
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardsWrap);

  addCardFormElement.reset();

  formValidators["Add-a-New-Card"].disableButton();
}

// Form Listeners //

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

// Adding a New Card //

addNewCardButton.addEventListener("click", () => popupWithFormAddCard.open());

initialCards.forEach((card) => {
  console.log(card);
  renderCard(card, cardsWrap);
});
