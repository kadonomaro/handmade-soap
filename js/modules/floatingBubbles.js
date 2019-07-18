export default function floatingBubbles() {
    let canvas = document.querySelector('.js-header-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ctx = canvas.getContext('2d');

    let bubble1 = new Image();
    bubble1.src = '../images/bubbles/bubble-1.png';

    bubble1.addEventListener('load', function () {
        ctx.drawImage(bubble1, 130, 90);
        ctx.drawImage(bubble1, 700, 80);
        ctx.drawImage(bubble1, 600, 730);
        ctx.drawImage(bubble1, 600, 730);
    });

    

}