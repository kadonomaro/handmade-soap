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
            slideSpeed: 300,
            easing: 'ease-in'
        };
        const galleryOverlay = document.createElement('div');
        let focusedElement;

        //duplicate HTMLCollection for array map function
        let imagesArr = [...images];

        
        document.addEventListener('click', function (evt) {
            images.forEach((image, index) => {
                if (evt.target === image) {
                    activateGallery(image, index);
                }
            });
        });


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

            
            galleryOverlay.innerHTML += `
                <button class="gallery-box__close"></button>
                
                <div class="gallery-box__nav">
                    <button class="gallery-box__prev" aria-label="gallery prev"></button>    
                    <button class="gallery-box__next" aria-label="gallery next"></button>
                </div>

                <div class="gallery-box__wrapper" style="width:${images[0].naturalWidth}px; height:${images[0].naturalHeight}px">
                    <div class="gallery-box__track" style="width:${images[0].naturalWidth * images.length}px; height:${images[0].naturalHeight}px">
                        


                        ${imagesArr.map((image, index) => {
                            return `
                            <div class="gallery-box__slide" style="transform: translateX(${index * image.naturalWidth}px)">
                                <img class="gallery-box__image" src="${image.src}" alt="${image.getAttribute('alt')}">
                            </div>
                        `;
                        }).join('')}
                    </div>
                </div>
                <span class="gallery-box__index"></span>
            `;

            document.body.appendChild(galleryOverlay);
        })();


        function activateGallery(image, index) {
            const galleryTrack = galleryOverlay.querySelector('.gallery-box__track');
            const galleryCloseButton = galleryOverlay.querySelector('.gallery-box__close');
            const galleryPrev = galleryOverlay.querySelector('.gallery-box__prev');
            const galleryNext = galleryOverlay.querySelector('.gallery-box__next');
            const galleryImageIndex = galleryOverlay.querySelector('.gallery-box__index');
            focusedElement = image;

            galleryTrack.style.transition = `transform ${settings.slideSpeed}ms`;
            galleryTrack.style.transform = `translateX(-${image.naturalWidth * index}px)`;


            galleryOverlay.classList.add('gallery-box--active');
            setTimeout(() => {
                galleryOverlay.style.opacity = 1;
            }, 50);

            if (settings.imageIndex) {
                galleryImageIndex.textContent = `${index + 1} / ${images.length}`;
            }
            

            galleryNavigation(galleryPrev, galleryNext, galleryTrack, index, galleryImageIndex);

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

        function galleryNavigation(prev, next, track, imageIndex, imageIndexElement) {
            let counter = imageIndex || 0;
            console.log('start: ', counter + 1);
            

            prev.addEventListener('click', function () {
                if (counter >= 1) {
                    counter--;
                    track.style.transform = `translateX(-${images[0].naturalWidth * counter}px)`;
                    imageIndexElement.textContent = `${counter + 1} / ${images.length}`;
                    console.log('prev: ', counter+1);
                }
            });

            next.addEventListener('click', function () {
                if (counter < images.length-1) {
                    counter++;
                    track.style.transform = `translateX(-${images[0].naturalWidth * counter}px)`;
                    imageIndexElement.textContent = `${counter + 1} / ${images.length}`;
                    console.log('next: ', counter+1);
                }
            });
        }

    }


};

export default galleryBox;