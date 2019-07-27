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
        let focusedElement;

        let imagesArr = [];
        images.forEach(image => {
            imagesArr.push(image);
        });


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


            // if (settings.imageIndex) {
            //     galleryImageIndex.classList.add('gallery-box__index');
            //     galleryOverlay.appendChild(galleryImageIndex);
            // }

            
            galleryOverlay.innerHTML += `
                <button class="gallery-box__button"></button>
                
                <div class="gallery-box__nav">
                    <button class="gallery-box__prev">Prev</button>    
                    <button class="gallery-box__next">Next</button>
                </div>

                <div class="gallery-box__wrapper" style="width:${images[0].naturalWidth}px; height:${images[0].naturalHeight}px">
                    <div class="gallery-box__track" style="width:${images[0].naturalWidth * 10}px; height:${images[0].naturalHeight}px">
                        
                        ${imagesArr.map((image,index) => {
                            return `
                                <div class="gallery-box__slide" style="transform: translateX(${index * image.naturalWidth}px)">
                                    <img class="gallery-box__image" src="${image.src}" alt="${image.getAttribute('alt')}">
                                </div>
                            `;
                        })}
                    </div>    
                </div>
            `;

            document.body.appendChild(galleryOverlay);

            
        })();


        function activateGallery(image, index) {
            const galleryTrack = galleryOverlay.querySelector('.gallery-box__track');
            const galleryCloseButton = galleryOverlay.querySelector('.gallery-box__button');
            const galleryPrev = galleryOverlay.querySelector('.gallery-box__prev');
            const galleryNext = galleryOverlay.querySelector('.gallery-box__next');
            focusedElement = image;
            galleryOverlay.classList.add('gallery-box--active');
            setTimeout(() => {
                galleryOverlay.style.opacity = 1;
            }, 50);

            // galleryImageIndex.textContent = `${index + 1} / ${images.length}`;

            galleryNavigation(galleryPrev, galleryNext, galleryTrack);

            galleryCloseButton.focus();
            galleryCloseButton.addEventListener('click', deactivateGallery);
            document.addEventListener('keyup', deactivateGallery);
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

        function galleryNavigation(prev, next, track) {
            let counterPrev = 1;
            let counterNext = 1;
            let counter = 1;
            prev.addEventListener('click', function () {
                track.style.transform = `translateX(${images[0].naturalWidth * counter}px)`;
                counter--;
            });
            next.addEventListener('click', function () {
                track.style.transform = `translateX(-${images[0].naturalWidth * counter}px)`;
                counter++;
            });
        }

    }


};

export default galleryBox;