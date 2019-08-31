import detectSwipeDirection from "./detectSwipeDirection.js";
import scrollTop from "./modules/scrollTop.js";
import fadeInAnimation from "./modules/fadeInAnimation.js";
import tabs from "./modules/tabs.js";
import floatingBubbles from "./modules/floatingBubbles.js";
import fadeObserver from "./modules/fadeObserver.js";



document.addEventListener('DOMContentLoaded', function () {
    
    scrollTop(document.querySelector('.scroll-top'), 'scroll-top--active');

    floatingBubbles();
    

    // open/close navigation
    const headerNav = document.querySelector('.header-nav');
    const headerNavToggle = headerNav.querySelector('.header-nav__toggle');

    headerNavToggle.addEventListener('click', function () {
        headerNav.classList.toggle('header-nav--hidden');
    });
    window.addEventListener('scroll', function () {
        if (!headerNav.classList.contains('header-nav--hidden')) {
            headerNav.classList.add('header-nav--hidden');
        }
    });


    // swipe detection and close navigation by swipe
    detectSwipeDirection(headerNav, 'header-nav--hidden','left');

    

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
        'feature--visible',
        300
    );

    
    let soapBaseTabsContainer = document.querySelector('#soap-base');
    let soapAromaTabsContainer = document.querySelector('#soap-aroma');
    let soapOilTabsContainer = document.querySelector('#soap-oil');

    tabs(
        soapBaseTabsContainer.querySelectorAll('.ingredients-types-item'),
        soapBaseTabsContainer.querySelectorAll('.ingredients-types__desc'),
        'ingredients-types-item--active',
        'ingredients-types__desc--active'
    );
    tabs(
        soapAromaTabsContainer.querySelectorAll('.ingredients-types-item'),
        soapAromaTabsContainer.querySelectorAll('.ingredients-types__desc'),
        'ingredients-types-item--active',
        'ingredients-types__desc--active'
    );
    tabs(
        soapOilTabsContainer.querySelectorAll('.ingredients-types-item'),
        soapOilTabsContainer.querySelectorAll('.ingredients-types__desc'),
        'ingredients-types-item--active',
        'ingredients-types__desc--active'
    );


    // show/hide ingredients in soap section
    let soapCardButton = document.querySelectorAll('.soap-card__button');

    soapCardButton.forEach(button => {
        button.addEventListener('click', function (evt) {
            evt.preventDefault();
            button.nextElementSibling.classList.toggle('soap-card__ingredients_active');
        });
    });


    //fade observer
    const fadeItemsParent = document.querySelectorAll('.how-item');
    fadeObserver(fadeItemsParent, 'fade-in', '.how-item__caption, .how-item__image');

});