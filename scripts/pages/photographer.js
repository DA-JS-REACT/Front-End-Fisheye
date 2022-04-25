//Mettre le code JavaScript lié à la page photographer.html
import { Api } from '../api/Api.js';
import { PhotographerPageFactory } from '../factories/PhotographerPage.js';
import { MediaFactory } from '../factories/MediaFactory.js';



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
     * @param {array*} photographers
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

    async displayMedia(medias, id ) {
        const section = document.createElement('section');
        section.classList.add('photograph-section');
        this.photographSection.appendChild(section);
        const div = document.createElement('div');
        div.classList.add('photograph-picture');
        section.appendChild(div);
        medias.forEach(media => {
            const mediaModel = new MediaFactory(
                media.id,
                media.photographerId,
                media.title,
                media.image,
                media.likes,
                media.date,
                media.price,
            );
            
            if(media.photographerId === id) {
                const photographPicture = mediaModel.getPageMainSections();
                div.appendChild(photographPicture);
            }

        });
    }
    async init() {
        //TODO check id get with regex pattern
        const photographerId = parseInt(this.urlsearch.get('id'));
        console.log(photographerId);
        const { photographers }  = await this.datas.getAllData();
        this.displayOnePhotographer(photographers,photographerId);
        const { media } = await this.datas.getAllData();
        this.displayMedia(media,photographerId);
    }
}

const pagePhotographer =  new PagePhotographer();
pagePhotographer.init();