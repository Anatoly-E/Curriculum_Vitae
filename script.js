// Управляем значением value progress

function showProgressValue() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (scroll / height) * 100;

  document.querySelector("#page_progress").value = scrolled;
}

window.addEventListener("scroll", showProgressValue);

// Создаем плавную прокрутку по ссылке вверх или вниз

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
