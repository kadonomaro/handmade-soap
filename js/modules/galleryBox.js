let galleryBox = {
    
    init: function (images, settings) {
        const galleryOverlay = document.createElement('div');
        const galleryImage = document.createElement('img');
        const galleryCloseButton = document.createElement('button');
        const galleryImageIndex = document.createElement('span');


        document.addEventListener('click', function (evt) {
            images.forEach((image,index) => {
                if (evt.target === image) {
                    activateGallery(image, index);
                }
            });
        });


        (function createGallery() {
            galleryOverlay.classList.add('gallery-box');
            galleryImage.classList.add('gallery-box__image');
            galleryCloseButton.classList.add('gallery-box__button');
            galleryImageIndex.classList.add('gallery-box__index');  
            document.body.appendChild(galleryOverlay);
            galleryOverlay.appendChild(galleryImage);
            galleryOverlay.appendChild(galleryCloseButton);
            galleryOverlay.appendChild(galleryImageIndex);
        })();


        function activateGallery(image, index) {
            galleryOverlay.classList.add('gallery-box--active');
            setTimeout(() => {
                galleryOverlay.style.opacity = 1;
            }, 50);
            galleryImage.src = image.src;
            galleryImage.setAttribute('alt', image.getAttribute('alt'));
            galleryCloseButton.addEventListener('click', deactivateGallery);
            galleryImageIndex.textContent = `${index + 1} / ${images.length}`;
        }


        function deactivateGallery() {
            galleryOverlay.style.opacity = 0;
            setTimeout(() => {
                galleryOverlay.classList.remove('gallery-box--active');
            }, 300);
        }
    }


};

export default galleryBox;