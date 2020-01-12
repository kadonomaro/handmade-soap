export default function modal(id) {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = modalOverlay.querySelector('#' + id);
    const modalClose = modal.querySelector('.js-close-modal');

    modalOverlay.classList.add('modal-overlay--active');
    modal.classList.add('modal--active');
    modalClose.addEventListener('click', closeModal);

    function closeModal() {
        modalOverlay.classList.remove('modal-overlay--active');
        modal.classList.remove('modal--active');
        modalClose.removeEventListener('click', closeModal);
    }

}

