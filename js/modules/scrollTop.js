/**
 * 
 * @param {HTMLElement} scrollTopButton Select the element that will be scroll window to top
 * @param {string} scrollTopButtonClass Active class for scroll button
 */
function scrollTop(scrollTopButton, scrollTopButtonClass) {
    if (scrollTopButton) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > window.innerHeight) {
                scrollTopButton.classList.add(scrollTopButtonClass);
            } else {
                scrollTopButton.classList.remove(scrollTopButtonClass);
            }
        });
    }
}

export default scrollTop;