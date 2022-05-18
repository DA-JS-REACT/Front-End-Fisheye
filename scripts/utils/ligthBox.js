
import { MediaFactory } from '../factories/MediaFactory.js';

class LigthBox {



    initializeModal(photographer,media,divImg){
        const link = document.querySelectorAll('.card-link');
        link.forEach((img) => img.addEventListener('click',this.launchLigthBox));
        link.forEach((img) => img.addEventListener('click',(evt) => {
            this.handleSliderClick(evt,photographer,media,divImg);

        } ));

        const modalClose = document.querySelector('.close-ligthbox');
        modalClose.addEventListener('click', this.closeLigthBox);
        const body = document.querySelector('body');
        body.addEventListener('keydown', this.handleKeyBoard);


    }
    handleKeyBoard(event) {
        console.log(event);
    }
    launchLigthBox() {
        const modal = document.getElementById('ligthbox');
        const main = document.getElementById('main');
        const footer = document.querySelector('.photograph-footer');
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        main.setAttribute('aria-hidden', 'true');
        footer.setAttribute('aria-hidden', 'true');
    }

    closeLigthBox() {
        const modal = document.getElementById('ligthbox');
        const main = document.getElementById('main');
        const footer = document.querySelector('.photograph-footer');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        main.setAttribute('aria-hidden', 'false');
        footer.setAttribute('aria-hidden', 'false');
    }

    /**
     *
     * @param {event} evt
     * @param {array} photographer
     * @param {array} media
     * @param {HtmlElement} divImg
     */
    handleSliderClick(evt,photographer,media,divImg){

        const element = evt.currentTarget;


        const nextElement = element.nextElementSibling;
        const idElement = nextElement.querySelector('.counter');
        // retrieves id from the element
        const id = parseInt(idElement.getAttribute('id'));
        // retrieves current index from the element with id
        let  index  = media.findIndex((element) => element.id === id);

        this.typeOfMedia(photographer,media[index],divImg);
        // retrieves parent element
        const parentElement = divImg.closest('.slide');
        const prev = parentElement.querySelector('.previous');
        const next = parentElement.querySelector('.next');

        prev.addEventListener('click',() => {
            // count number of media
            const numberOfSlides = media.length;

            if ( index <= numberOfSlides - 1 && index > 0 ){
                index --;
            }
            else {
                index = numberOfSlides -1 ;
            }
            this.typeOfMedia(photographer,media[index],divImg);


        });
        next.addEventListener('click',() => {

            const numberOfSlides = media.length;

            if ( index < numberOfSlides -1 ){
                index ++;
            }else {
                index = 0;
            }
            this.typeOfMedia(photographer,media[index],divImg);

        });


    }
    /**
     *
     * @param {number} index
     * @param {array} media
     * @param {array} photographer
     * @param {HtmlElement} divImg
     */
    next(index,media,photographer,divImg) {
        const numberOfSlides = media.length;

        if ( index < numberOfSlides -1 ){
            index ++;
        }else {
            index = 0;
        }
        this.typeOfMedia(photographer,media[index],divImg);

    }


    /**
     *
     * @param {array} photographer
     * @param {array} media
     * @param {HtmlElement} divImg
     */
    typeOfMedia(photographer,media,divImg){

        const medias = new MediaFactory(media).displayMedia(photographer,{hasControl:true});

        if(divImg.hasChildNodes('img') || divImg.hasChildNodes('video')){
            const old = divImg.firstChild;
            divImg.replaceChild(medias,old);
        }else {
            divImg.appendChild(medias);
        }

    }

    displayLigthBox() {
        const bodyElement = document.querySelector('body');
        const modal = document.createElement('div');
        modal.setAttribute('id', 'ligthbox');
        modal.setAttribute('aria-hidden', 'true');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelleby','modalLighbox');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('tabindex', '1');

        const title = document.createElement('title');
        title.classList.add('sr-only');
        title.setAttribute('id', 'modalLighbox');
        title.textContent ='Carousel des images et video du photographe';
        modal.appendChild(title);

        //create container element
        const div = document.createElement('div');
        div.classList.add('modal-ligthbox');
        div.setAttribute('role','document');

        const header = document.createElement('div');
        header.classList.add('modal-ligthbox__header');

        const slider = document.createElement('div');
        slider.classList.add('modal-ligthbox__slider','slide');


        // create div for next button
        const divNext = document.createElement('div');
        divNext.classList.add('slide__next');

        //create div for previous button
        const divPrev = document.createElement('div');
        divPrev.classList.add('slide__prev');

        //create div for img
        const divImg = document.createElement('div');
        divImg.classList.add('slide__img');

        slider.appendChild(divPrev);
        slider.appendChild(divImg);
        slider.appendChild(divNext);
        div.appendChild(header);
        div.appendChild(slider);

        //create button for  previous

        const buttonPrev = document.createElement('button');
        buttonPrev.classList.add('previous');
        buttonPrev.setAttribute('type', 'button');
        buttonPrev.setAttribute('aria-label', 'previous');
        buttonPrev.setAttribute('aria-describedby', 'previous-modal');
        buttonPrev.setAttribute('title', 'previous');
        const iElementPrev = document.createElement( 'i');
        iElementPrev.classList.add('fa-solid', 'fa-chevron-left','fa-4x');
        iElementPrev.setAttribute('title', 'previous');

        buttonPrev.appendChild( iElementPrev );
        divPrev.appendChild(buttonPrev);
      
        const smallPrev = document.createElement('small');
        smallPrev.classList.add('sr-only');
        smallPrev.setAttribute('id','previous-modal');
        smallPrev.textContent = 'Previous';


        divPrev.appendChild(smallPrev);

        //create button for close modal
        const buttonClose = document.createElement('button');
        buttonClose.classList.add('close-ligthbox');
        buttonClose.setAttribute('type', 'button');
        buttonClose.setAttribute('aria-label', 'Close');
        buttonClose.setAttribute('aria-describedby', 'close-modal');
        buttonClose.setAttribute('title', 'Close');


        const closeElement = document.createElement('i');
        closeElement.classList.add('fa-solid' ,'fa-xmark','fa-4x');

        const smallClose = document.createElement('small');
        smallClose.setAttribute('id','close-modal');
        smallClose.textContent = 'fermer la modal';

        smallClose.classList.add('sr-only');

        buttonClose.appendChild(closeElement);
        header.appendChild(buttonClose);
        header.appendChild(smallClose);


        //create button for  next

        const buttonNext = document.createElement('button');
        buttonNext.classList.add('next');

        buttonNext.setAttribute('type', 'button');
        buttonNext.setAttribute('aria-label', 'next');
        buttonNext.setAttribute('aria-describedby', 'next-modal');
        buttonNext.setAttribute('title', 'next');

        const iElementNext = document.createElement( 'i');
        iElementNext.classList.add('fa-solid', 'fa-chevron-right','fa-4x');
        const smallNext = document.createElement('small');
        smallNext.classList.add('sr-only');
        smallNext.setAttribute('id','next-modal');
        smallNext.textContent = 'next';


        buttonNext.appendChild(iElementNext);
        divNext.appendChild(buttonNext);
        divNext.appendChild(smallNext);

        modal.appendChild(div);
        bodyElement.appendChild(modal);
    }

}
export {LigthBox};