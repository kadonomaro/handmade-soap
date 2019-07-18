export default function floatingBubbles() {
    let canvas = document.querySelector('.js-header-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ctx = canvas.getContext('2d');

    let bubble = new Image();
    bubble.src = '../images/bubbles/bubble-3.png';

    bubble.addEventListener('load', function () {
        ctx.drawImage(bubble, 220,680, 60,60);
        ctx.drawImage(bubble, 740,600, 60,60);

        ctx.drawImage(bubble, 1400,45, 100,100);
        ctx.drawImage(bubble, 1700,220, 100,100);
        ctx.drawImage(bubble, 1300,570, 100,100);

        ctx.drawImage(bubble, 130,90, 150,150);
        ctx.drawImage(bubble, 700,80, 150,150);
        ctx.drawImage(bubble, 600,730, 150,150);
        ctx.drawImage(bubble, 1300, 800, 150,150);
        ctx.drawImage(bubble, 300,280, 150,150);
        
        ctx.drawImage(bubble, 500,400, 225,225);
        ctx.drawImage(bubble, 1175,180, 225,225);
        ctx.drawImage(bubble, 1400,400, 225,225);
    });

    canvas.addEventListener('mousemove', function (evt) {
        console.log('X: ', evt.x);
        console.log('Y: ', evt.y);
    });

    

}