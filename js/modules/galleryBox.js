let galleryBox = {
    
    init: function (images) {
        const galleryOverlay = document.createElement('div');
        const galleryImage = document.createElement('img');
        
        document.addEventListener('click', function (evt) {
            
            images.forEach(image => {
                if (evt.target === image) {
                    console.log(evt.target.src);
                    activateGallery(image)
                }
            });
            
        });


        createGallery();

        function createGallery() {

            galleryOverlay.classList.add('gallery-box');
            galleryImage.classList.add('gallery-box__image');
            document.body.appendChild(galleryOverlay);
            galleryOverlay.appendChild(galleryImage);
        }

        function activateGallery(image) {
            galleryOverlay.classList.add('gallery-box--active');
            galleryImage.src = image.src;
        }
    }


};

export default galleryBox;