import scrollTop from "./modules/scrollTop.js";
import typeWrite from "./modules/typeWrite.js";

document.addEventListener('DOMContentLoaded', function () {

    scrollTop(document.querySelector('.scroll-top'), 'scroll-top--active');

    let blogNavToggle = document.querySelector('.blog-nav__toggle');
    let blogNavList = document.querySelector('.blog-nav__list');
    let blogNavItems = blogNavList.querySelectorAll('.blog-nav__item');


    blogNavToggle.addEventListener('click', function (evt) {
        evt.preventDefault();

        //fade-in animation of nav items
        blogNavItems.forEach((item, index) => {
            item.style.transitionDelay = (index / 5).toFixed(2) + 's';
            
        });
        setTimeout(function () {
            blogNavItems.forEach((item, index) => {
                item.classList.toggle('blog-nav__item--active');
                
                setTimeout(function () {
                    item.style.transitionDelay = '0s';
                },300);
            });
        }, 10);

        if (blogNavList.classList.contains('blog-nav__list--active')) {
            blogNavList.classList.remove('blog-nav__list--active');
            setTimeout(function () {
                blogNavList.style.display = 'none';
            },500);
        } else {
            blogNavList.style.display = 'flex';
            setTimeout(function () {
                blogNavList.classList.add('blog-nav__list--active');
            }, 100);
        }
        
    });


    // let blogHeaderNav = document.querySelector('.blog-header__nav');
    // let blogHeaderNavOffset = blogHeaderNav.offsetTop;
    // window.addEventListener('scroll', function () {

    //     if (window.pageYOffset >= blogHeaderNavOffset) {
    //         blogHeaderNav.classList.add('blog-header__nav--fixed');
    //     } else {
    //         blogHeaderNav.classList.remove('blog-header__nav--fixed');
    //     }
    // });

    // type writting effect for header subtitle
    typeWrite(
        document.querySelector('.blog-header__subtitle').textContent,
        100,
        document.querySelector('.blog-header__subtitle')
    );

    let blogActionButton = document.querySelector('.js-blog-action');

    blogActionButton.addEventListener('click', function () {
        let sections = document.querySelectorAll('section');
        let sectionScrollSettings = {
            behavior: "smooth"
        };
        let scrollSpeed = 2000;

        sections[0].scrollIntoView(sectionScrollSettings);
        setInterval(() => {
            for (let i = 1; i < sections.length; i++) {
                sections[i].scrollIntoView(sectionScrollSettings);
                
            }
        }, scrollSpeed);


    });
    
});