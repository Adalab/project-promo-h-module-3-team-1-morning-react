/* eslint-disable no-unused-vars */
"use strict";

//constantes

const shareButtonOk = document.querySelector(".js-share-button");
const twitterContainer = document.querySelector(".js-share--url");
let cardUrl = "";

// CAMBIAR COLOR BOTÓN SHARE

//Función para cambiar de color el botón de share

const shareButton = document.querySelector(".js-share-button");
const form = document.querySelector(".js-form");

function checkForm() {
  if (form.checkValidity() === true) {
    shareButton.classList.remove("button--filter");
    shareButton.removeAttribute("disabled");
  } else {
    shareButton.classList.add("button--filter");
    twitterContainer.classList.add("share--url");
  }
}

// URL Y TWITTER

//función handler para desplegar url y botón compartir en twitter

function showTwitter() {
  if (form.checkValidity() === true) {
    twitterContainer.classList.remove('share--url');
    sendRequest(getDataObj());
  } else {
    twitterContainer.classList.add("share--url");
    alert("Ey! Faltan info, revisa tus datos.");
  }

}

//función listener botón naranja

shareButtonOk.addEventListener("click", showTwitter);

// Crear url de la card

function sendRequest(getDataObj) {
  console.log(getDataObj);
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(getDataObj),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const responseURL = document.querySelector(".js-notification-link");

function showURL(result) {
  cardUrl = result.cardURL;
  if (result.success) {
    responseURL.innerHTML =
      "<a href=" + result.cardURL + ">" + result.cardURL + "</a>";
    cardUrl = result.cardURL;
  } else {
    responseURL.innerHTML = "ERROR:" + result.error;
  }
}

// Botón twitter, crear tweet

const buttonTwitter = document.querySelector(".js__button-Twitter");

function openTwitter() {
  const twitterText = '¡Hola! Esta es mi tarjeta de contacto. Saludos!';
  const hashtags = 'adalab,CardToGo,promoHamilton,thereisnoplanetb';
  buttonTwitter.href =
    'https://twitter.com/intent/tweet?url=' +
    encodeURIComponent(cardUrl) +
    '&text=' +
    encodeURIComponent(twitterText) +
    "&hashtags=" +
    encodeURIComponent(hashtags);
}

buttonTwitter.addEventListener("click", openTwitter);
