//Mettre le code JavaScript lié à la page photographer.html
import { Api } from '../api/Api.js';
import { PhotographerPageFactory } from '../factories/PhotographerPage.js';
import { MediaFactory } from '../factories/MediaFactory.js';
import { SortFactory } from '../factories/SortFactory.js';




class PagePhotographer {


    constructor() {
        const newLocal = '../data/photographers.json';
        this.datas = new Api(newLocal);
        this.photographHeader = document.querySelector('.photograph-header');
        this.photographSection = document.getElementById('main');
        this.urlsearch = new URLSearchParams(window.location.search);
    }
    /**
     *
     * @param {array} photographers
     * @param {number} id
     */
    async  displayOnePhotographer(photographers ,id ) {
        photographers.forEach(photographer => {
            const photographerModel = new PhotographerPageFactory(
                photographer.id,
                photographer.name,
                photographer.portrait,
                photographer.city,
                photographer.country,
                photographer.tagline,
                photographer.price,
            );
            if (photographer.id  === id) {
                photographerModel.getPageMainHeader().forEach(elt => {
                    this.photographHeader.appendChild(elt );
                });
            }
        });
    }

    /**
     *
     * @param {array} medias
     * @param {number} id
     */
    async displayMedia(medias, id,photographers) {
        const section = document.createElement('section');
        section.classList.add('photograph-section');
        this.photographSection.appendChild(section);
        const div = document.createElement('div');
        div.classList.add('photograph-picture');
        section.appendChild(div);
        this.displaySort(section);
        // permet de récupérer le photographe correspondant à la page
        const photographer = photographers.find(photographerId => photographerId.id === id);

        const resultMedia = medias.filter(media => media.photographerId === id);

        resultMedia.forEach(media => {

            const mediaModel = new MediaFactory(
                media.id,
                media.photographerId,
                media.title,
                media.image,
                media.video,
                media.likes,
                media.date,
                media.price,
            );
            const photographPicture = mediaModel.getPageSectionsArticle(photographer,mediaModel);
            div.appendChild(photographPicture);
        });

    }
    /**
     *
     * @param {HtmlElement} section
     */

    displaySort(section) {
        const form = new SortFactory().getSelectSort();
        section.appendChild(form);
    }

    async init() {
        //TODO check id get with regex pattern
        const photographerId = parseInt(this.urlsearch.get('id'));
        //console.log(photographerId);
        const data  = await this.datas.getAllData();
        const {photographers, media } = data;
        this.displayOnePhotographer(photographers,photographerId);
        this.displayMedia(media,photographerId,photographers);

      
    }
}

const pagePhotographer =  new PagePhotographer();
pagePhotographer.init();