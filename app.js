const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navbar = document.querySelector('.navbar');
const main=document.querySelector('main');


hamburger.addEventListener('click', () => {
    if (nav.classList.contains('nav-width')) {
        nav.classList.remove('nav-width');
        navbar.classList.remove('navbar-visible');
        main.classList.remove('main-opacity');
        hamburger.classList.remove('hamburger-click');
    }
    else {
        nav.classList.add('nav-width');
        navbar.classList.add('navbar-visible');
        main.classList.add('main-opacity');
        hamburger.classList.add('hamburger-click');
    }

})