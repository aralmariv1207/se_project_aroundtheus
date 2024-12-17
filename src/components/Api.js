export default class Api {
  constructor(options) {}
  getInitialCards() {
    console.log("Fetching initial cards");
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "89dc4b2f-fab0-42f3-ad8c-2593f7f5189c",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error: ${res.status}`);
        }
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  getUserInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      headers: {
        authorization: "89dc4b2f-fab0-42f3-ad8c-2593f7f5189c",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error: ${res.status}`);
        }
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
