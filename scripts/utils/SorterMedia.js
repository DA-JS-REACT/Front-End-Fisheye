
import { ArticleMedia } from '../templates/articleMedia.js';
import{LikesService}  from '../utils/Likes.js';
import {LigthBox} from '../utils/ligthBox.js';



class SorterMedia {

    constructor() {
        this.likes = new LikesService();
        this.ligthBox = new LigthBox();
    }

    /**
     *
     * @param {array} media
     * @param {array} photographers
     * @param {number} id
     */
    ChangeDisplayMedia(media,photographers,id) {

        const select = document.querySelector('.select-sort');
        select.addEventListener('change', event => {
            const inputValue = event.target.value;
            const photographer = photographers.find(photographerId => photographerId.id === id);
            this.OrderBy(media,inputValue).forEach(SortMedia => {
                const mediaModel = new ArticleMedia(
                    SortMedia.id,
                    SortMedia.photographerId,
                    SortMedia.title,
                    SortMedia.image,
                    SortMedia.video,
                    SortMedia.likes,
                    SortMedia.date,
                    SortMedia.price,
                );
                const photographPicture = mediaModel.getPageSectionsArticle(photographer,mediaModel);

                const div = document.querySelector('.photograph-picture');
                const article =  document.querySelector('.article-picture');
                // supprime l'affichage existant
                div.removeChild(article);
                // injecte le nouveau selon le tri
                div.appendChild(photographPicture);
                //
            });
            this.likes.countLikes(media);
            const divImg = document.querySelector('.slide__img');
            this.ligthBox.initializeModal(photographer,media,divImg);
        });
        
    }

    /**
     *
     * @param {array} media
     * @param {string} inputValue
     * @returns {array}
     */
    OrderBy(media,inputValue) {

        const result = media.sort((a,b) => {
            if(inputValue === 'title'){
                return a.title.toLowerCase().localeCompare(b.title);
            } else if(inputValue === 'popular'){
                return b.likes - a.likes;
            } else if(inputValue === 'date'){
                const mini = new Date(b.date).getTime() ;
                const max = new Date(a.date).getTime() ;

                return mini -max ;
            }
        });
        return result;
    }

}

export {SorterMedia};