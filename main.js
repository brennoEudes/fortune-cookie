// Variáveis:
const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");

const cookieBtn = document.querySelector("#btn-cookie");
const anotherCookieBtn = document.querySelector("#btn-another-cookie");

const fortuneMessage = document.querySelector("#fortune-message");
const fortuneMessagesData = [
  "'It takes courage to grow up and become who you really are.' — E.E. Cummings",
  "'Your self-worth is determined by you. You don't have to depend on someone telling you who you are.' — Beyoncé",
  "'Nothing is impossible. The word itself says 'I'm possible!' — Audrey Hepburn",
  "'All our dreams can come true, if we have the courage to pursue them.' — Walt Disney",
  "'I am lucky that whatever fear I have inside me, my desire to win is always stronger.' — Serena Williams",
  "'It is during our darkest moments that we must focus to see the light.' — Aristotle",
  "'All dreams are within reach. All you have to do is keep moving towards them.' — Viola Davis",
  "'Don't count the days, make the days count.' — Muhammad Ali",
  "'It always seems impossible until it's done.' — Nelson Mandela",
  "'It's a toxic desire to try to be perfect. I realized later in life that the challenge is not to be perfect. It's to be whole.' — Jane Fonda"
];

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
  let randomNumber = Math.floor(Math.random() * allMessages);
  console.log(randomNumber);
  screen2.querySelector(
    "h3"
  ).innerText = `${fortuneMessagesData[randomNumber]}`; // transforma nº em string!
}

function toggleScreen(showScreen, hideScreen) {
  showScreen.classList.remove("hide");
  hideScreen.classList.add("hide");
}
