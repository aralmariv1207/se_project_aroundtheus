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
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    },
  },
  ".cards__list"
);

const profileEditButton = document.querySelector("#profile-edit-button");

const handlePopupWithForm = new PopupWithForm("#profile-edit-modal", (data) => {
  userInfo.setUserInfo({
    name: data.title,
    job: data.description,
  });
  handlePopupWithForm.close();
});

handlePopupWithForm.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const currentUserData = userInfo.getUserInfo();
  handlePopupWithForm.setInputValues({
    title: currentUserData.name,
    description: currentUserData.job,
  });
  handlePopupWithForm.open();
});

const addCardForm = document.forms["Add-a-New-Card"];
addCardForm.reset();

const addCardWithPopupWithForm = new PopupWithForm(
  "#add-card-modal",
  (data) => {
    cardSection.addItem(
      createCard({
        name: data.title,
        link: data.url,
      })
    );
    addCardWithPopupWithForm.close();
    formValidators["Add-a-New-Card"].disableButton();
  }
);
addCardWithPopupWithForm.setEventListeners();

const handlePopupWithImage = new PopupWithImage("#image-preview-modal");
handlePopupWithImage.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

function handleImageClick(data) {
  handlePopupWithImage.open({ name: data.name, link: data.link });
}

const cardSelector = "#card-template";

function createCard(data) {
  const card = new Card(data, "#card-template", handleImageClick);
  return card.getView();
}

cardSection.renderItems();

// Attach event listeners, handle initialization, etc.

const profileEditModal = document.querySelector("#profile-edit-modal");

const previewImageModal = document.querySelector("#image-preview-modal");
const previewImageElement = previewImageModal.querySelector(
  ".modal__preview-image"
);
const previewModalCaption = document.querySelector(".modal__caption");

const previewModalCloseButton =
  previewImageModal.querySelector(".modal__close");

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

// Logic to submit the card goes here
// Assuming it is an asynchronous operation

// this.submitCardData()
//   .then(() => {
//     // Only reset the form after successful submission
//     this._form.reset();
//     this.close();
//   })
//   .catch((error) => {
//     console.error("Submission failed:", error);
//     // Handle submission error
//   });

// Adding a New Card //

addNewCardButton.addEventListener("click", () =>
  addCardWithPopupWithForm.open()
);
