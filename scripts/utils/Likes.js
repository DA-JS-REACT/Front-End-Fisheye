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
        console.log(sum);
        return sum;
    }

    countLikes(media){
        // cible l'élément cliquer
        const ClickEvent = document.querySelectorAll('.likes-counter');
        let value = 0;
        ClickEvent.forEach(btn => btn.addEventListener('click', evt => {

            const element = evt.currentTarget;
            // cible l'élément qui affiche le nombre de likes en fonction du click;
            const nbrLikes = element.previousElementSibling;
            nbrLikes.setAttribute('disabled',true);

            //récupére l'id du media courant
            const id = parseInt(nbrLikes.getAttribute('id'));
            // récupére la valeur du nombre de likes
            let value = parseInt(nbrLikes.textContent);
            // value  += 1;
            // //réinjecte la valeur incrémenté
            // nbrLikes.textContent = value ;
            this.refreshLikes(media,value,id);
            this.stopCounters(nbrLikes ,element, value);

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

    stopCounters(nbrLikes,element,value) {
        const search = nbrLikes.getAttribute('disabled');
        console.log(element);
        if(search){
            console.log(element);
            element.style.backgroundColor = 'red';
            value  += 1;
            nbrLikes.textContent = value ;

        }else {
            nbrLikes.removeAttribute('disabled');
            value = 0;
            nbrLikes.textContent = value ;
            element.style.backgroundColor = 'green';

        }

    }



}

export {LikesService};