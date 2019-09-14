import scrollTop from "./modules/scrollTop.js";
import navigation from "./modules/navigation.js";
import accordion from "./modules/accordion.js";

document.addEventListener('DOMContentLoaded', function () {

    const accordionBlock = document.querySelector('.accordion');

    scrollTop(document.querySelector('.scroll-top'), 'scroll-top--active');
    navigation();
    accordion(accordionBlock);

});