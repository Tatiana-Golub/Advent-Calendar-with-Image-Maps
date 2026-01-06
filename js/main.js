import { initCalendar } from "./calendar.js";

document.addEventListener("DOMContentLoaded", () => {
  initCalendar();

  if (typeof imageMapResize === "function") {
    imageMapResize();
  }
});