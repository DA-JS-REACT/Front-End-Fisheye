import {ImageFactory} from '../factories/ImageFactory.js';
import{VideoFactory} from '../factories/VideoFactory.js';

class ligthBox {



    initializeModal(){
        const link = document.querySelectorAll('.card-link');
        link.forEach((img) => img.addEventListener('click',this.launchLigthBox));
        link.forEach((img) => img.addEventListener('click',this.test));

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

    displayLigthBox(photographer,media) {

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
        closeElement.setAttribute('src','assets/icons/close.svg');

        divNext.appendChild(closeElement);


        if(media.video){
            const video = new VideoFactory(this.video,this.title,this.likes,this.date);
            const divElement = video.displayVideo(photographer);
            divImg.appendChild(divElement);
        } else if (media.image){
            const img = new ImageFactory(this.image,this.title,this.likes,this.date);
            const divElement = img.displayImage(photographer);
            divImg.appendChild(divElement);
        }

        //!  only test
        const h1 =  document.createElement('h1');
        h1.textContent = media.id;
        divImg.appendChild(h1);

        modal.appendChild(div);
        bodyElement.appendChild(modal);
    }

    test(evt){

        const element = evt.currentTarget;
        console.log(element);

        const next = element.nextElementSibling;
        const idElement = next.querySelector('.counter');
        const id = parseInt(idElement.getAttribute('id'));
        console.log(id);


    }


}
export {ligthBox};