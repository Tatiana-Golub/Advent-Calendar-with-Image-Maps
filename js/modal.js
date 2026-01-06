const modal = document.querySelector("#wishModal");
const titleEl = modal.querySelector(".modal__title");
const textEl = modal.querySelector(".modal__text");
const closeBtn = modal.querySelector(".modal__close");

export function openModal(title, text) {
  titleEl.textContent = title;
  textEl.textContent = text;

  modal.showModal();
}

closeBtn.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.close();
  }
});