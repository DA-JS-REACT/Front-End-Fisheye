import {StateLikes} from '../models/StateLikes.js';
class LikesService {
    constructor(){
        this.state = new StateLikes();
        this.test = new Map();
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
        clickEvent.forEach(btn => btn.addEventListener('click',(evt) => {
            this.handleClickLikes(evt,media);
        }));

    }

    handleClickLikes(evt,media){



        const element = evt.currentTarget;
        
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

        //récupére l'id du media courant
        const id = parseInt(nbrLikes.getAttribute('id'));
        const medias = media.find(Id => Id.id === id);
        this.state.id = id;
        this.state.check = true;



        if(element.classList.contains('active')){
            value++;
            valueFooter++;

        }else {
            value--;
            valueFooter--;
        }



        // //réinjecte la valeur incrémenté
        // nbrLikes.textContent = value;
        // footer.textContent = valueFooter;




        // met à jour le media
        medias.likes = value;

        this.tab(nbrLikes,footer,value,valueFooter,medias);


    }

    tab(nbrLikes,footer,value,valueFooter,medias) {

        const toto = this.test.set(this.state.id,[this.state.check,medias.likes]);
        if(toto.get(this.state.id)){

            for (const value of toto.values()) {
                console.log(value[1]);
                //réinjecte la valeur incrémenté
                nbrLikes.textContent = value[1];
                footer.textContent = valueFooter;
            }
         
           

        }
   
        console.log(toto);
        return toto;

    }



}

export {LikesService};