'use strict'

let mobileBtnOpen = document.querySelector(".mobile-icon"); 
let mobileBtnClose = document.querySelector(".close-menu"); 

let mobileMenuSize = document.querySelector(".responsive-menu");
let displayMenu = document.getElementById("responsiveMainMenu");
let visibleResponsiveNav = false;

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1000px)").matches) {
        if(visibleResponsiveNav) {
            toggleMenu();
        }
    }
})

mobileBtnOpen.addEventListener("click", () => {
    toggleMenu();
});
mobileBtnClose.addEventListener("click", () => {
    toggleMenu();
});

function toggleMenu() {
    displayMenu.classList.toggle('responsive-menu');

    displayMenu.style.width = `${window.innerWidth}px`;
    visibleResponsiveNav = !visibleResponsiveNav;
};