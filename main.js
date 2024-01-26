// Variáveis:
const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");

const cookieBtn = document.querySelector("#btn-cookie");
const anotherCookieBtn = document.querySelector("#btn-another-cookie");

const fortuneMessage = document.querySelector("#fortune-message");
const fortuneMessagesData = ["teste", "teste2", "teste3"];

// Eventos:
fortuneMessage.addEventListener("click", handleCookieClick);
cookieBtn.addEventListener("click", handleCookieClick);
anotherCookieBtn.addEventListener("click", handleAnotherCookieClick);

// Funções:
function handleCookieClick(e) {
  toggleScreen(screen2, screen1);
  pickMessage();
}

function handleAnotherCookieClick(e) {
  toggleScreen(screen1, screen2);
}

function pickMessage() {
  let allMessages = fortuneMessagesData.length;
  console.log(allMessages);
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  screen2.querySelector("h2").innerText = `${fortuneMessagesData[randomNumber]}`;
}

function toggleScreen(showScreen, hideScreen) {
  showScreen.classList.remove("hide");
  hideScreen.classList.add("hide");
}
