"use strict";

const allUnread = document.querySelectorAll(".unreadMark");
let unreadCounter = allUnread.length;

const notifications = document.querySelectorAll(".notification");
const displayCounter = document.querySelector(".unreadLogo");
const markAllRead = document.querySelector(".readAll");

displayCounter.textContent = unreadCounter;

markAllRead.addEventListener("click", () => {
  notifications.forEach((i) => {
    i.classList.remove("unread");
  });

  allUnread.forEach((i) => {
    i.style.height = "0px";
  });

  unreadCounter = 0;
  displayCounter.textContent = unreadCounter;
});
