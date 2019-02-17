// import detectSwipeDirection from "./detectSwipeDirection.js";


window.addEventListener('load', function () {

    let bubbleBG = document.querySelector('.header__background-bubble');
    let bubbleBGCurrentStyles = window.getComputedStyle(bubbleBG, null).getPropertyValue('background-position-y').replace(/%/g, '').split(', ');

    window.addEventListener('scroll', shiftBubbleBackground);
    window.addEventListener('scroll',mediaSize);


    function mediaSize() {
        if (window.matchMedia("(max-width: 425px)").matches) {
            window.removeEventListener('scroll', shiftBubbleBackground);
        } else {
            window.addEventListener('scroll', shiftBubbleBackground);
        }
    }

    function shiftBubbleBackground() {

        bubbleBG.style.backgroundPositionY = `${+ bubbleBGCurrentStyles[0] + (window.pageYOffset / 7)}%, 
                                                ${+ bubbleBGCurrentStyles[1] + (window.pageYOffset / 11)}%,
                                                ${+ bubbleBGCurrentStyles[2] + (window.pageYOffset / 7)}%,
                                                ${+ bubbleBGCurrentStyles[3] + (window.pageYOffset / 10)}%,
                                                ${+ bubbleBGCurrentStyles[4] - (window.pageYOffset / 14)}%,
                                                ${+ bubbleBGCurrentStyles[5] + (window.pageYOffset / 8)}%,
                                                ${+ bubbleBGCurrentStyles[6] + (window.pageYOffset / 11)}%,
                                                ${+ bubbleBGCurrentStyles[7] - (window.pageYOffset / 22)}%,
                                                ${+ bubbleBGCurrentStyles[8] + (window.pageYOffset / 9)}%,
                                                ${+ bubbleBGCurrentStyles[9] + (window.pageYOffset / 8)}%,
                                                ${+ bubbleBGCurrentStyles[10] + (window.pageYOffset / 5)}%,
                                                ${+ bubbleBGCurrentStyles[11] + (window.pageYOffset / 8)}%,
                                                ${+ bubbleBGCurrentStyles[12] + (window.pageYOffset / 9)}%,
                                                ${+ bubbleBGCurrentStyles[13] - (window.pageYOffset / 18)}%`;
        
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