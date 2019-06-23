import scrollTop from "./modules/scrollTop.js";

document.addEventListener('DOMContentLoaded', function () {

    scrollTop(document.querySelector('.scroll-top'), 'scroll-top--active');

    let blogHeaderNav = document.querySelector('.blog-header__nav');
    let blogHeaderNavOffset = blogHeaderNav.offsetTop;

    
    window.addEventListener('scroll', function (evt) {

        if (window.pageYOffset >= blogHeaderNavOffset) {
            blogHeaderNav.classList.add('blog-header__nav--fixed');
        } else {
            blogHeaderNav.classList.remove('blog-header__nav--fixed');
        }
    });
    
});