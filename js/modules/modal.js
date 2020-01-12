export default function modal(id) {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = modalOverlay.querySelector('#' + id);
    modalOverlay.classList.add('modal-overlay--active');
    modal.classList.add('modal--active');
}