'use strict'

const mobileNavBarBtn_open = document.getElementById("openMenu");
const mobileNavBarBtn_close = document.getElementById("closeMenu");

const displayMobileNavBar = document.querySelector(".mobile-screen");

const displayUserNavBar = () => {
    
    displayMobileNavBar.classList.toggle("hidden");

    console.log('asdas');

};

mobileNavBarBtn_open.addEventListener("click", displayUserNavBar);
mobileNavBarBtn_close.addEventListener("click", displayUserNavBar);