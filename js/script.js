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