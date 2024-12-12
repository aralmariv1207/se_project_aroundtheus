class Api {
  constructor(options) {}
  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "aae25c14-8ebe-45da-814e-c0e9325105ee",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "aae25c14-8ebe-45da-814e-c0e9325105ee",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((result) => {})
  .catch((err) => {
    console.error(err);
  });

  function renderCardsAfterUserInfo(() => {
Promise.all();
  });
    
  

  