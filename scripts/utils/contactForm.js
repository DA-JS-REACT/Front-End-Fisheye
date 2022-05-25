import { SetAttributeTabindex } from '../utils/setAttributeTabindex.js';


const ModalForm = {

    success: true,
    header : document.querySelector('.header-page'),
    modal : document.getElementById('contact_modal'),
    main : document.getElementById('main'),
    // update tabindex for priority tabulation
    changeAttribute: new SetAttributeTabindex(),

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
    /**
     *Open modal 
     */
    displayModal: function () {

        ModalForm.modal.style.display = 'block';
        ModalForm.header.setAttribute('aria-hidden', 'true');
        ModalForm.modal.setAttribute('aria-hidden', 'false');
        ModalForm.main.setAttribute('aria-hidden', 'true');
        const footer = document.querySelector('.photograph-footer');
        footer.setAttribute('aria-hidden', 'true');
        ModalForm.changeAttribute.keyboardAttribute(ModalForm.header,ModalForm.main);
    },
    /**
     * Close modal
     */
    closeModal: function() {

        ModalForm.modal.style.display = 'none';
        ModalForm.header.setAttribute('aria-hidden', 'false');
        ModalForm.modal.setAttribute('aria-hidden', 'true');
        ModalForm.main.setAttribute('aria-hidden', 'flase');
        const footer = document.querySelector('.photograph-footer');
        footer.setAttribute('aria-hidden', 'false');
        ModalForm.changeAttribute.keyboardAttribute(ModalForm.header,ModalForm.main,{hasClose:true});
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
    /**
     * Event change
     * @param {*} event 
     */
    handleChange : function (event) {
        event.preventDefault();
        ModalForm.checkField();
    },
    /**
     *Event keyboard
     * @param {*} event 
     */
    handleKeyBoard : function (event) {
        if(event.key === 'Escape') {
            ModalForm.closeModal();
        }else if(event.key === 'Enter'){
            if(event.target.classList.contains('contact_button')){
                ModalForm.displayModal();
            }

            // for validation form
            if(event.target.hasAttribute('type','submit')){
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
            }
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


