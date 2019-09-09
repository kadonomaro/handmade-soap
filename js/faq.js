import scrollTop from "./modules/scrollTop.js";
import navigation from "./modules/navigation.js";
import accordion from "./modules/accordion.js";

document.addEventListener('DOMContentLoaded', function () {

    scrollTop(document.querySelector('.scroll-top'), 'scroll-top--active');
    navigation();
    accordion(document.querySelector('.accordion'));
});