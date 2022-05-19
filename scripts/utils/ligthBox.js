
import { MediaFactory } from '../factories/MediaFactory.js';

class LigthBox {



    initializeModal(photographer,media,divImg){

        const header = document.querySelector('.header-page');
        const main = document.getElementById('main');
        const footer = document.querySelector('.photograph-footer');
        const modal = document.getElementById('ligthbox');
        const link = document.querySelectorAll('.card-link');
        link.forEach((img) => img.addEventListener('click',() => {
            this.launchLigthBox(modal,header,main,footer);
        }));
        link.forEach((img) => img.addEventListener('click',(evt) => {
            this.handleSliderClick(evt,photographer,media,divImg);

        } ));
        const modalClose = document.querySelector('.close-ligthbox');
        console.log('1',modalClose.classList.contains('close-ligthbox'));
        modalClose.addEventListener('click',() => {
            this.closeLigthBox(modal,header,main,footer);
        });
        // event for previous click
        const prev = document.querySelector('.previous');
        prev.addEventListener('click', () => {
            this.nextOrprev(media,photographer,divImg,{hasPrev:true});
        });
        // event for next click
        const next = document.querySelector('.next');
        next.addEventListener('click', () => {
            this.nextOrprev(media,photographer,divImg);
        });
        // event for keyboard
        const body = document.querySelector('body');
        body.addEventListener('keydown',(event) => {
            this.handleKeyBoard(event,modal,header,main,footer,photographer,media,divImg);
        });


    }
    handleKeyBoard(event,modal,header,main,footer,photographer,media,divImg) {
        const modalClose = document.querySelector('.close-ligthbox');

        if(modalClose.classList.contains('close-ligthbox')){
            if(event.keyCode === 27) {
                this.closeLigthBox(modal,header,main,footer);
            }else if(event.keyCode === 39){
                this.nextOrprev(media,photographer,divImg);
            }else if(event.keyCode === 37){
                this.nextOrprev(media,photographer,divImg,{hasPrev:true});
            }
        }

    }
    launchLigthBox(modal,header,main,footer) {

        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        header.setAttribute('aria-hidden', 'true');
        main.setAttribute('aria-hidden', 'true');
        footer.setAttribute('aria-hidden', 'true');
    }

    closeLigthBox(modal,header,main,footer) {

        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        header.setAttribute('aria-hidden', 'false');
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
        console.log(index);

        this.typeOfMedia(photographer,media[index],divImg);
        // retrieves parent element
        // const parentElement = divImg.closest('.slide');
        // const prev = parentElement.querySelector('.previous');
        // const next = parentElement.querySelector('.next');

        // prev.addEventListener('click',() => {
        //     // count number of media
        //     const numberOfSlides = media.length;

        //     if ( index <= numberOfSlides - 1 && index > 0 ){
        //         index --;
        //     }
        //     else {
        //         index = numberOfSlides -1 ;
        //     }
        //     this.typeOfMedia(photographer,media[index],divImg);


        // });
        // next.addEventListener('click',() => {

        //     const numberOfSlides = media.length;
        //     console.log(index);

        //     if ( index < numberOfSlides -1 ){
        //         console.log('yes');
        //         index ++;
        //     }else {
        //         index = 0;
        //     }
        //     this.typeOfMedia(photographer,media[index],divImg);

        // });
    }
    // /**
    //  *
    //  * @param {array} media
    //  * @param {array} photographer
    //  * @param {HtmlElement} divImg
    //  */
    // next(media,photographer,divImg) {

    //     const parentElement = divImg.closest('.slide');


    //     const mediaElement = parentElement.querySelector('.card-link__media ');

    //     const test = mediaElement.getAttribute('src');

    //     const path = test.split('/');
    //     let index = '';
    //     // retrieves current index from the element with  name
    //     if(mediaElement.classList.contains('card-link__media--img')){

    //         index  = media.findIndex((element) => element.image === path[4]);

    //     }else {
    //         index  = media.findIndex((element) => element.video === path[4]);
    //     }

    //     const numberOfSlides = media.length;

    //     if ( index < numberOfSlides -1 ){
          
    //         index ++;
    //     }else {
    //         index = 0;
    //     }
    //     this.typeOfMedia(photographer,media[index],divImg);

    // }

    /**
     *
     * @param {array} media
     * @param {array} photographer
     * @param {HtmlElement} divImg
     */
    nextOrprev(media,photographer,divImg,options={}) {

        const parentElement = divImg.closest('.slide');


        const mediaElement = parentElement.querySelector('.card-link__media ');

        const test = mediaElement.getAttribute('src');

        const path = test.split('/');
        let index = '';
        // retrieves current index from the element with  name
        if(mediaElement.classList.contains('card-link__media--img')){

            index  = media.findIndex((element) => element.image === path[4]);

        }else {
            index  = media.findIndex((element) => element.video === path[4]);
        }

        const numberOfSlides = media.length;
        if(options.hasPrev){
            if ( index <= numberOfSlides - 1  && index > 0 ){
                index --;
            }else {
                index = numberOfSlides - 1 ;
            }
        }else {
            if ( index < numberOfSlides -1 ){
                index ++;
            }else {
                index = 0;
            }
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
        modal.setAttribute('tabindex', '-10');

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