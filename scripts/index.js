const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

<ul class="cards__list">
  <li class="card">
    <img
      src="./images/yosemite.jpg"
      alt="Yosemite Valley Image"
      class="card__image"
    />
    <div class="card__description">
      <h2 class="card__title">Yosemite Valley</h2>
      <button type="button" class="card__like-button" aria-label></button>
    </div>
  </li>
  <li class="card">
    <img
      src="./images/lake-louise.jpg"
      alt="Lake Louise Image"
      class="card__image"
    />
    <div class="card__description">
      <h2 class="card__title">Lake Louise</h2>
      <button type="button" class="card__like-button" aria-label></button>
    </div>
  </li>
  <li class="card">
    <img
      src="./images/bald-mountains.jpg"
      alt="Bald Mountains Image"
      class="card__image"
    />
    <div class="card__description">
      <h2 class="card__title">Bald Mountains</h2>
      <button type="button" class="card__like-button" aria-label></button>
    </div>
  </li>
  <li class="card">
    <img src="./images/latemar.jpg" alt="Latemar Image" class="card__image" />
    <div class="card__description">
      <h2 class="card__title">Latemar</h2>
      <button type="button" class="card__like-button" aria-label></button>
    </div>
  </li>
  <li class="card">
    <img
      src="./images/vanoise.jpg"
      alt="Vanoise National Park Image"
      class="card__image"
    />
    <div class="card__description">
      <h2 class="card__title">Vanoise National Park</h2>
      <button type="button" class="card__like-button" aria-label></button>
    </div>
  </li>
  <li class="card">
    <img src="./images/lago.jpg" alt="Lago di Braies" class="card__image" />
    <div class="card__description">
      <h2 class="card__title">Lago di Braies</h2>
      <button type="button" class="card__like-button" aria-label></button>
    </div>
  </li>
</ul>;

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-title-input");

const profileEditForm = profileEditModal.querySelector(".modal__form");

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileEditCloseButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
