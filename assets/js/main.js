"use strict"

// Navbar animée
const btnNav = document.querySelector(`.responsive-nav-btn`);
const listeNav = document.querySelector(`nav ul`);
let imgBtn = document.querySelector(`.responsive-nav-btn img`);

btnNav.addEventListener(`click`, () => {
    listeNav.classList.toggle(`active-nav`);

    if(imgBtn.src.includes(`menu`)){
        imgBtn.src = `assets/images/cross.png`;

    } else {
        imgBtn.src = `assets/images/menu.png`;
    }
})


// Validation form contact

// Form contact validation
const inputFirstname = document.getElementById('firstname');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const inputMessage = document.getElementById('message');

const errorFirstname = document.getElementById('commentFirstname');
const errorName = document.getElementById('commentName');
const errorEmail = document.getElementById('commentEmail');
const errorPhone = document.getElementById('commentPhone');
const errorMessage = document.getElementById('commentMessage');


inputFirstname.addEventListener('input', verifyFirstname);
inputName.addEventListener('input', verifyName);
inputEmail.addEventListener('input', verifyEmail);
inputPhone.addEventListener('input', verifyPhone);
inputMessage.addEventListener('input', verifyMessage);
submit.addEventListener('click', validate);

function verifyFirstname() {
    if (inputFirstname.value.length <= 2 || inputFirstname.value.length >= 20) {
        inputFirstname.classList.add('inputError');
        inputFirstname.classList.add('commentError');
        errorFirstname.classList.add('comments-active');
        errorFirstname.innerText = `Le champs doit comporter 3 à 20 caractères`;
    } else {
        inputFirstname.classList.remove('inputError');
        inputFirstname.classList.remove('commentError');
        errorFirstname.classList.remove('comments-active');
    }

    if (!inputFirstname.value) {
        inputFirstname.classList.add('inputError');
        errorFirstname.classList.add('comments-active');
        errorFirstname.innerText = `Le champs ne peut pas être vide`;
        setTimeout(() => {
            inputFirstname.classList.remove('inputError');
            inputFirstname.classList.remove('commentError');
            errorFirstname.classList.remove('comments-active');
        }, 3000);
    }

}

function verifyName() {
    if (inputName.value.length <= 2 || inputName.value.length >= 20) {
        inputName.classList.add('inputError');
        inputName.classList.add('commentError');
        errorName.classList.add('comments-active');
        errorName.innerText = `Le champs doit comporter 3 à 20 caractères`;
    } else {
        inputName.classList.remove('inputError');
        inputName.classList.remove('commentError');
        errorName.classList.remove('comments-active');
    }
    
    if (!inputName.value) {
        inputName.classList.add('inputError');
        errorName.classList.add('comments-active');
        errorName.innerText = `Le champs ne peut pas être vide`;
        setTimeout(() => {
            inputName.classList.remove('inputError');
            inputName.classList.remove('commentError');
            errorName.classList.remove('comments-active');
        }, 3000);
    }
    
}

function verifyEmail() {
    if (inputEmail.value.length <= 6 || inputEmail.value.length >= 80) {
        inputEmail.classList.add('inputError');
        inputEmail.classList.add('commentError');
        errorEmail.classList.add('comments-active');
        errorEmail.innerText = `Le champs doit comporter 6 à 80 caractères`;
    } else {
        if (!isEmail(inputEmail.value)) {
            inputEmail.classList.add('inputError');
            inputEmail.classList.add('commentError');
            errorEmail.classList.add('comments-active');
            errorEmail.innerText = `Le champs doit être un mail`;
        } else {
            inputEmail.classList.remove('inputError');
            inputEmail.classList.remove('commentError');
            errorEmail.classList.remove('comments-active');
        }
    }
    
    if (!inputEmail.value) {
        inputEmail.classList.add('inputError');
        inputEmail.classList.add('commentError');
        errorEmail.classList.add('comments-active');
        errorEmail.innerText = `Le champs ne peut pas être vide`;
        setTimeout(() => {
            inputEmail.classList.remove('inputError');
            inputEmail.classList.remove('commentError');
            inputEmail.classList.remove('commentError');
            errorEmail.classList.remove('comments-active');
        }, 3000);
    }
    
}

function verifyPhone() {
    if (inputPhone.value.length) {
        if (inputPhone.value.length != 10) {
            inputPhone.classList.add('inputError');
            inputPhone.classList.add('commentError');
            errorPhone.classList.add('comments-active');
            errorPhone.innerText = `Le champs doit comporter 10 caractères`;
        } else if (isNaN(inputPhone.value)) {
            inputPhone.classList.add('inputError');
            inputPhone.classList.add('commentError');
            errorPhone.classList.add('comments-active');
            errorPhone.innerText = `Le champs doit comporter des caractères numériques`;
        } else {
            inputPhone.classList.remove('inputError');
            inputPhone.classList.remove('commentError');
            errorPhone.classList.remove('comments-active');
        }
    } else {
        inputPhone.classList.remove('inputError');
        inputPhone.classList.remove('commentError');
        errorPhone.classList.remove('comments-active');
    }
}

function verifyMessage() {
    if (inputMessage.value.length <= 2 || inputMessage.value.length >= 600) {
        inputMessage.classList.add('inputError');
        inputMessage.classList.add('commentError');
        errorMessage.classList.add('comments-active');
        errorMessage.innerText = `Le champs doit comporter 3 à 600 caractères`;
    } else {
        inputMessage.classList.remove('inputError');
        inputMessage.classList.remove('commentError');
        errorMessage.classList.remove('comments-active');
    }
    
    if (!inputMessage.value) {
        inputMessage.classList.add('inputError');
        inputMessage.classList.add('commentError');
        errorMessage.classList.add('comments-active');
        errorMessage.innerText = `Le champs ne peut pas être vide`;
        setTimeout(() => {
            inputMessage.classList.remove('inputError');
            inputMessage.classList.remove('commentError');
            errorMessage.classList.remove('comments-active');
        }, 3000);
    }
    
}

function isEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
} 