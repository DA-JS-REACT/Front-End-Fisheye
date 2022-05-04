
import { MediaFactory } from '../factories/MediaFactory.js';

class LigthBox {



    initializeModal(photographer,media,divImg){
        const link = document.querySelectorAll('.card-link');
        link.forEach((img) => img.addEventListener('click',this.launchLigthBox));
        link.forEach((img) => img.addEventListener('click',(evt) => {
            this.test(evt,photographer,media,divImg);

        } ));

        const modalClose = document.querySelector('#close-ligthbox');
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
        const tab =[];
        const next = element.nextElementSibling;
        const idElement = next.querySelector('.counter');
        const id = parseInt(idElement.getAttribute('id'));
        const medias = media.find(test => test.id === id);
        tab.push(medias);
        console.log(tab);
        const toto =  tab.map(function(e) { return e.id; }).indexOf(id);
        console.log(toto);
        if (element){
            this.typeOfMedia(photographer,tab[0],divImg);
        }


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
        console.log(divImg.hasChildNodes('img'));


    }

    displayLigthBox() {
        const bodyElement = document.querySelector('body');
        const modal = document.createElement('div');
        modal.setAttribute('id', 'ligthbox');

        //create container element
        const div = document.createElement('div');
        div.classList.add('modal-ligthbox');

        // create div for next button
        const divNext = document.createElement('div');
        divNext.classList.add('modal-ligthbox__next');

        //create div for previous button
        const divPrev = document.createElement('div');
        divPrev.classList.add('modal-ligthbox__prev');

        //create div for img
        const divImg = document.createElement('div');
        divImg.classList.add('modal-ligthbox__img');
        div.appendChild(divPrev);
        div.appendChild(divImg);
        div.appendChild(divNext);

        //create button for close modal
        const closeElement = document.createElement('img');
        closeElement.classList.add('close-ligthbox');
        closeElement.setAttribute('id','close-ligthbox');
        closeElement.setAttribute('src','assets/icons/close.svg');

        divNext.appendChild(closeElement);

        modal.appendChild(div);
        bodyElement.appendChild(modal);
    }

}
export {LigthBox};