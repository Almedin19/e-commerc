const menu = document.getElementById("menu_bar");
const burger = document.getElementById("burger");

burger.style.display = "none";

menu.addEventListener("click", function () {
  if (burger.style.display === "none") {
    burger.style.display = "flex";
    burger.style.marginBottom = "100px";
    burger.style.position = "absolute";
    burger.style.zIndex = "9999";
    burger.style.transformOrigin = "top bottom";
    burger.style.animation = "translateX 300ms 60ms ease-in-out forwards";
  } else {
    burger.style.display = "none";
  }
});
