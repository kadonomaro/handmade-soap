import modal from "./modal.js";

export default function subscribe() {
    const subscribeButton = document.querySelector('.js-subscribe-button');
    subscribeButton.addEventListener('click', function () {
        modal('modal-thanks'); 
    });
}