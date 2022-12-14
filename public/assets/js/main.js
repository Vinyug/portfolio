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


// remplacer Jquery par API FETCH
$(function() {

    $('#contact-form').button(function(e) {
        e.preventDefault();
        $('.comments').empty();
        var postdata = $('#contact-form').serialize();

        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(result) {

                if(result.isSuccess) {
                    $('#contact-form').append("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                    $('#contact-form')[0].reset();
                } else {
                    $("#firstname + .comments").html(result.firstnameError);
                    $("#name + .comments").html(result.nameError);
                    $("#email + .comments").html(result.emailError);
                    $("#phone + .comments").html(result.phoneError);
                    $("#message + .comments").html(result.messageError);
                }
            }
        });
    });

})