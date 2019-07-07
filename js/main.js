import detectSwipeDirection from "./detectSwipeDirection.js";
import scrollTop from "./modules/scrollTop.js";
import fadeInAnimation from "./modules/fadeInAnimation.js";



document.addEventListener('DOMContentLoaded', function () {
    
    scrollTop(document.querySelector('.scroll-top'), 'scroll-top--active');
    

    //get css styles for background position
    let headerBackground = document.querySelector('.header__background-bubble');
    let headerBackgroundCurrentStyle = window.getComputedStyle(headerBackground, null)
        .getPropertyValue('background-position-y')
        .replace(/%/g, '')
        .split(', ');


    //animation for header background on first screen and device more than 600px screen
    window.addEventListener('scroll', function () {
        if (window.pageYOffset <= headerBackground.clientHeight && window.matchMedia('(min-width: 600px)').matches) {
            window.addEventListener('scroll', animateBackground);
        } else {
            window.removeEventListener('scroll', animateBackground);
        }
    });


    // floating bubbles animation
    function animateBackground() {

        let shiftDivider = [7, 11, 7, 10, 14, 8, 11, 22, 9, 8, 5, 8, 9, 18];
        let newBackgroundPosition = headerBackgroundCurrentStyle.map(function (item, index) {
            return (+item + window.pageYOffset / shiftDivider[index]).toFixed(2) + '%';
        });
        
        headerBackground.style.backgroundPositionY = newBackgroundPosition;
    }


    // open/close navigation
    let headerNav = document.querySelector('.header-nav');
    let headerNavToggle = document.querySelector('.header-nav__toggle');

    headerNavToggle.addEventListener('click', function () {
        // toggleClass(headerNav, 'header-nav_hidden');
        headerNav.classList.toggle('header-nav--hidden');
    });


    // swipe detection and close navigation by swipe
    detectSwipeDirection(headerNav, 'header-nav--hidden','left');

    
    function toggleClass(target, className) {
        target.classList.toggle(className);
    }


    //active or hidden button for scroll page to top
    let scrollTopButton = document.querySelector('.scroll-top');
    window.addEventListener('scroll', function () {

        if (window.pageYOffset > window.innerHeight) {
            scrollTopButton.classList.add('scroll-top_active');
        } else {
            scrollTopButton.classList.remove('scroll-top_active');
        }
    });


    fadeInAnimation(
        document.querySelector('.features'),
        document.querySelectorAll('.feature'),
        0.5,
        0.3,
        'feature--visible'
    );


    // show/hide ingredients in soap section
    let soapCardButton = document.querySelectorAll('.soap-card__button');

    soapCardButton.forEach(button => {
        button.addEventListener('click', function (evt) {
            evt.preventDefault();
            button.nextElementSibling.classList.toggle('soap-card__ingredients_active');
        });
    });


});