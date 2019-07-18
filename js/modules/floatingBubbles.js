export default function floatingBubbles() {
    let canvas = document.querySelector('.js-header-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ctx = canvas.getContext('2d');

    let bubble = new Image();
    bubble.src = '../images/bubbles/bubble.png';

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
        drawImages(evt);
    });

    function drawImages(evt) {
        console.log('X: ', evt.clientX);
        console.log('Y: ', evt.clientY);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(bubble, 220 + evt.clientX/10, 680 + evt.clientY/8,  60,60);
        ctx.drawImage(bubble, 740 + evt.clientX/7, 600 + evt.clientY/9,  60,60);

        ctx.drawImage(bubble, 1400 + evt.clientX/7, 45 + evt.clientY/4,  100,100);
        ctx.drawImage(bubble, 1700 + evt.clientX/10, 220 + evt.clientY/6,  100,100);
        ctx.drawImage(bubble, 1300 + evt.clientX/6, 570 + evt.clientY/10,  100,100);

        ctx.drawImage(bubble, 130 + evt.clientX/8, 90 + evt.clientY/10,  150,150);
        ctx.drawImage(bubble, 700 + evt.clientX/9, 80 + evt.clientY/7, 150,150);
        ctx.drawImage(bubble, 600 + evt.clientX/6, 730 + evt.clientY/4,  150,150);
        ctx.drawImage(bubble, 1300 + evt.clientX/10, 800 + evt.clientY/7,  150,150);
        ctx.drawImage(bubble, 300 + evt.clientX/7, 280 + evt.clientY/8,  150,150);
        
        ctx.drawImage(bubble, 500 + evt.clientX/6, 400 + evt.clientY/9,  225,225);
        ctx.drawImage(bubble, 1175 + evt.clientX/8, 180 + evt.clientY/6,  225,225);
        ctx.drawImage(bubble, 1400 + evt.clientX/10, 400 + evt.clientY/7,  225,225);
    }

    

}