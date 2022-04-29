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
        const test = document.querySelectorAll('.likes-counter');

        test.forEach(btn => btn.addEventListener('click', evt => {
            let element = evt.currentTarget;
            let parent = element.parentNode;
            let test = parent.querySelector('.counter');
            let id = parseInt(test.getAttribute('id'));

            let value = parseInt(test.textContent);
            value  += 1;
            test.textContent = value;
          
            console.log(value);
            this.refershLikes(media ,value,id);
        }));
    }

    refershLikes(media,value,id) {

        const medias = media.find(Id => Id.id === id);
        console.log('after',medias.likes);
        let footer = document.querySelector('.sum-likes');
        console.log(footer);
        let valueFooter = parseInt(footer.textContent);
        valueFooter += 1;

        footer.textContent= valueFooter;

       
      
    }


}

export {LikesService};