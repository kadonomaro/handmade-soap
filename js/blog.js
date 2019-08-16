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



    // type writting effect for header subtitle
    typeWrite(
        document.querySelector('.blog-header__title').textContent,
        100,
        document.querySelector('.blog-header__title')
    );

    //scrolling into every section with interval on click button
    let blogActionButton = document.querySelector('.js-blog-action');
    blogActionButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        let sections = document.querySelectorAll('.blog-article');
        let sectionScrollSettings = {
            behavior: "smooth"
        };
        let scrollSpeed = 2000;
        let sectionCounter = 0;


        sections[sectionCounter].scrollIntoView(sectionScrollSettings);
        sectionCounter++;
        let scrollInterval = setInterval(() => {
            sections[sectionCounter].scrollIntoView(sectionScrollSettings);
            sectionCounter++;
            if (sectionCounter >= sections.length) {
                setTimeout(() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    this.classList.add('blog-header__button--hidden');
                    this.addEventListener('transitionend', () => {
                        this.style.display = 'none';
                    });
                }, scrollSpeed);

                clearInterval(scrollInterval);
            }
        }, scrollSpeed);

        window.addEventListener('mousedown', userActionHandler);
        window.addEventListener('touchstart', userActionHandler);
        window.addEventListener('mousewheel', userActionHandler);
        window.addEventListener('keydown', userActionHandler);

        function userActionHandler() {
            clearInterval(scrollInterval);
            window.removeEventListener('mousedown', userActionHandler);
            window.removeEventListener('touchstart', userActionHandler);
            window.removeEventListener('mousewheel', userActionHandler);
            window.removeEventListener('keydown', userActionHandler);
        }
    });
    
    
});