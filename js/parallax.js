export function parallax (backgroundArr) {
    
    let backgrounds = document.querySelectorAll(backgroundArr);
    document.addEventListener('mousemove', function (evt) {
        let coordX = (evt.clientX / window.innerWidth * 100 - 50).toFixed(0);
        for (let i = 0; i < backgrounds.length; i++) {
            backgrounds[i].style = `transform: translateX(${coordX / backgrounds[i].dataset.divider}%)`;
        }
    })
};

