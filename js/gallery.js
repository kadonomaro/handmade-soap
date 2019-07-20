import galleryBox from "./modules/galleryBox.js";
import scrollTop from "./modules/scrollTop.js";
import fadeInAnimation from "./modules/fadeInAnimation.js";

document.addEventListener('DOMContentLoaded', function () {

    scrollTop(document.querySelector('.scroll-top'), 'scroll-top--active');

    //initialization gallery viewer
    galleryBox.init(
        document.querySelectorAll('.gallery-photos__image'),
        {
            imageIndex: true,
            openingSpeed: 300,
            easing: 'ease-in'
        }
    );

    //on sroll fadeIn gallery photos animation
    fadeInAnimation(
        document.querySelector('.gallery'),
        document.querySelectorAll('.gallery-photos__item'),
        0.3,
        0.3,
        'gallery-photos__item--active'
    );
});