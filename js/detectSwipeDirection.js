// swipe detection and close navigation by swipe
    /**
     * 
     * @param {HTMLElement} targetElement 
     * @param {string} className
     * @param {boolean} logDirection
     */
    export default function detectSwipeDirection(targetElement, className, logDirection = false) {

        let swipe = {
            direction: '',
            initialX: 0,
            initialY: 0,
            currentX: 0,
            currentY: 0,
            diffX: 0,
            diffY: 0,
            startTouch: function (evt) {
                this.initialX = evt.touches[0].clientX;
                this.initialY = evt.touches[0].clientY;
            },
            moveTouch: function (evt) {
                this.currentX = evt.touches[0].clientX;
                this.currentY = evt.touches[0].clientY;
                this.diffX = this.initialX - this.currentX;
                this.diffY = this.initialY - this.currentY;
        
                if (this.diffX > 0) {
                    this.direction = 'left';
                    targetElement.classList.add(className);
                } else if (this.diffX < 0) {
                    this.direction = 'right';
                } else if (this.diffY > 0) {
                    this.direction = 'up';
                } else {
                    this.direction = 'down';
                }

                if (logDirection) {
                    console.log(this.direction);
                }
            }
        };

        targetElement.addEventListener('touchstart', swipe.startTouch, false);
        targetElement.addEventListener('touchmove', swipe.moveTouch, false);


    }