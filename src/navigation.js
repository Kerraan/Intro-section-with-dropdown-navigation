"use strict";

const nav = document.querySelector(".primary-navigation");
const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".mobile-nav-overlay");

menuBtn.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    menuBtn.classList.add("open");
    overlay.style.display = "block";
  } else {
    nav.setAttribute("data-visible", false);
    menuBtn.classList.remove("open");
    overlay.style.display = "none";
  }
});
