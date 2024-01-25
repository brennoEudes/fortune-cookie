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
  toggleScreen(screen1, screen2);
}

function handleAnotherCookieClick(e) {
  toggleScreen(screen2, screen1);
}

function toggleScreen(showScreen, hideScreen) {
  showScreen.classList.remove("hide");
  hideScreen.classList.add("hide");
}
