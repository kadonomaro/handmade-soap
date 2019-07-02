let galleryBox = {
    
    /**
     * 
     * @param {HTMLElement} images List of image elements
     * @param {Object} settings imageIndex - boolean, openingSpeed - 0-1000, easing - CSS easing
     */
    init: function (images, settings) {
        settings = settings || {
            imageIndex: false,
            openingSpeed: 300,
            easing: 'ease-in'
        };
        const galleryOverlay = document.createElement('div');
        const galleryImage = document.createElement('img');
        const galleryCloseButton = document.createElement('button');
        const galleryImageIndex = document.createElement('span');
        let focusedElement;


        document.addEventListener('click', function (evt) {
            images.forEach((image, index) => {
                if (evt.target === image) {
                    activateGallery(image, index);
                }
            });
        });

        //need to remove duplicate code
        document.addEventListener('keyup', function (evt) {
           images.forEach((image, index) => {
               if (evt.which === 13 && evt.target === image) {
                    activateGallery(image, index);
               }
           });
        });


        (function createGallery() {
            galleryOverlay.classList.add('gallery-box');
            galleryOverlay.style.transition = `opacity ${settings.openingSpeed}ms ${settings.easing}`;
            galleryImage.classList.add('gallery-box__image');
            galleryCloseButton.classList.add('gallery-box__button');

            if (settings.imageIndex) {
                galleryImageIndex.classList.add('gallery-box__index');
                galleryOverlay.appendChild(galleryImageIndex);
            }

            document.body.appendChild(galleryOverlay);
            galleryOverlay.appendChild(galleryImage);
            galleryOverlay.appendChild(galleryCloseButton);
            
        })();


        function activateGallery(image, index) {
            focusedElement = image;
            galleryOverlay.classList.add('gallery-box--active');
            setTimeout(() => {
                galleryOverlay.style.opacity = 1;
            }, 50);
            galleryImage.src = image.src;
            galleryImage.setAttribute('alt', image.getAttribute('alt'));
            galleryCloseButton.focus();
            galleryCloseButton.addEventListener('click', deactivateGallery);
            document.addEventListener('keyup', deactivateGallery);
            galleryImageIndex.textContent = `${index + 1} / ${images.length}`;
        }


        function deactivateGallery(evt) {
            if (evt.which === 27 || evt.type === 'click') {
                galleryOverlay.style.opacity = 0;
                setTimeout(() => {
                    galleryOverlay.classList.remove('gallery-box--active');
                }, settings.openingSpeed);
                document.removeEventListener('keyup', deactivateGallery);
                focusedElement.focus();
            }

        }
    }


};

export default galleryBox;