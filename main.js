// Variáveis:
const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");

const cookieBtn = document.querySelector("#btn-cookie");
const anotherCookieBtn = document.querySelector("#btn-another-cookie");

// Eventos:
cookieBtn.addEventListener("click", handleCookieClick);
anotherCookieBtn.addEventListener("click", handleCookieClick);

function handleCookieClick(e) {
  toogleScreen();
}

function handleAnotherCookieClick(e) {
  toogleScreen();
}

function toogleScreen() {
  screen1.classList.toggle("hide"); // altera a class "hide" do momento (remove ou add)
  screen2.classList.toggle("hide"); // altera a class "hide" do momento (remove ou add)
}
