import {StateLikes} from '../models/StateLikes.js';

class LikesService {
    constructor(){
        // cashing in the  a new class
        this.state = new StateLikes();
        this.cashing= new Map();
        this.cashId = this.cashing.set(this.state.id,this.state.check);

    }
    /**
     *
     * @param {array} media
     * @returns {number}
     */
    sumLikes(media) {
        let sum = 0;
        media.forEach(likes => {
            const count = likes.likes;
            sum  += count;
        });
        return sum;
    }
    /**
     *
     * @param {array} media
     */
    countLikes(media){
        //  targets the clicked element
        const clickEvent = document.querySelectorAll('.likes-counter');
        clickEvent.forEach(btn => btn.addEventListener('click',(evt) => {
            this.handleClickLikes(evt,media);
        }));

    }

    handleClickLikes(evt,media){

        const element = evt.currentTarget;
        this.refreshLikes(media,element);

    }

    /**
     *
     * @param {array} media
     * @param {HtmlElement} element
     */
    refreshLikes(media,element) {

        // targets the element that displays the number of likes based on the click
        const nbrLikes = element.previousElementSibling;
        element.classList.toggle('active');


        // get the value of the  number of likes in clicked élément
        let value = parseInt(nbrLikes.textContent);

        // get the value of the total number of likes in the footer
        const footer = document.querySelector('.sum-likes');
        let valueFooter = parseInt(footer.textContent);

        //get the id of the current element
        const id = parseInt(nbrLikes.getAttribute('id'));
        const medias = media.find(Id => Id.id === id);
        //  save id
        this.state.id = id;





        if(element.classList.contains('active')){
            value++;
            valueFooter++;
            this.state.check = true;

        }else {
            value--;
            valueFooter--;
            this.state.check = false;
        }
        this.state.value = value;



        //reinject the incremented value
        nbrLikes.textContent = this.state.value;
        footer.textContent = valueFooter;
        // updates  the media
        medias.likes = this.state.value;
        // tab with Map
        this.cashId = this.cashing.set(this.state.id,this.state.check);
    }
    /**
     *
     * @returns {array}
     */
    dataCashingLikes() {

        for (const [id,value] of this.cashId) {

            if(id){
                if(value === true) {
                    // targets the clicked element
                    const currentElement = document.getElementById(id);
                    // add  class active for memory
                    const beforeElement = currentElement.nextElementSibling;
                    beforeElement.classList.add('active');
                }
            }

        }

    }



}

export {LikesService};