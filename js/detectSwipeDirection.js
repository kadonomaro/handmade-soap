export default function detectSwipeDirection(targetObject) {

    var direction, initialX, initialY, currentX, currentY, diffX, diffY;

    targetObject.addEventListener('touchstart', startTouch,false);

    targetObject.addEventListener('touchmove', moveTouch, false);

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
        } else if (diffX < 0) {
            direction = 'right';
        } else if (diffY > 0) {
            direction = 'up';
        } else {
            direction = 'down';
        }
        return direction;
        
    }
    
}