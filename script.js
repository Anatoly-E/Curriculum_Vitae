// Управляю значением value тэга <progress>

function showProgressValue() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (scroll / height) * 100;

  document.querySelector("#page_progress").value = scrolled;
}

window.addEventListener("scroll", showProgressValue);

// Создаю плавную прокрутку по ссылке вверх или вниз

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    const blockId = anchor.getAttribute("href");
    document.querySelector("" + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Добавляю отклик элементам при скролле

document.addEventListener("DOMContentLoaded", () => {
  /** Появление картинок*/
  const imgContainer = document.querySelectorAll(".img-container");
  const scrollAnimationImg = () => {
    imgContainer.forEach((elem) => {
      let windowBottom = window.innerHeight + window.scrollY;
      let itemTop = elem.offsetTop;

      windowBottom >= itemTop
        ? elem.children[0].classList.add("img-show")
        : elem.children[0].classList.remove("img-show");
    });
  };
  /** Появление текста под картинками*/

  /** Анимация иконок контактов*/
  const contacts = document.querySelector(".contacts");
  const scrollAnimationContacts = () => {
    let windowBottom = window.innerHeight + window.scrollY;
    let itemTop = contacts.offsetTop;
    console.log(contacts.children[0]);
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

  /** Анимация стрелки  */
  // scrollAnimationImg();
  // scrollAnimationContacts();
  window.addEventListener("scroll", () => {
    scrollAnimationImg();
    scrollAnimationContacts();
  });
});
