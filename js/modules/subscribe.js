import modal from "./modal.js";

export default function subscribe() {

    const subscribeBlock = document.querySelector('.subscribe');
    const subscribeButton = subscribeBlock.querySelector('.js-subscribe-button');
    const subscribeEmail = subscribeBlock.querySelector('.js-subsribe-email');
    const subscribeInvalidText = subscribeBlock.querySelector('.js-subscribe-invalid');

    subscribeButton.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (subscribeEmail.validity.valid) {
            modal(this.dataset.target);
        } else {
            subscribeEmail.classList.add('subscribe__input--invalid');
            subscribeInvalidText.textContent = subscribeEmail.validationMessage;
            setTimeout(() => {
                subscribeEmail.classList.remove('subscribe__input--invalid');
                subscribeInvalidText.textContent = '';
            }, 300000);
        }
    });
}