import scrollTop from "./modules/scrollTop.js";

document.addEventListener('DOMContentLoaded', function () {

    scrollTop(document.querySelector('.scroll-top'), 'scroll-top--active');

    let blogNavToggle = document.querySelector('.blog-nav__toggle');
    let blogNavList = document.querySelector('.blog-nav__list');

    blogNavToggle.addEventListener('click', function (evt) {

        if (blogNavList.classList.contains('blog-nav__list--active')) {
            blogNavList.classList.remove('blog-nav__list--active');
            // blogNavList.addEventListener('transitionend', function () {
                
            // });
            setTimeout(function () {
                blogNavList.style.display = 'none';
            },500);
        } else {
            blogNavList.style.display = 'block';
            blogNavList.classList.add('blog-nav__list--active');

        }
        
    });


    let blogHeaderNav = document.querySelector('.blog-header__nav');
    let blogHeaderNavOffset = blogHeaderNav.offsetTop;
    window.addEventListener('scroll', function () {

        if (window.pageYOffset >= blogHeaderNavOffset) {
            blogHeaderNav.classList.add('blog-header__nav--fixed');
        } else {
            blogHeaderNav.classList.remove('blog-header__nav--fixed');
        }
    });
    
});