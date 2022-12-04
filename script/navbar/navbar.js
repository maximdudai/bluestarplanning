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

    displayMenu.style.width = `${window.innerWidth + 1}px`;
    visibleResponsiveNav = !visibleResponsiveNav;
};

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    const navBar = document.querySelector(".page-navigation-bar");
    const gotoSectionBtn = document.querySelector(".goto-section");

    if(scroll > 0) {
        navBar.style.backgroundColor = 'rgba(18,27,67,1)';
        navBar.style.border = 0;
        gotoSectionBtn.style.opacity = scroll == -0 ? '1' : `${25/scroll}`;

    } else {
        navBar.style.backgroundColor = 'transparent';
        navBar.style.borderBottom = '1px solid rgba(255, 255, 255, .5)';
        gotoSectionBtn.style.opacity = '1';
    }
});