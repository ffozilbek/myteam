// NAVBAR MENU OPEN
const elNav = document.querySelector(".site-header__nav"),
    elNavBar = document.querySelector(".nav__navbar"),
    elBurgerMenu = document.querySelector(".burger-menu");

    if(elBurgerMenu) {
        elBurgerMenu.addEventListener("click", ()=> {
            elNav.classList.toggle("site-header__nav-open")
            elNavBar.classList.toggle("nav__navbar-open");

            // BURGER MENU ANIMATION
            elBurgerMenu.classList.toggle("burger-menu-cross");
        })
    }


// ABOUT CARD OPEN
const elsCart = document.querySelectorAll(".carts__cart");

elsCart.forEach(elCart => {
    const elCartButton = elCart.querySelector(".carts__button");

    elCartButton.addEventListener("click", ()=> {
        elCart.classList.toggle("carts__cart-open");
    })
})

// FORM VALIDATION
const elForm = document.querySelector("#form"),
    elNameInput = elForm.querySelector(".js-input-name"),
    elMailInput = elForm.querySelector(".js-input-mail"),
    elCompanyNameInput = elForm.querySelector(".js-input-compname"),
    elTitleInput = elForm.querySelector(".js-input-title"),
    elTextarea = elForm.querySelector(".js-textarea");

const mail_check = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(elForm) {
        elForm.addEventListener("submit", (e)=> {
            const elNameError = document.querySelector(".name_error");
            const elMailError = document.querySelector(".mail_error");
            const elCompNameError= document.querySelector(".cname_error");
            const elTitleError = document.querySelector(".title_error");
            const elMessageError = document.querySelector(".message_error");


            if(elNameInput.value === "" || elNameInput.value == null) {
                e.preventDefault();
                elNameError.innerHTML = "This field is required";
                elNameInput.classList.add("required");
            } else {
                elNameError.innerHTML = "";
                elNameInput.classList.add("verified-field");
            }

            if(!elMailInput.value.match(mail_check)) {
                e.preventDefault();
                elMailError.innerHTML = "This field is required";
                elMailInput.classList.add("required");
            } else {
                elMailError.innerHTML = "";
                elMailInput.classList.add("verified-field");
            }

            if(elCompanyNameInput.value === "" || elCompanyNameInput.value == null) {
                e.preventDefault();
                elCompNameError.innerHTML = "This field is required";
                elCompanyNameInput.classList.add("required");
            } else {
                elCompNameError.innerHTML = "";
                elCompanyNameInput.classList.add("verified-field");
            }

            if(elTitleInput.value === "" || elTitleInput.value == null) {
                e.preventDefault();
                elTitleError.innerHTML = "This field is required";
                elTitleInput.classList.add("required");
            } else {
                elTitleError.innerHTML = "";
                elTitleInput.classList.add("verified-field");
            }

            if(elTextarea.value === "" || elTextarea.value == null) {
                e.preventDefault();
                elMessageError.innerHTML = "This field is required";
                elTextarea.classList.add("required");
            } else {
                elMessageError.innerHTML = "";
                elTextarea.classList.add("verified-field");
            }
        })
    }