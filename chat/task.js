const chat = document.querySelector("div.chat-widget");
const sideBage = document.querySelector("div.chat-widget__side");
const userInputText = document.querySelector("input");
const messages = document.querySelector(".chat-widget__messages");
const botMessages = [
  `Здрааааасьте`,
  `Пффф, вот еще!`,
  ` `,
  `Что надо то? `,
  `Дома нет никто! `,
  `Извините, не расслышал...`,
  `Маловероятно, то Вы нас заинтересуете `,
  `У нас то всё хорошо, а у Вас?`,
  `Ну это, как бы я бот... чего Вы хотите от бота добиться?`,
  `Напишите завтра!`,
  `Я передам Ваше послание... нашему дворнику :р`,
  `Ваше сообщение почему-то стёрлось в моем чате...`,
  `У нас уже закрыто!`,
];
function time() {
  const time = new Date();
  hours =
    time.getHours().toString().length < 2
      ? "0" + time.getHours()
      : time.getHours();
  minutes =
    time.getMinutes().toString().length < 2
      ? "0" + time.getMinutes()
      : time.getMinutes();
  return hours + ":" + minutes;
}

function sendMessegeBot(text) {
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${time()}</div>
    <div class="message__text">
      ${text[Math.floor(Math.random() * text.length)]}
    </div>
  </div>
`;
}

sideBage.addEventListener("click", () => {
  this.onclick = function () {
    chat.classList.add("chat-widget_active");
  };
});

userInputText.addEventListener("keydown", (event) => {
  if (event.code == "Enter" && userInputText.value == "") {
    return false;
  }
  if (event.code == "Enter") {
    messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${time()}</div>
            <div class="message__text">
            ${userInputText.value}
            </div>
        </div>`;
    userInputText.value = "";
    messages.scrollIntoView({block: "end", inline: "end", behavior: "smooth"})
  }
});
