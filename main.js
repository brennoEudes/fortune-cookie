// Variáveis:
const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");

const cookieBtn = document.querySelector("#btn-cookie");
const anotherCookieBtn = document.querySelector("#btn-another-cookie");

// Eventos:
cookieBtn.addEventListener("click", handleCookieClick);
anotherCookieBtn.addEventListener("click", handleAnotherCookieClick);

// Funções:
function handleCookieClick(e) {
    console.log("Clicou no 1º btn!");
  toggleScreen(screen2, screen1);
}

function handleAnotherCookieClick(e) {
    console.log("Clicou no 2º btn!");
  toggleScreen(screen1, screen2);
}

function toggleScreen(showScreen, hideScreen) {
    console.log("Inverteu as classes!");
  showScreen.classList.remove("hide");
  hideScreen.classList.add("hide");
}