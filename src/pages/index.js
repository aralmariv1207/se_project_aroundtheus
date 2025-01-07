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

import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

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

const editProfilePopup = new PopupWithForm("#profile-edit-modal", (data) => {
  editProfilePopup.renderModalFormLoading(true);
  api
    .editProfile(data.title, data.description)
    .then((updatedUserInfo) => {
      userInfo.setUserInfo({
        name: updatedUserInfo.name,
        job: updatedUserInfo.about,
      });
      editProfilePopup.close();
    })
    .catch((err) => console.error(err))
    .finally(() => editProfilePopup.renderModalFormLoading(false));
});

profileEditButton.addEventListener("click", () => {
  const currentUserData = userInfo.getUserInfo();
  editProfilePopup.setInputValues({
    title: currentUserData.name,
    description: currentUserData.job,
  });
  editProfilePopup.open();
});

editProfilePopup.setEventListeners();

const addCardForm = document.forms["Add-a-New-Card"];
addCardForm.reset();

const addCardWithPopupForm = new PopupWithForm("#add-card-modal", (data) => {
  addCardWithPopupForm.renderModalFormLoading(true);
  api
    .createNewCard(data.title, data.url)
    .then((newCard) => {
      cardSection.addItem(createCard(newCard));
      addCardWithPopupForm.close();
      addCardForm.reset();
      formValidators["Add-a-New-Card"].disableButton();
    })
    .catch((err) => console.error(err))
    .finally(() => addCardWithPopupForm.renderModalFormLoading(false));
});

addCardWithPopupForm.setEventListeners();

const handlePopupWithImage = new PopupWithImage("#image-preview-modal");
handlePopupWithImage.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
  avatarSelector: ".profile__image",
});

function handleImageClick(data) {
  handlePopupWithImage.open({ name: data.name, link: data.link });
}

const deletePopup = new PopupWithConfirm("#remove-card-popup");
deletePopup.setEventListeners();

function handleConfirmModal(card) {
  deletePopup.setSubmitFunction(() => {
    deletePopup.renderModalFormLoading(true);
    api
      .handleDeleteCard(card._id)
      .then(() => {
        card.removeCard();
        deletePopup.close();
      })
      .catch((err) => console.error(err))
      .finally(() => deletePopup.renderModalFormLoading(false));
  });
  deletePopup.open();
}

const cardSelector = "#card-template";

function createCard(data) {
  console.log(data);
  const card = new Card(
    data,
    "#card-template",
    handleImageClick,
    handleConfirmModal,
    handleLikeCard
  );
  return card.getView();
}

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
formValidators["avatar-form"].disableButton();

// or you can use a string – the name of the form (you know it from `index.html`)

// Wrappers //
const cardsWrap = document.querySelector(".cards__list");

const addCardModal = document.querySelector("#add-card-modal");
const addCardFormElement = addCardModal.querySelector(
  ".modal__form",
  ".modal__input"
);

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

addNewCardButton.addEventListener("click", () => addCardWithPopupForm.open());

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "89dc4b2f-fab0-42f3-ad8c-2593f7f5189c",
    "Content-Type": "application/json",
  },
});

function handleLikeCard(card, cardId, isLiked) {
  api
    .updateLikeStatus(cardId, isLiked)
    .then((updatedCard) => {
      card.setIsLiked(updatedCard.isLiked);
    })
    .catch((err) => console.error(err))
    .finally(() => handleLikeCard.renderModalFormLoading(false));
}

function renderCardsAfterUserInfo() {
  return Promise.all([api.getInitialCards(), api.getUserInfo()]).then(
    ([cards, userData]) => {
      cardSection.renderItems(cards);
      userInfo.setUserInfo({
        name: userData.name,
        job: userData.about,
      });
      userInfo.setUserAvatar({
        avatar: userData.avatar,
      });
    }
  );
}

renderCardsAfterUserInfo();

const handleAvatarModal = new PopupWithForm("#avatar-modal", (data) => {
  handleAvatarModal.renderModalFormLoading(true);
  api
    .editAvatar({
      avatar: data.avatar,
    })
    .then((updatedAvatarInfo) => {
      userInfo.setUserAvatar(updatedAvatarInfo);
      handleAvatarModal.close();
      formValidators["avatar-modal"].disableButton();
    })
    .catch((err) => console.error(err))
    .finally(() => handleAvatarModal.renderModalFormLoading(false));
});

const avatarEditButton = document.querySelector(".avatar__edit-icon");
avatarEditButton.addEventListener("click", () => {
  handleAvatarModal.open();
  handleAvatarModal.setEventListeners();
});

function handleFormSubmit(inputValues) {
  return userInfo(inputValues)
    .then((response) => {
      console.log("Form submission successful");
      this.close();
      return response;
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      this.renderModalFormLoading(false);
    });
}
