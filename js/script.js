// NAVBAR MENU OPEN
const elNav = document.querySelector(".site-header__nav"),
    elNavBar = document.querySelector(".nav__navbar"),
    elBurgerMenu = document.querySelector(".burger-menu");

    if(elBurgerMenu) {
        elBurgerMenu.addEventListener("click", ()=> {
            elNav.classList.toggle("site-header__nav-open")
            elNavBar.classList.toggle("nav__navbar-open");
        })
    }
