let burger = document.querySelector(".header__burger");
let headerMenu = document.querySelector('.header__list_header__list');
let be


function myBurger() {
    burger.classList.toggle("active");
    headerMenu.classList.toggle("open");
}

burger.addEventListener('click', myBurger);