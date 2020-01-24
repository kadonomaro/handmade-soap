import modal from "./modal.js";

export default function subscribe() {

    const subscribeBlock = document.querySelector('.subscribe');
    const subscribeButton = subscribeBlock.querySelector('.js-subscribe-button');
    const subscribeEmail = subscribeBlock.querySelector('.js-subscribe-email');
    const subscribeInvalidText = subscribeBlock.querySelector('.js-subscribe-invalid');

    subscribeButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        emailValidation(this);
    });

    function emailValidation(handle) {
        if (subscribeEmail.validity.valid) {
            
            sendData('/test/', subscribeEmail.value)
                .then((responce) => {
                    // responce.json();
                })
                .then((responceData) => {
                    modal(handle.dataset.target);
                    subscribeEmail.value = '';
                    console.log(responceData);
                })
                .catch(err => {
                    console.log(err);
                });
            
        } else {
            handle.disabled = true;
            subscribeEmail.classList.add('subscribe__input--invalid');
            subscribeInvalidText.classList.add('subscribe__info--active');
            subscribeInvalidText.textContent = subscribeEmail.validationMessage;
            setTimeout(() => {
                handle.disabled = false;
                subscribeEmail.classList.remove('subscribe__input--invalid');
                subscribeInvalidText.classList.remove('subscribe__info--active');
            }, 3000);
        }
    }
}

function sendData(url, email) {
    let data = {
        email
    };
    return fetch(url, {
        method: 'POST',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });
}