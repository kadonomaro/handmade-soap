export default function detectSwipeDirection(targetObject) {

    let direction, initialX, initialY, currentX, currentY, diffX, diffY;

    targetObject.addEventListener('touchstart', function (evt) {
        startTouch(evt);
    });

    targetObject.addEventListener('touchmove', function diff (evt) {
        endTouch(evt);
        diffX = initialX - currentX;
        diffY = initialY - currentY;
        console.log(diffX, diffY);
        return { diffX, diffY };
    });

    function startTouch(evt) {
        initialX = evt.touches[0].clientX;
        initialY = evt.touches[0].clientY;
        return { initialX, initialY };
    }

    function endTouch(evt) {
        currentX = evt.touches[0].clientX;
        currentY = evt.touches[0].clientY;
        return { currentX, currentY };
    }


    console.log('diffX: ', diffX);
    console.log('diffY:', diffY);


    if (diffX > 0) {
        direction = 'left';
    } else if (diffX < 0) {
        direction = 'right';
    } else if (diffY > 0) {
        direction = 'up';
    } else {
        direction = 'down';
    }




}