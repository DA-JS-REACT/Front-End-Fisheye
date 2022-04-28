import { MediaFactory } from '../factories/MediaFactory.js';


class SorterMedia {

    constructor(){

    }

    
    Change(media,photographers,id) {

        const section = document.createElement('section');
        section.classList.add('photograph-section');
        const test  = document.getElementById('main');
        test.appendChild(section);
        const div = document.createElement('div');
        div.classList.add('photograph-picture');
        section.appendChild(div);
        const select = document.querySelector('.select-sort');
        select.addEventListener('change', event => {
            const inputValue = event.target.value;
            const photographer = photographers.find(photographerId => photographerId.id === id);
            this.OrderBy(media,inputValue).forEach(SortMedia => {
                const mediaModel = new MediaFactory(
                    SortMedia.id,
                    SortMedia.photographerId,
                    SortMedia.title,
                    SortMedia.image,
                    SortMedia.video,
                    SortMedia.likes,
                    SortMedia.date,
                    SortMedia.price,
                );
                const photographPicture = mediaModel .getPageSectionsArticle(photographer,media);
                console.log('fred',SortMedia.likes);
                div.appendChild(photographPicture );
            });

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
                //console.log('mini',mini);
                const max = new Date(a.date).getTime() ;
                //console.log('max',max);
                return mini -max ;
            }
        });
        console.log('two',result);
        return result;
    }

}

export {SorterMedia};