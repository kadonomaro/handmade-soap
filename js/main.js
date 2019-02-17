// import detectSwipeDirection from "./detectSwipeDirection.js";


window.addEventListener('load', function () {

    let headerBackground = document.querySelector('.header__background-bubble');
    let headerBackgroundCurrentStyle = window.getComputedStyle(headerBackground, null).getPropertyValue('background-position-y').replace(/%/g, '').split(', ');


    window.addEventListener('scroll', animateBackground);
    window.addEventListener('scroll',changeMediaSize);


    function changeMediaSize() {
        if (window.matchMedia("(max-width: 425px)").matches) {
            window.removeEventListener('scroll', animateBackground);
        } else {
            window.addEventListener('scroll', animateBackground);
        }
    }

    
    // floating bubbles animation
    function animateBackground() {

        let shiftDivider = [7, 11, 7, 10, 14, 8, 11, 22, 9, 8, 5, 8, 9, 18];
        let newBackgroundPosition = headerBackgroundCurrentStyle.map(function (item, index) {
            return (+item + window.pageYOffset / shiftDivider[index]).toFixed(2) + '%';
        });
        headerBackground.style.backgroundPositionY = newBackgroundPosition;
    }
    

    let headerNav = document.querySelector('.header-nav');
    let headerNavToggle = document.querySelector('.header-nav__toggle');

    headerNavToggle.addEventListener('click', function () {
        toggleClass(headerNav, 'header-nav_hidden');
    });

    // swipe detection 
    var direction, initialX, initialY, currentX, currentY, diffX, diffY;

    headerNav.addEventListener('touchstart', startTouch,false);

    headerNav.addEventListener('touchmove', moveTouch, false);

    function startTouch(evt) {
        initialX = evt.touches[0].clientX;
        initialY = evt.touches[0].clientY;
    }

    function moveTouch(evt) {
        currentX = evt.touches[0].clientX;
        currentY = evt.touches[0].clientY;
        diffX = initialX - currentX;
        diffY = initialY - currentY;

        if (diffX > 0) {
            direction = 'left';
            headerNav.classList.add('header-nav_hidden');

        } else if (diffX < 0) {
            direction = 'right';
        } else if (diffY > 0) {
            direction = 'up';
        } else {
            direction = 'down';
        }
        
    }


    function toggleClass(target, className) {
        target.classList.toggle(className);
    }

    //active /hidden button for scroll page to top
    let scrollTopButton = document.querySelector('.scroll-top');
    window.addEventListener('scroll', function () {

        if (window.pageYOffset > window.innerHeight) {
            scrollTopButton.classList.add('scroll-top_active');
        } else {
            scrollTopButton.classList.remove('scroll-top_active');
        }
    });

});