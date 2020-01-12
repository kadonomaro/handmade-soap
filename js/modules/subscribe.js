import modal from "./modal.js";

export default function subscribe() {
    const subscribeButton = document.querySelector('.js-subscribe-button');
    const subscribeEmail = document.querySelector('.js-subsribe-email');

    subscribeButton.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (subscribeEmail.validity.valid) {
            modal(this.dataset.target);
        }
    });
}