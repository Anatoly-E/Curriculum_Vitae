// Значение value тэга <progress>

const showProgressValue = () => {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scroll / height) * 100;
  document.querySelector("#page_progress").value = scrolled;
};

// Анимация <<двойная стрелочка <-> Контакты>>

const arrowText = document.querySelector(".skip-bottom a span");
const arrowTextContainer = document.querySelector(".skip-bottom a");
const changeArrowToContacts = () => {
  arrowTextContainer.style.width = "200px";
  arrowText.textContent = "Мои контакты";
  arrowText.style.animation = "none";
  arrowText.style.color = "rgb(161, 215, 253)";
};
const changeContactsToArrow = () => {
  arrowTextContainer.style.width = "60px";
  arrowText.textContent = "keyboard_double_arrow_down";
  arrowText.style.animation = "infinite ease-in-out 3s blinking-arrow";
  arrowText.style.color = "rgb(91, 154, 199)";
};
arrowTextContainer.addEventListener("mouseover", changeArrowToContacts);
arrowTextContainer.addEventListener("mouseout", changeContactsToArrow);

// Плавная прокрутка по ссылке вверх или вниз

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", event => {
    event.preventDefault();
    const blockId = anchor.getAttribute("href");
    document.querySelector("" + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Анимация текста приветствия при загрузке страницы

const loadAnimationText = () => {
  const hello = document.querySelector(".greeting-text h1");
  const helloName = document.querySelector(".greeting-text h2");
  setTimeout(() => {
    hello.classList.add("hello-show");
    helloName.classList.add("hello-name-show");
  }, 1000);
};

// Анимация появления картинок

const imgContainer = document.querySelectorAll(".img-container");
const scrollAnimationImg = () => {
  imgContainer.forEach(elem => {
    let windowCenter = window.innerHeight / 1.5 + window.scrollY;
    let itemTop = elem.offsetTop;

    if (windowCenter >= itemTop) {
      elem.children[0].classList.add("img-show");
    }
  });
};

// Анимация иконок контактов

const contacts = document.querySelector(".contacts");
const scrollAnimationContacts = () => {
  let windowBottom = window.innerHeight + window.scrollY;
  let itemTop = contacts.offsetTop;
  if (windowBottom >= itemTop) {
    contacts.children[0].classList.add("icon-telegram-show");
    contacts.children[1].classList.add("icon-github-show");
    contacts.children[2].classList.add("icon-vk-show");
  } else {
    contacts.children[0].classList.remove("icon-telegram-show");
    contacts.children[1].classList.remove("icon-github-show");
    contacts.children[2].classList.remove("icon-vk-show");
  }
};

// Добавляю отклик элементам после загрузки страницы

document.addEventListener("DOMContentLoaded", () => {
  showProgressValue();
  loadAnimationText();
  window.addEventListener("scroll", () => {
    showProgressValue();
    scrollAnimationImg();
    scrollAnimationContacts();
  });
});
