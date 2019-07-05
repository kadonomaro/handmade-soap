export default function fadeInAnimation(section, elements, delay, delayStep, className) {
    let scrollOffset;

    if (elements.length) {
        elements.forEach(element => {
            element.style.transitionDelay = delay + 's';
            delay += delayStep;
        });
    }

    window.addEventListener('scroll', animate);

    function animate() {
        scrollOffset = window.pageYOffset + window.innerHeight;
        if (scrollOffset >= (section.offsetTop + 300)) {
            elements.forEach(element => {
                element.classList.add(className);
            });
            window.removeEventListener('scroll', animate);
        }
    }

}

