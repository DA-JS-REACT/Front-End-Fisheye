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
        clickEvent.forEach(btn => btn.addEventListener('click',(evt) => {
            this.test(evt,media,count);
        }));

    }

    test(evt,media,count){

        const element = evt.currentTarget;
        // cible l'élément qui affiche le nombre de likes en fonction du click;
        const nbrLikes = element.previousElementSibling;
        element.classList.toggle('active');
        count++;
        console.log(count);
        //récupére l'id du media courant
        const id = parseInt(nbrLikes.getAttribute('id'));
        // récupére la valeur du nombre de likes
        let value = parseInt(nbrLikes.textContent);
        value  += count ;
     
        //réinjecte la valeur incrémenté
        nbrLikes.textContent = value ;
        this.refreshLikes(media,value,id);
        //this.stopCounters(element, value,nbrLikes);

    }


    refreshLikes(media,value,id) {



        const medias = media.find(Id => Id.id === id);

        const footer = document.querySelector('.sum-likes');
        let valueFooter = parseInt(footer.textContent);
        valueFooter += 1;
        medias.likes = value;
        footer.textContent = valueFooter;

    }

    stopCounters(element,evt,value,nbrLikes) {
        //const search = element.classList.contains('active') ? value += 1 : value = 1;
       
        element.removeEventListener('click',(evt) => {
            this.test(evt);
        },false);
   
    }



}

export {LikesService};