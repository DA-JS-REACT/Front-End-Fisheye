
import { MediaFactory } from '../factories/MediaFactory.js';

class LigthBox {



    initializeModal(photographer,media,divImg){
        const link = document.querySelectorAll('.card-link');
        link.forEach((img) => img.addEventListener('click',this.launchLigthBox));
        link.forEach((img) => img.addEventListener('click',(evt) => {
            this.test(evt,photographer,media,divImg);

        } ));

        const modalClose = document.querySelector('.close-ligthbox');
        modalClose.addEventListener('click', this.closeLigthBox);


    }

    launchLigthBox() {
        const modal = document.getElementById('ligthbox');
        modal.style.display = 'block';
    }

    closeLigthBox() {
        const modal = document.getElementById('ligthbox');
        modal.style.display = 'none';
    }
    test(evt,photographer,media,divImg){

        const element = evt.currentTarget;

        const next = element.nextElementSibling;
        const idElement = next.querySelector('.counter');
        const id = parseInt(idElement.getAttribute('id'));
        const  index  = media.findIndex((element) => element.id === id);
        console.log(index);

        this.typeOfMedia(photographer,media[index],divImg);


    }

    typeOfMedia(photographer,media,divImg){

        const img = new MediaFactory(media, 'image').displayMedia(photographer,'img');

        const video = new MediaFactory(media, 'video').displayMedia(photographer,'video');
        if(media.video){
            if(divImg.hasChildNodes('img') || divImg.hasChildNodes('video')){
                const old = divImg.firstChild;
                divImg.replaceChild(video,old);
            }else {
                divImg.appendChild(video);
            }
        } else if (media.image){
            if(divImg.hasChildNodes('img') || divImg.hasChildNodes('video')){
                const old = divImg.firstChild;
                divImg.replaceChild(img,old);
            }else {
                divImg.appendChild(img);
            }


        }
        console.log(media);


    }

    displayLigthBox() {
        const bodyElement = document.querySelector('body');
        const modal = document.createElement('div');
        modal.setAttribute('id', 'ligthbox');

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
        iElementPrev.classList.add('fa-solid', 'fa-chevron-left','fa-3x');
        divPrev.appendChild(iElementPrev);

        //create button for close modal
        const closeElement = document.createElement('i');
        closeElement.classList.add('fa-solid' ,'fa-xmark','fa-3x','close-ligthbox');
        header.appendChild(closeElement);

        const iElementNext = document.createElement( 'i');
        iElementNext.classList.add('fa-solid', 'fa-chevron-right','fa-3x','test');

        divNext.appendChild(iElementNext);

        modal.appendChild(div);
        bodyElement.appendChild(modal);
    }

}
export {LigthBox};