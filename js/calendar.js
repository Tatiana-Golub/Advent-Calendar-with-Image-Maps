import { openModal } from "./modal.js";
import { wishes } from "./data.js";

export function initCalendar() {
  const today = getTodayAdventDay();

  document.addEventListener("click", (e) => {
    if (e.target.tagName !== "AREA") return;

    const day = Number(e.target.dataset.day);

    if (day <= today) {
      openModal(`Day ${day}`, wishes[day]);
    } else {
      openModal(
        `Day ${day}`,
        "Too early. This window will open soon."
      );
    }
  });
}

function getTodayAdventDay() {
  const now = new Date();
  // const month = now.getMonth(); // Use this constant if you wish the calendar windows to open only in December
  // if (month !== 11) return 0; 

  const day = now.getDate();

  if (day > 24) return 24;

  return day;
}