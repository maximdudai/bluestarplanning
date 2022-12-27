'use strict'

const mobileNavBarBtn_open = document.getElementById("openMenu");
const mobileNavBarBtn_close = document.getElementById("closeMenu");

const displayMobileNavBar = document.querySelector(".mobile-screen");

const displayUserNavBar = () => {
    
    displayMobileNavBar.classList.toggle("hidden");

};

mobileNavBarBtn_open.addEventListener("click", displayUserNavBar);
mobileNavBarBtn_close.addEventListener("click", displayUserNavBar);

// change navbar bg when scrolling down / up
const navBarElement = document.querySelector(".navBarContainer");

window.addEventListener('scroll', function(e){
    // Get the new Value
    const newValue = window.pageYOffset;

    if(newValue) {
        navBarElement.style.background = "#305ba1";
    } else {
        navBarElement.style = "background: linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) );";

    }
});