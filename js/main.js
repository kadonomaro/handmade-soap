import { parallax } from "./parallax.js";

window.addEventListener('load', function () {
    // parallax('.soap__background');
    

    let bubbleBG = document.querySelector('.header__background-bubble');
    let bubbleBGCurrentStyles = window.getComputedStyle(bubbleBG, null).getPropertyValue('background-position-y').replace(/%/g, '').split(', ');

    window.addEventListener('scroll', shiftBubbleBackground);
    window.addEventListener('scroll',mediaSize);


    function mediaSize() {
        if (window.matchMedia("(max-width: 425px)").matches) {
            window.removeEventListener('scroll', shiftBubbleBackground);
        } else {
            window.addEventListener('scroll', shiftBubbleBackground);
        }
    }

    function shiftBubbleBackground() {

        bubbleBG.style.backgroundPositionY = `${+ bubbleBGCurrentStyles[0] + (window.pageYOffset / 7)}%, 
                                                ${+ bubbleBGCurrentStyles[1] + (window.pageYOffset / 11)}%,
                                                ${+ bubbleBGCurrentStyles[2] + (window.pageYOffset / 7)}%,
                                                ${+ bubbleBGCurrentStyles[3] + (window.pageYOffset / 10)}%,
                                                ${+ bubbleBGCurrentStyles[4] - (window.pageYOffset / 14)}%,
                                                ${+ bubbleBGCurrentStyles[5] + (window.pageYOffset / 8)}%,
                                                ${+ bubbleBGCurrentStyles[6] + (window.pageYOffset / 11)}%,
                                                ${+ bubbleBGCurrentStyles[7] - (window.pageYOffset / 22)}%,
                                                ${+ bubbleBGCurrentStyles[8] + (window.pageYOffset / 9)}%,
                                                ${+ bubbleBGCurrentStyles[9] + (window.pageYOffset / 8)}%,
                                                ${+ bubbleBGCurrentStyles[10] + (window.pageYOffset / 5)}%,
                                                ${+ bubbleBGCurrentStyles[11] + (window.pageYOffset / 8)}%,
                                                ${+ bubbleBGCurrentStyles[12] + (window.pageYOffset / 9)}%,
                                                ${+ bubbleBGCurrentStyles[13] - (window.pageYOffset / 18)}%`;
        
    }




    let headerNav = document.querySelector('.header-nav');
    let headerNavToggle = document.querySelector('.header-nav__toggle');

    headerNavToggle.addEventListener('click', function () {
        toggleClass(headerNav, 'header-nav_hidden');
    });

    function toggleClass(target, className) {
        target.classList.toggle(className);
    }

    let scrollTopButton = document.querySelector('.scroll-top');
    window.addEventListener('scroll', function () {

        if (window.pageYOffset > window.innerHeight) {
            scrollTopButton.classList.add('scroll-top_active');
        } else {
            scrollTopButton.classList.remove('scroll-top_active');
        }
    });

});