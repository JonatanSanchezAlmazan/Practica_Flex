const nav = document.querySelector("#nav");
const openMenu = document.querySelector("#open_menu");
const clouseMenu = document.querySelector("#clouse_menu");

openMenu.addEventListener("click", () => {
    nav.classList.add("nav_visible");
});

clouseMenu.addEventListener("click", () => {
    nav.classList.remove("nav_visible")
});