export default function fadeObserver(elements, className) {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    function callback(items) {
        items.forEach(item => {
            if (item.intersectionRatio > 0) {
                item.target.classList.add(className);
            }
        });
    }

    let observer = new IntersectionObserver(callback, options);


    elements.forEach(element => {
        observer.observe(element);
    });
    
}
