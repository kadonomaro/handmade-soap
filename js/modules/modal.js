export default function modal(id) {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = modalOverlay.querySelector('#' + id);
    const modalClose = modal.querySelector('.js-close-modal');

    modalOverlay.classList.add('modal-overlay--active');
    modal.classList.add('modal--active');
    document.body.classList.add('page--modal-open');
    
    modalClose.focus();
    modalOverlay.addEventListener('click', closeModal);

    function closeModal(evt) {
        if (evt.target === modalOverlay || evt.target === modalClose) {
            modalOverlay.classList.remove('modal-overlay--active');
            modal.classList.remove('modal--active');
            document.body.classList.remove('page--modal-open');
            modalOverlay.removeEventListener('click', closeModal);
        }
    }

}

//Доделать визуал у модалки.
//При успешной подписке менять стиль блока, без возможности подписки, запись в local storage