import scrollTop from "./modules/scrollTop.js";
import navigation from "./modules/navigation.js";

document.addEventListener('DOMContentLoaded', function () {

    scrollTop(document.querySelector('.scroll-top'), 'scroll-top--active');
    navigation();
});