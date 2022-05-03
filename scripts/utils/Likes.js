import { MediaFactory } from '../factories/MediaFactory.js';

class LikesService {

    constructor() {
        this.media = new MediaFactory(
            this.likes
        );
    }

    SumLikes(media) {
        let sum = 0;
        media.forEach(likes => {
            const count = likes.likes;
            sum  += count;
        });
        return sum;
    }

    countLikes(media){
        // cible l'élément cliquer
        const ClickEvent = document.querySelectorAll('.likes-counter');
        //let bool = false;
        ClickEvent.forEach(btn => btn.addEventListener('click', evt => {

            const element = evt.currentTarget;
            // cible l'élément qui affiche le nombre de likes en fonction du click;
            const nbrLikes = element.previousElementSibling;
            element.classList.add('active');

            //récupére l'id du media courant
            const id = parseInt(nbrLikes.getAttribute('id'));
            // récupére la valeur du nombre de likes
            let value = parseInt(nbrLikes.textContent);
            value  += 1;
            // //réinjecte la valeur incrémenté
            nbrLikes.textContent = value ;
            this.refreshLikes(media,value,id);
            // this.stopCounters(bool,element, value,nbrLikes);

        }));


    }


    refreshLikes(media,value,id) {



        const medias = media.find(Id => Id.id === id);

        const footer = document.querySelector('.sum-likes');
        let valueFooter = parseInt(footer.textContent);
        valueFooter += 1;
        medias.likes = value;
        footer.textContent = valueFooter;

    }

    // stopCounters(bool,element,value,nbrLikes) {
    //     //const search = element.classList.contains('active') ? value += 1 : value = 1;
    //  if(!bool){
    //     nbrLikes.textContent = value;
    //  }

    // }



}

export {LikesService};