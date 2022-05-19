
const ModalForm = {

    success: true,

    init () {
        const modalLaunch = document.querySelector('.contact_button ');

        modalLaunch.addEventListener('click', ModalForm.displayModal);
        const modalClose = document.querySelector('.close');
        modalClose.addEventListener('click', ModalForm.closeModal);
        const body = document.querySelector('body');
        body.addEventListener('keydown', ModalForm.handleKeyBoard);

        const form = document.querySelector('.form-contact');

        form.addEventListener('submit', ModalForm.handleSubmit);
        form.addEventListener('change', ModalForm.handleChange);
        ModalForm.displayFieldError(form);

    },
    displayFieldError : function (form) {
        const divElement = form.querySelectorAll('.formData');
        const spanElement = document.createElement('span');
        divElement.forEach((element) => element.appendChild(spanElement.cloneNode(true)));

    },

    displayModal: function () {
        const modal = document.getElementById('contact_modal');
        const main = document.getElementById('main');
        const footer = document.querySelector('.photograph-footer');
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        main.setAttribute('aria-hidden', 'true');
        footer.setAttribute('aria-hidden', 'true');
    },

    closeModal: function() {
        const modal = document.getElementById('contact_modal');
        const main = document.getElementById('main');
        const footer = document.querySelector('.photograph-footer');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        main.setAttribute('aria-hidden', 'flase');
        footer.setAttribute('aria-hidden', 'false');
    },
    /**
     * For submit form
     * @param {*} event 
     * 
     */
    handleSubmit: function(event) {
        event.preventDefault();
        ModalForm.checkField();
        if(ModalForm.success){
            //vide tout les champs
            const inputElement = document.querySelectorAll('input');
            for (let input of inputElement) {
                input.value = '';
            }
            const textareaElement = document.querySelector('#message');
            textareaElement.value = '';
            ModalForm.closeModal();
        }
    },
    handleChange : function (event) {
        event.preventDefault();
        ModalForm.checkField();
    },

    handleKeyBoard : function (event) {
        if(event.keyCode === 27) {
            ModalForm.closeModal();
        }else if(event.keyCode === 13 ){
            ModalForm.handleSubmit(event);

        }
    },
    checkField : function (){
        ModalForm.checkfieldInputText('firstName','il faut au minimun 2 caractères',2);
        ModalForm.checkfieldInputText('lastName','il faut au minimun 2 caractères',2);
        ModalForm.checkfieldInputEmail('email','ce n\'est pas un bon format ');
        ModalForm.checkfieldInputText('message','le message est trop court',10);
    },


    checkIsValid : function(spanElement,texterror,isInvalid)
    {
        const inputElement = spanElement.previousElementSibling;
        if (isInvalid){
            inputElement.setAttribute('aria-invalid','true');
            inputElement.style.border = '2px solid red';
            spanElement.textContent = texterror;
            spanElement.classList.add('data-error');
            ModalForm.success = false;
        }else {
            inputElement.setAttribute('aria-invalid','false');
            inputElement.style.border = '2px solid white';
            spanElement.textContent = '';
            spanElement.classList.remove('data-error');
            ModalForm.success = true;
        }
    },

    checkfieldInputText: function(fieldId,texterror , minlenght)
    {
        // on récupère l'élément  qui nous interesse
        const inputElement = document.getElementById(fieldId);
        // on vérifie que cette valeur est correct au nombre de caratère
        const inputLength = inputElement.value.trim().length;

        const isInvalid = inputLength < minlenght || inputElement.value.trim() === '';
        const spanElement = inputElement.nextElementSibling;
        ModalForm.checkIsValid(spanElement,texterror,isInvalid);
    },

    checkfieldInputEmail: function(fieldId,texterror)
    {
        // on récupère l'élément  qui nous interesse
        const inputElement = document.getElementById(fieldId);
        // condition pour être valide
        let pattern = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/;
        const isInvalid = !pattern.test(inputElement.value.trim()) || inputElement.value.trim() === '';
        const spanElement = inputElement.nextElementSibling;
        ModalForm.checkIsValid(spanElement,texterror,isInvalid);

    },
};


document.addEventListener('DOMContentLoaded', ModalForm.init);


