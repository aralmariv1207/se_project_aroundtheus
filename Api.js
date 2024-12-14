export default class Api {
  constructor(options) {}
  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "093dd200-595d-48b5-923b-6b70cedcb3ea",
      },
    }).then((res) => res.json());
  }
}

// // if the server returns an error, reject the promise
// return Promise.reject(`Error: ${res.status}`);
