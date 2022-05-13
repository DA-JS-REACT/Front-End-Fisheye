
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


    }

    launchLigthBox() {
        const modal = document.getElementById('ligthbox');
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }

    closeLigthBox() {
        const modal = document.getElementById('ligthbox');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
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
        const toto = divImg.closest('.slide');
        const prev = toto.querySelector('.previous');
        const next = toto.querySelector('.next');

        prev.addEventListener('click',() => {

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

            //this.next(index,media,photographer,divImg);
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
        modal.setAttribute('aria-describedby','modalLighbox');

        const title = document.createElement('title');
        title.classList.add('sr-only');
        title.setAttribute('id', 'modalLighbox');
        title.textContent ='Carousel des images et video du photographe';
        modal.appendChild(title);

        //create container element
        const div = document.createElement('div');
        div.classList.add('modal-ligthbox');

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


        const iElementPrev = document.createElement( 'i');
        iElementPrev.classList.add('fa-solid', 'fa-chevron-left','fa-3x','previous');
        divPrev.appendChild(iElementPrev);

        //create button for close modal
        const closeElement = document.createElement('i');
        closeElement.classList.add('fa-solid' ,'fa-xmark','fa-3x','close-ligthbox');
        header.appendChild(closeElement);

        const iElementNext = document.createElement( 'i');
        iElementNext.classList.add('fa-solid', 'fa-chevron-right','fa-3x','next');

        divNext.appendChild(iElementNext);

        modal.appendChild(div);
        bodyElement.appendChild(modal);
    }

}
export {LigthBox};