
const ModalForm = {

    init () {
        const modalLaunch = document.querySelector('.contact_button ');
        console.log(modalLaunch);
        modalLaunch.addEventListener('click', ModalForm.displayModal);
        const modalClose = document.querySelector('.close');
        modalClose.addEventListener('click', ModalForm.closeModal);
    },

    displayModal:function () {
        console.log('click');
        const modal = document.getElementById('contact_modal');
        console.log(modal);
        modal.style.display = 'block';
    },

    closeModal:function() {
        const modal = document.getElementById('contact_modal');
        modal.style.display = 'none';
    },

};


document.addEventListener('DOMContentLoaded', ModalForm.init);


