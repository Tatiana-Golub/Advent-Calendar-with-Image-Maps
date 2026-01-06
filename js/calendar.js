import { openModal } from "./modal.js";
import { wishes } from "./data.js";

export function initCalendar() {
  document.addEventListener("click", (e) => {
  if (e.target.tagName === "AREA") {
    const day = e.target.dataset.day;
    openModal(`Day ${day}`, wishes[day]);
  }
});
}

