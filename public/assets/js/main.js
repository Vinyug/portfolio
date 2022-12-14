"use strict"

// Navbar animée
const btnNav = document.querySelector(`.responsive-nav-btn`);
const listeNav = document.querySelector(`nav ul`);
let imgBtn = document.querySelector(`.responsive-nav-btn img`);

btnNav.addEventListener(`click`, () => {
    listeNav.classList.toggle(`active-nav`);

    if(imgBtn.src.includes(`menu`)){
        imgBtn.src = `/public/assets/images/cross.png`;

    } else {
        imgBtn.src = `/public/assets/images/menu.png`;
    }
})