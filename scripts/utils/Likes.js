import { MediaFactory } from '../factories/MediaFactory.js';

class LikesService {

    constructor() {
        this.media = new MediaFactory(
            this.likes
        );
    }

    sumLikes(media) {
        let sum = 0;
        media.forEach(likes => {
            const count = likes.likes;
            sum  += count;
        });
        return sum;
    }

    countLikes(media){
        // cible l'élément cliquer
        const clickEvent = document.querySelectorAll('.likes-counter');
        let count = 0;
        // let old = [];
        // old.push(media);
        // const newold = old.slice(0);
        // console.log('old',old);
        // console.log('newold',newold);
        clickEvent.forEach(btn => btn.addEventListener('click',(evt) => {
            this.handleClickLikes(evt,media ,count);
        }));

    }

    handleClickLikes(evt,media){



        const element = evt.currentTarget;
        //this.stopCounters(element);
        this.refreshLikes(media,element);

    }


    refreshLikes(media,element) {

        // cible l'élément qui affiche le nombre de likes en fonction du click;
        const nbrLikes = element.previousElementSibling;
        element.classList.toggle('active');

        // récupére la valeur du nombre de likes sur l'élélment cliqué
        let value = parseInt(nbrLikes.textContent);

        // récupére la valeur du nombre totla de likes dans le footer
        const footer = document.querySelector('.sum-likes');
        let valueFooter = parseInt(footer.textContent);

        if(element.classList.contains('active')){
            value++;
            valueFooter++;
        }else {
            value--;
            valueFooter--;
        }

        //réinjecte la valeur incrémenté
        nbrLikes.textContent = value;
        footer.textContent = valueFooter;


        //récupére l'id du media courant
        const id = parseInt(nbrLikes.getAttribute('id'));
        const medias = media.find(Id => Id.id === id);

        // met à jour le media
        medias.likes = value;

    }

    stopCounters(element) {
        element.removeEventListener('click',(evt) => {
            this.handleClickLikes(evt);
        },true);

    }



}

export {LikesService};